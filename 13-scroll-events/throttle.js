(function (window, document) {
  'use strict';

  const images = document.querySelectorAll('.slide-in');

  const slideIn = () => {
    let bottomY = window.innerHeight + window.scrollY;

    images.forEach(img => {
      let halfpoint = img.offsetTop + img.offsetHeight / 2;
      bottomY >= halfpoint ? img.classList.add('active') : img.classList.remove('active');
    });

    window.requestAnimationFrame(slideIn);
  };

  window.requestAnimationFrame(slideIn);

}(window, document));
