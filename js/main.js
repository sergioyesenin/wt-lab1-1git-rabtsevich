/* ============ AOS ============ */
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: false,      // анимации проигрываются при каждом проходе
  offset: 80
});

/* ============ Шапка: прозрачная наверху, тёмная при прокрутке ============ */
(function () {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const toggle = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  };

  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
})();