(function (document) {
  'use strict';

  const video = document.querySelector('video');
  const speed = document.querySelector('.speed');
  const speedBar = document.querySelector('.speed-bar');
  const playbackSpeed = { min: 0.4, max: 4 };

  speed.addEventListener('mousemove', function (e) {
    const mouseY = e.pageY - this.offsetTop;
    const percent = mouseY / this.offsetHeight;
    const rate = percent * (playbackSpeed.max - playbackSpeed.min) + playbackSpeed.min;

    speedBar.style.height = `${percent * 100}%`;
    speedBar.textContent = `${rate.toFixed(2)}×`;
    video.playbackRate = rate;
  });

}(document));
