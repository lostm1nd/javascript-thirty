(function (document) {
  'use strict';

  const toggleOpen = panel => panel.classList.toggle('open');

  const panels = document.querySelectorAll('.panel');

  panels.forEach(p => p.addEventListener('click', toggleOpen.bind(null, p)));
}(document));
