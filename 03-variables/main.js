(function (document) {
  'use strict';

  const inputs = document.querySelectorAll('.controls input');

  const handleChange = e =>
    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value);

  inputs.forEach(i => i.addEventListener('change', handleChange));

}(document));
