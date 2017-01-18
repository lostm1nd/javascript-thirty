(function (document) {
  'use strict';

  const divs = document.querySelectorAll('div');

  const capture = function () {
    console.log('CAPTURE', this.classList);
  };

  const stopCapture = function () {
    console.log('STOP CAPTURE', this.classList);
  };

  const bubble = function () {
    console.log('BUBBLE', this.classList);
  };

  const stopBubble = function (e) {
    e.stopPropagation();
    console.log('STOP BUBBLE', this.classList);
  };

  const once = function (e) {
    console.log('ONLY ONCE', this.classList);
  };

  divs.forEach(d => {
    d.addEventListener('click', capture, true);
    // d.addEventListener('click', stopCapture, true);
    d.addEventListener('click', bubble);
    // d.addEventListener('click', stopBubble);
    d.addEventListener('click', once, { once: true });
  });
}(document));
