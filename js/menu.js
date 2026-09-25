// Mobiel menu open/dicht en het jaartal in de voettekst.
(function () {
  var knop = document.querySelector('.menu-knop');
  var menu = document.getElementById('hoofdmenu');
  if (knop && menu) {
    knop.addEventListener('click', function () {
      var open = knop.getAttribute('aria-expanded') === 'true';
      knop.setAttribute('aria-expanded', open ? 'false' : 'true');
      menu.classList.toggle('open', !open);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        knop.setAttribute('aria-expanded', 'false');
        menu.classList.remove('open');
        knop.focus();
      }
    });
  }
  var jaar = document.getElementById('jaar');
  if (jaar) jaar.textContent = String(new Date().getFullYear());
})();
