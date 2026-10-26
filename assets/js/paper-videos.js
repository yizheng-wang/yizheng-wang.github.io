(function () {
  'use strict';

  var dialog = document.getElementById('paper-video-dialog');
  // The links still open the MP4 directly without JavaScript or dialog support.
  if (!dialog || typeof dialog.showModal !== 'function') return;

  var player = dialog.querySelector('video');
  var title = document.getElementById('paper-video-title');
  var directLink = dialog.querySelector('.paper-video-direct');
  var languageLabel = dialog.querySelector('.paper-video-language');
  var error = dialog.querySelector('.paper-video-error');
  var languageButtons = dialog.querySelectorAll('[data-language]');
  var activeGroup;
  var activeLanguage;

  function selectLanguage(language) {
    if (activeLanguage === language) return;
    activeLanguage = language;
    var link = activeGroup.querySelector('[data-language="' + language + '"]');
    player.pause();
    error.hidden = true;
    player.poster = activeGroup.dataset.poster;
    player.src = link.href;
    player.preload = 'metadata';
    player.setAttribute('aria-label', activeGroup.dataset.title + ' — ' + (language === 'zh' ? '中文' : 'English'));
    directLink.href = link.href;
    languageLabel.textContent = language === 'zh' ? '中文版本' : 'English edition';
    languageButtons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    player.load();
  }

  document.querySelectorAll('.paper-video-link').forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      activeGroup = link.closest('.paper-video-links');
      title.textContent = activeGroup.dataset.title;
      selectLanguage(link.dataset.language);
      dialog.showModal();
      document.documentElement.classList.add('paper-video-open');
    });
  });

  languageButtons.forEach(function (button) {
    button.addEventListener('click', function () { selectLanguage(button.dataset.language); });
  });
  dialog.querySelector('.paper-video-close').addEventListener('click', function () { dialog.close(); });
  // Escape is handled by the native dialog; clicking the backdrop closes it too.
  dialog.addEventListener('click', function (event) {
    var bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener('close', function () {
    player.pause();
    player.removeAttribute('src');
    player.removeAttribute('poster');
    player.preload = 'none';
    player.load();
    activeLanguage = null;
    document.documentElement.classList.remove('paper-video-open');
  });
  player.addEventListener('error', function () {
    if (dialog.open && player.hasAttribute('src')) error.hidden = false;
  });
}());
