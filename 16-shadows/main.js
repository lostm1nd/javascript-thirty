(function () {
  'use strict';

  const hero = document.querySelector('.hero');
  const heading = hero.querySelector('h1');
  const walk = 30;

  hero.addEventListener('mousemove', (e) => {
    let { offsetX: x, offsetY: y } = e;

    if (e.target === heading) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const shadowX = x / hero.offsetWidth * walk - walk / 2;
    const shadowY = y / hero.offsetHeight * walk - walk / 2;

    heading.style.textShadow = `${shadowX}px ${shadowY}px 2px darkgray`
  });
}());
