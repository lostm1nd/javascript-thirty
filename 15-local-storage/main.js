(function (document) {
  'use strict';

  const itemsList = document.querySelector('.plates');
  const addItems = document.querySelector('.add-items');

  const items = {
    get() {
      return JSON.parse(localStorage.getItem('plates')) || [];
    },
    add(text) {
      const item = { text: text, done: false };
      const items = this.get();

      items.push(item);
      localStorage.setItem('plates', JSON.stringify(items));
    },
    remove(index) {
      const items = this.get();

      items.splice(index, 1);
      localStorage.setItem('plates', JSON.stringify(items));
    },
    toggleDone(index) {
      const items = this.get();

      items[index].done = !items[index].done;
      localStorage.setItem('plates', JSON.stringify(items));
    }
  };

  const removeChildren = (node) => {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  };

  const renderList = (list, items = []) => {
    const fragment = document.createDocumentFragment();
    const element = document.createElement('li');

    items.forEach((item, i) => {
      const clone = element.cloneNode();

      clone.innerHTML = `
        <input type="checkbox" data-index="${i}" id="plate-${i}" ${item.done ? 'checked': ''}/>
        <label for="plate-${i}">${item.text}</label>
        <span class="delete" data-index="${i}">&times;</span>
      `;
      fragment.appendChild(clone);
    });

    list.appendChild(fragment);
  };

  const updateList = (list, items) => {
    removeChildren(list);
    renderList(list, items);
  };


  itemsList.addEventListener('change', (e) => {
    const index = e.target.dataset.index;

    items.toggleDone(index);
  });

  itemsList.addEventListener('click', (e) => {
    if (!e.target.matches('.delete')) {
      return;
    }

    const index = e.target.dataset.index;

    items.remove(index);
    updateList(itemsList, items.get());
  });

  addItems.addEventListener('submit', (e) => {
    const text = e.target.querySelector('input[type="text"]').value;

    items.add(text);
    updateList(itemsList, items.get());
    e.preventDefault();
    e.target.reset();
  });

  document.addEventListener('DOMContentLoaded', () => updateList(itemsList, items.get()));
}(document));
