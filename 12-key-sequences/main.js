(function() {
  'use strict';

  const code = 'cornify';

  let keys = [];
  let lastInteraction = 0;

  const trackSequence = (e) => {
    let ms = (new Date()).getTime();

    if (ms - lastInteraction > 1500) {
      keys = [];
    }

    lastInteraction = ms;
    keys.push(e.keyCode);

    if (keys.join('') === code) {
      console.log('%c Unlimiter lives $$', 'font-size: 24px');
    }
  };

  document.addEventListener('keyup', trackSequence);
}());
