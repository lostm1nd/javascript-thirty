(function (window, document) {
  'use strict';

  const baseAngle = 90;
  const angleBy12 = 360 / 12;
  const angleBy60 = 360 / 60;
  const hourHand = document.querySelector('.hour-hand');
  const minHand = document.querySelector('.min-hand');
  const secHand = document.querySelector('.second-hand');

  const getDate = () => {
    const date = new Date();

    return {
      hours: date.getHours() % 12,
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    };
  };

  const calculateRotation = (time, angle) => `rotate(${baseAngle + time * angle}deg)`;

  const updateClock = function () {
    const date = getDate();

    // remove flickering when going from 450deg to 90deg
    secHand.style.transition = date.seconds === 0 ? 'none' : null;

    hourHand.style.transform = calculateRotation(date.hours, angleBy12);
    minHand.style.transform = calculateRotation(date.minutes, angleBy60);
    secHand.style.transform = calculateRotation(date.seconds, angleBy60);

    window.requestAnimationFrame(updateClock);
  };

  window.requestAnimationFrame(updateClock);
}(window, document));
