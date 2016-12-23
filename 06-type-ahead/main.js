(function (document, fetch) {
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  const searchfield = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');
  let cities = [];

  const findMatches = (array, term) => {
    const regex = new RegExp(term, 'gi');
    return array.filter(i => i.city.match(regex) || i.state.match(regex));
  };

  const createListItems = (items, search) => {
    const fragment = document.createDocumentFragment();
    const element = document.createElement('li');
    const regex = new RegExp(search, 'gi');

    items.forEach(i => {
      const clone = element.cloneNode();
      const city = i.city.replace(regex, `<span class="hl">${search}</span>`);
      const state = i.state.replace(regex, `<span class="hl">${search}</span>`);
      const population = Number.parseInt(i.population).toLocaleString('en-US');

      clone.innerHTML = `
        <span class="name">${city}, ${state}</span>
        <span class="population">${population}</span>`;

      fragment.appendChild(clone);
    });

    return fragment;
  };

  const removeChildren = node => {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  };

  const onSeach = e => {
    const matches = findMatches(cities, e.target.value);
    const items = createListItems(matches, e.target.value);

    removeChildren(suggestions);
    suggestions.appendChild(items);
  };


  searchfield.addEventListener('input', onSeach);

  fetch(endpoint)
    .then(res => res.json())
    .then(data => cities = data);


}(document, fetch));
