(function (window, document) {
  'use strict';

  const links = document.querySelectorAll('a');
  const highlight = document.querySelector('.highlight');

  const highlightLink = (event) => {
    const rect = event.target.getBoundingClientRect();

    highlight.style.width = `${rect.width}px`;
    highlight.style.height = `${rect.height}px`;
    highlight.style.transform = `translate(${rect.left + window.scrollX}px, ${rect.top + window.scrollY}px)`;
  };

  links.forEach(l => l.addEventListener('mouseenter', highlightLink));
}(window, document));
