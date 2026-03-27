// ================================================================
// Mark Anthony Home Improvement — hamburger.js
// Mobile nav toggle
// Add to index.html before </body>:
// <script src="hamburger.js"></script>
// ================================================================

(function () {
  // Inject the hamburger button and mobile menu into the existing nav
  const nav = document.querySelector('nav');

  // Hamburger button
  const btn = document.createElement('button');
  btn.className = 'nav-hamburger';
  btn.setAttribute('aria-label', 'Open menu');
  btn.innerHTML = '<span></span><span></span><span></span>';
  nav.appendChild(btn);

  // Full-screen mobile menu
  const menu = document.createElement('div');
  menu.className = 'nav-mobile-menu';
  menu.innerHTML = `
    <button class="nav-mobile-close" aria-label="Close menu">&times;</button>
    <a href="#about"    onclick="closeMenu()">About</a>
    <a href="#work"     onclick="closeMenu()">Work</a>
    <a href="#services" onclick="closeMenu()">Services</a>
    <a href="#contact"  onclick="closeMenu()">Contact</a>
    <a href="#contact"  class="nav-mobile-cta" onclick="closeMenu()">Get a Quote</a>
  `;
  document.body.appendChild(menu);

  function openMenu() {
    btn.classList.add('open');
    menu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  window.closeMenu = function () {
    btn.classList.remove('open');
    menu.classList.remove('open');
    document.body.style.overflow = '';
  };

  btn.addEventListener('click', function () {
    menu.classList.contains('open') ? closeMenu() : openMenu();
  });

  menu.querySelector('.nav-mobile-close').addEventListener('click', closeMenu);

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
})();
