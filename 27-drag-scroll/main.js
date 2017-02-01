(function (document) {
  'use strict';

  const slider = document.querySelector('.items');

  let isMouseDown = false;
  let startX = 0;
  let scrolledIn = 0;

  const getOffsetLeftByParent = (parent, event) => {
    return event.pageX - parent.offsetLeft;
  };

  const getSliderOffsetLeft = getOffsetLeftByParent.bind(null, slider);

  const onMouseDown = (e) => {
    isMouseDown = true;
    startX = getSliderOffsetLeft(e);
    scrolledIn = slider.scrollLeft;
    slider.classList.add('active');
  };

  const onMouseUp = () => {
    isMouseDown = false;
    slider.classList.remove('active');
  };

  const onMouseMove = (e) => {
    e.preventDefault();

    if (!isMouseDown) {
      return;
    }

    const currentX = getSliderOffsetLeft(e);
    const distance = currentX - startX;

    slider.scrollLeft = scrolledIn - distance;
  };

  slider.addEventListener('mousedown', onMouseDown);
  slider.addEventListener('mouseleave', onMouseUp);
  slider.addEventListener('mouseup', onMouseUp);
  slider.addEventListener('mousemove', onMouseMove);
}(document));
