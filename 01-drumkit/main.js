(function () {
  'use strict';

  const highlightClass = 'playing';
  const keys = document.querySelectorAll('.key');
  const sounds = document.querySelectorAll('audio');

  const clearTransition = (event) => {
    if (event.propertyName !== 'transform') {
      return;
    }

    event.target.classList.remove(highlightClass);
  };

  const playSound = (event) => {
    const keyCode = event.keyCode.toString();

    keys.forEach(k => k.dataset.key === keyCode && k.classList.add(highlightClass));
    sounds.forEach(s => {
      if (s.dataset.key !== keyCode) {
        return;
      }

      s.currentTime = 0;
      return s.play();
    });
  };

  keys.forEach(k => k.addEventListener('transitionend', clearTransition));
  document.addEventListener('keyup', playSound);
}());
