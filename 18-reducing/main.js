(function (document) {
  'use strict';

  const videos = Array.from(document.querySelectorAll('.videos li'));

  let totalSeconds = videos.reduce((total, video) => {
    const [min, sec] = video.dataset.time.split(':');

    return total + parseInt(min) * 60 + parseInt(sec);
  }, 0);

  const hours = Math.floor(totalSeconds / 60 / 60);

  totalSeconds = totalSeconds % 3600;

  const minutes = Math.floor(totalSeconds / 60);

  totalSeconds = totalSeconds % 60;

  console.log(`Total running time - ${hours}:${minutes}:${totalSeconds}`);
}(document));
