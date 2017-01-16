(function (window, document) {
  'use strict';

  const utterance = new SpeechSynthesisUtterance();
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"]');
  const textarea = document.querySelector('textarea');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');

  let voices = [];

  const getEnglishVoices = () => {
    const voices = window.speechSynthesis.getVoices();
    return voices.filter(v => v.lang.includes('en'));
  };

  const populateDropdown = (items, dropdown) => {
    const fragment = document.createDocumentFragment();
    const option = document.createElement('option');

    items.forEach(i => {
      const clone = option.cloneNode();
      clone.textContent = i.name;
      fragment.appendChild(clone);
    });

    dropdown.appendChild(fragment);
  };

  const setVoice = (e) => {
    const voice = voices.find(v => v.name === e.target.value);

    window.speechSynthesis.cancel();
    utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  };

  const populateText = () => {
    const text = textarea.value;
    utterance.text = text;
  };

  const setOption = (e) => {
    utterance[e.target.name] = e.target.value;
  };

  window.speechSynthesis.addEventListener('voiceschanged', () => {
    if (voices.length > 0) {
      return;
    }

    voices = getEnglishVoices();
    populateDropdown(voices, voicesDropdown);
  });

  voicesDropdown.addEventListener('change', setVoice);
  options.forEach(opt => opt.addEventListener('change', setOption));
  textarea.addEventListener('change', populateText);
  speakButton.addEventListener('click', () => window.speechSynthesis.speak(utterance));
  stopButton.addEventListener('click', () => window.speechSynthesis.cancel());

  document.addEventListener('DOMContentLoaded', populateText);
}(window, document));
