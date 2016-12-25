(function () {
  'use strict';

  const player = document.querySelector('.player');
  const video = player.querySelector('.player__video');
  const timeline = player.querySelector('.progress');
  const progress = player.querySelector('.progress__filled');
  const toggleButton = player.querySelector('.player__button.toggle');
  const skipButtons = player.querySelectorAll('.player__button.skip');
  const sliders = player.querySelectorAll('.player__slider');
  const fullscreen = player.querySelector('.fullscreen');

  const updateProgress = () =>
    progress.style.flexBasis = (video.currentTime / video.duration) * 100 + '%';

  const scrub = (e) =>
    video.currentTime = video.duration * (e.offsetX / timeline.offsetWidth);

  const togglePlay = () =>
    video.paused ? video.play() : video.pause();

  const updateToggleButton = () =>
    toggleButton.textContent = video.paused ? '▶' : '||';

  const skipTime = (e) =>
    video.currentTime += Number.parseInt(e.target.dataset.skip);

  const changeProperty = (e) => {
    video[e.target.name] = e.target.value;
    e.target.setAttribute('value', e.target.value);
  };

  const toggleFullscreen = () =>
    video.webkitRequestFullScreen();

  video.addEventListener('timeupdate', updateProgress);
  timeline.addEventListener('click', scrub);

  video.addEventListener('click', togglePlay);
  toggleButton.addEventListener('click', togglePlay);

  video.addEventListener('play', updateToggleButton);
  video.addEventListener('pause', updateToggleButton);

  fullscreen.addEventListener('click', toggleFullscreen);

  skipButtons.forEach(s => s.addEventListener('click', skipTime));
  sliders.forEach(s => s.addEventListener('change', changeProperty));
}());
