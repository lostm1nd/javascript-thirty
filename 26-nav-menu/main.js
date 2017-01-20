(function (document) {
  'use strict';

  const nav = document.querySelector('nav');
  const background = document.querySelector('.dropdownBackground');
  const navItems = document.querySelectorAll('.cool > li');

  const addStyles = function (element, styles) {
    Object.entries(styles).forEach(function ([key, value]) {
       element.style[key] = `${value}px`;
    });
  };

  const handleEnter = function (e) {
    e.target.classList.add('trigger-enter');

    const dropdownRect = e.target.querySelector('.dropdown').getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    addStyles(background, {
      top: dropdownRect.top - navRect.top,
      left: dropdownRect.left - navRect.left,
      width: dropdownRect.width,
      height: dropdownRect.height
    });

    background.classList.add('open');

    setTimeout(() => {
      return e.target.classList.contains('trigger-enter') &&
        e.target.classList.add('trigger-enter-active');
    }, 150);
  };

  const handleLeave = function (e) {
    e.target.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
  };

  navItems.forEach(i => {
    i.addEventListener('mouseenter', handleEnter);
    i.addEventListener('mouseleave', handleLeave);
  });
}(document));
