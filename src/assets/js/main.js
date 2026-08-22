document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');

  if (!navToggle || !siteNav) return;

  function closeNav() {
    navToggle.setAttribute('aria-expanded', 'false');
    siteNav.classList.remove('open');
  }

  navToggle.addEventListener('click', function () {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    siteNav.classList.toggle('open');
  });

  // Close nav when clicking a link
  siteNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  // Close nav on ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeNav();
    }
  });

  // Close nav when clicking outside
  document.addEventListener('click', function (e) {
    if (
      siteNav.classList.contains('open') &&
      !siteNav.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      closeNav();
    }
  });
});