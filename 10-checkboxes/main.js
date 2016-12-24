(function (document) {
  'use strict';

  let lastSelectedIndex;
  const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

  const onClick = (index, event) => {
    if (event.shiftKey) {
      let [from, to] = [Math.min(index, lastSelectedIndex), Math.max(index, lastSelectedIndex)];
      checkboxes.slice(from, to + 1).forEach(c => c.checked = checkboxes[lastSelectedIndex].checked);
    }

    lastSelectedIndex = index;
  };


  checkboxes.forEach((c, i) => c.addEventListener('click', onClick.bind(null, i)));

}(document));
