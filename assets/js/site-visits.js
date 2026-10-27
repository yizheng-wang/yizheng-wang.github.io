(function () {
  'use strict';

  var counter = document.getElementById('site-visit-counter');
  var value = document.getElementById('busuanzi_value_site_pv');
  var status = document.getElementById('site-visit-status');
  if (!counter || !value || !status) return;

  // Keep the original provider and referrer: changing providers resets the total.
  // This is a page-view counter; never retry automatically or increment locally.
  var cacheKey = 'site-visits:busuanzi:v1:' + window.location.hostname;
  var cached;
  var received = false;
  function validCount(count) {
    return (typeof count === 'number' || typeof count === 'string') &&
      /^\d+$/.test(String(count)) && Number.isSafeInteger(Number(count));
  }
  try {
    cached = JSON.parse(window.localStorage.getItem(cacheKey));
    if (!cached || !validCount(cached.count) ||
        !Number.isFinite(cached.savedAt) || cached.savedAt <= 0) cached = null;
  } catch (error) { cached = null; }

  function showPending(failed) {
    if (received) return;
    if (cached) {
      value.textContent = String(cached.count);
      status.textContent = '（缓存）';
      counter.title = '上次成功获取：' + new Date(cached.savedAt).toLocaleString() +
        (failed ? '；统计服务暂未返回最新数据' : '；正在更新');
    } else {
      value.textContent = failed ? '暂不可用' : '加载中…';
      status.textContent = '';
      counter.title = failed ? '统计服务暂未返回数据，请稍后访问。此状态不代表浏览次数为零。' : '正在获取全站浏览次数';
    }
  }
  showPending(false);

  var callback = 'BusuanziCallback_' + Date.now() + '_' + Math.floor(Math.random() * 1000000);
  var script = document.createElement('script');
  // Keep the callback after the display timeout so a slow response can recover.
  var timeout = window.setTimeout(function () { showPending(true); }, 8000);
  function cleanup() {
    window.clearTimeout(timeout);
    script.remove();
    delete window[callback];
  }
  window[callback] = function (data) {
    if (!data || !validCount(data.site_pv)) {
      showPending(true);
      cleanup();
      return;
    }
    received = true;
    var count = Number(data.site_pv);
    value.textContent = String(count);
    status.textContent = '';
    counter.title = '全站浏览次数 · 不蒜子统计';
    try {
      window.localStorage.setItem(cacheKey, JSON.stringify({count: count, savedAt: Date.now()}));
    } catch (error) { /* Storage can be disabled; the live count still works. */ }
    cleanup();
  };
  script.async = true;
  script.referrerPolicy = 'no-referrer-when-downgrade';
  script.src = 'https://busuanzi.ibruce.info/busuanzi?jsonpCallback=' + callback;
  script.onerror = script.onload = function () {
    // A loaded script without a valid callback is also an unavailable result.
    if (!received) showPending(true);
    cleanup();
  };
  document.head.appendChild(script);
}());
