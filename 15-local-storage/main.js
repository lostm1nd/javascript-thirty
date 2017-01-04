(function (document) {
  'use strict';

  const itemsList = document.querySelector('.plates');
  const addItems = document.querySelector('.add-items');
  const items = JSON.parse(localStorage.getItem('plates')) || [];

  const addItem = (text) => {
    const item = { text: text, done: false };

    items.push(item);
    localStorage.setItem('plates', JSON.stringify(items));
  };

  const removeChildren = (node) => {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  };

  const renderList = (list, items = []) => {
    const fragment = document.createDocumentFragment();
    const element = document.createElement('li');

    removeChildren(list);
    items.forEach((item, i) => {
      const clone = element.cloneNode();

      clone.innerHTML = `
        <input type="checkbox" data-index="${i}" id="plate-${i}" ${item.done ? 'checked': ''}/>
        <label for="plate-${i}">${item.text}</label>
        <span class="delete" data-index="${i}">x</span>
      `;
      fragment.appendChild(clone);
    });

    list.appendChild(fragment);
  };

  renderList(itemsList, items);

  itemsList.addEventListener('change', (e) => {
    const index = e.target.dataset.index;

    items[index].done = e.target.checked;
    localStorage.setItem('plates', JSON.stringify(items));
  });

  itemsList.addEventListener('click', (e) => {
    const index = e.target.dataset.index;

    items.splice(index, 1);
    renderList(itemsList, items);
    localStorage.setItem('plates', JSON.stringify(items));
  });

  addItems.addEventListener('submit', (e) => {
    const text = e.target.querySelector('input[type="text"]').value;

    addItem(text);
    renderList(itemsList, items);
    e.preventDefault();
    e.target.reset();
  });
}(document));
