(function (document) {
  'use strict';

  const list = document.querySelector('#bands');
  const button = document.querySelector('#sort-button');
  const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
  ];

  /**
   * Strips leading articles - 'the', 'an', 'a'
   */
  const stripArticles = (text) => {
    return text.replace(/^(the|an|a)\b\s/i, '');
  };

  /**
   * Sort without articles - 'the', 'an', 'a'
   */
  const sortWithoutArticles = (a, b) => {
    if (stripArticles(a) > stripArticles(b)) {
      return 1;
    } else if (stripArticles(a) < stripArticles(b)) {
      return -1;
    } else {
      return 0;
    }
  };

  const populateList = () => {
    const html = bands.map(b => `<li>${b}</li>`);
    list.innerHTML = html.join('');
  };

  button.addEventListener('click', () => {
    bands.sort(sortWithoutArticles);
    populateList();
  });

  document.addEventListener('DOMContentLoaded', populateList);

}(document));
