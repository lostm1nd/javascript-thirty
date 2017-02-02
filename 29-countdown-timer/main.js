(function (window, document) {
  'use strict';

  const timeLeft = document.querySelector('.display__time-left');
  const endTime = document.querySelector('.display__end-time');
  const buttons = document.querySelectorAll('.timer__button');

  const formatMinutesAndSeconds = function (seconds) {
    return {
      minutes: Math.floor(seconds / 60),
      seconds: seconds % 60 > 10 ? seconds % 60 : `0${seconds % 60}`
    };
  };

  const updateTextContent = function (element, text) {
    element.textContent = text;
  };

  const updateDocumentTitle = function (text) {
    document.title = text;
  };

  const timer = function (cb, seconds) {
    const start = Date.now();
    const end = start + seconds * 1000;

    if (timer.frameId) {
      window.cancelAnimationFrame(timer.frameId);
    }

    const countdown = function () {
      const now = Date.now();
      const seconds = Math.round((end - now) / 1000);

      if (now > end) {
        return;
      }

      cb(seconds);
      timer.frameId = window.requestAnimationFrame(countdown);
    };

    return countdown(end);
  };

  const updateTimeDisplay = function (seconds) {
    const time = formatMinutesAndSeconds(seconds);
    const text = `${time.minutes}:${time.seconds}`;

    updateTextContent(timeLeft, text);
    updateDocumentTitle(text);
  };

  const domTimer = function (seconds) {
    const endDate = new Date(Date.now() + seconds * 1000);
    const paddedMinutes = ('0' + endDate.getMinutes()).slice(-2);

    updateTextContent(endTime, `Starting at ${endDate.getHours()}:${paddedMinutes}`);
    frameId = timer(updateTimeDisplay, seconds);
  };

  buttons.forEach(b => b.addEventListener('click', e => domTimer(e.target.dataset.time | 0)));
  document.timerForm.addEventListener('submit', e => {
    e.preventDefault();
    domTimer(e.target.minutes.value * 60);
  });
}(window, document));
