(function (window, document) {
  'use strict';

  const nav = document.querySelector('#navigation');
  const navOffsetTop = nav.offsetTop;
  const navOffsetHeight = nav.offsetHeight;

  const toggleFixedNav = () => {
    if (window.scrollY >= navOffsetTop) {
      document.body.classList.add('fixed-nav');
      document.body.style.paddingTop = `${navOffsetHeight}px`;
    } else {
      document.body.classList.remove('fixed-nav');
      document.body.style.paddingTop = 0;
    }
  };

  window.addEventListener('scroll', toggleFixedNav);

}(window, document));
