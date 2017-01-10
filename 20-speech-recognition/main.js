(function (window, document) {
  'use strict';

  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const words = document.querySelector('.words');
  const recognition = new window.SpeechRecognition();

  const fireUp = () => {
    words.appendChild(document.createElement('p'));
    recognition.interimResults = true;
    recognition.start();
  };

  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results).map(r => r[0]).map(r => r.transcript).join('');
    const lastParagpraph = words.lastChild;

    lastParagpraph.textContent = transcript;
  });

  recognition.addEventListener('end', fireUp);

  fireUp();

}(window, document));
