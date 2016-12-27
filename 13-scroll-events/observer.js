(function (document, IntersectionObserver) {
  'use strict';

  if (!IntersectionObserver) {
    return console.log('%c this demo uses IntersectionObserver', 'fonst-size:24px');
  }

  const images = document.querySelectorAll('.slide-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => e.target.classList.toggle('active'));
  });

  images.forEach(image => observer.observe(image));

}(document, IntersectionObserver));
