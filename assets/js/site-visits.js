(function () {
  'use strict';

  var counter = document.getElementById('site-visit-counter');
  var value = document.getElementById('busuanzi_value_site_pv');
  var status = document.getElementById('site-visit-status');
  if (!counter || !value || !status) return;

  var goatSite = counter.getAttribute('data-goatcounter-site') || '';
  var startedOn = counter.getAttribute('data-started-on') || '';
  var productionHost = counter.getAttribute('data-production-host') || '';
  var newPeriod = goatSite ? (/^\d{4}-\d{2}-\d{2}$/.test(startedOn) ? '（自 ' + startedOn + '）' : '（新统计）') : '';
  // Never mix providers' totals or count a page view again on a display retry.
  var cacheKey = 'site-visits:' + (goatSite ? 'goatcounter:' + goatSite : 'busuanzi') + ':v1:' + window.location.hostname;
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
      status.textContent = newPeriod + '（缓存）';
      counter.title = '上次成功获取：' + new Date(cached.savedAt).toLocaleString() +
        (failed ? '；统计服务暂未返回最新数据' : '；正在更新');
    } else {
      value.textContent = failed ? '暂不可用' : '加载中…';
      status.textContent = newPeriod;
      counter.title = failed ? '统计服务暂未返回数据，请稍后访问。此状态不代表浏览次数为零。' : '正在获取全站浏览次数';
    }
  }
  showPending(false);

  function showCount(count, source) {
    received = true;
    value.textContent = String(count);
    status.textContent = newPeriod;
    counter.title = '全站浏览次数 · ' + source;
    try {
      window.localStorage.setItem(cacheKey, JSON.stringify({count: count, savedAt: Date.now()}));
    } catch (error) { /* Live counts also work with browser storage disabled. */ }
  }

  if (goatSite) {
    if (!/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(goatSite)) {
      showPending(true);
      return;
    }
    var goatBase = 'https://' + goatSite + '.goatcounter.com';
    // Local previews may read totals, but must not register production visits.
    if (window.location.hostname === productionHost) {
      var tracker = document.createElement('script');
      tracker.async = true;
      tracker.setAttribute('data-goatcounter', goatBase + '/count');
      tracker.src = 'https://gc.zgo.at/count.js';
      document.head.appendChild(tracker);
    }
    var goatTimeout = window.setTimeout(function () { showPending(true); }, 8000);
    window.fetch(goatBase + '/counter/TOTAL.json', {credentials: 'omit'})
      .then(function (response) {
        if (!response.ok) throw new Error('Counter unavailable');
        return response.json();
      })
      .then(function (data) {
        var formatted = data && data.count;
        if (!/^(?:\d+|\d{1,3}(?:,\d{3})+)$/.test(String(formatted))) throw new Error('Invalid counter');
        var raw = String(formatted).replace(/,/g, '');
        if (!validCount(raw)) throw new Error('Invalid counter');
        showCount(Number(raw), 'GoatCounter；公开数字可能有最多 4 小时更新延迟');
      })
      .catch(function () { showPending(true); })
      .then(function () { window.clearTimeout(goatTimeout); });
    return;
  }

  // Keep the original provider and referrer until migration is configured.
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
    var count = Number(data.site_pv);
    showCount(count, '不蒜子统计');
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
