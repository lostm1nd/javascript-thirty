(function (window, document) {
  'use strict';

  const baseAngle = 90;
  const angleBy12 = 360 / 12;
  const angleBy60 = 360 / 60;
  const hourHand = document.querySelector('.hour-hand');
  const minHand = document.querySelector('.min-hand');
  const secHand = document.querySelector('.second-hand');

  const updateClock = function () {
    const date = new Date();
    const hours = date.getHours() % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // remove flickering when going from 450deg to 90deg
    secHand.style.transition = seconds === 0 ? 'none' : null;

    hourHand.style.transform = `rotate(${baseAngle + hours * angleBy12}deg)`;
    minHand.style.transform = `rotate(${baseAngle + minutes * angleBy60}deg)`;
    secHand.style.transform = `rotate(${baseAngle + seconds * angleBy60}deg)`;

    window.requestAnimationFrame(updateClock);
  };

  window.requestAnimationFrame(updateClock);
}(window, document));
