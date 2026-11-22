(function () {
  var storageKey = 'gti-lang';
  var saved = null;

  try {
    saved = localStorage.getItem(storageKey);
  } catch (error) {
    saved = null;
  }

  var browserLang = (navigator.language || '').toLowerCase();
  var wantsEnglish = saved === 'en' || (!saved && browserLang.indexOf('pt') !== 0);

  if (wantsEnglish && location.pathname === '/') {
    location.replace('/en/');
    return;
  }

  document.addEventListener('click', function (event) {
    var target = event.target;
    var link = target && target.closest ? target.closest('[data-lang]') : null;
    if (!link) {
      return;
    }
    try {
      localStorage.setItem(storageKey, link.getAttribute('data-lang'));
    } catch (error) {
      // Preferência manual sem persistência se o armazenamento estiver bloqueado.
    }
  });
})();
