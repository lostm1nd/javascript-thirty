(function (navigator, window, document) {
  'use strict';

  const canvas = document.querySelector('.photo');
  const ctx = canvas.getContext('2d');

  const video = document.querySelector('.player');
  const strip = document.querySelector('.strip');
  const snapButton = document.querySelector('button.snap');
  const snapAudio = document.querySelector('audio.snap');
  const rgb = document.querySelector('.rgb');

  const getVideo = function () {
    return navigator.mediaDevices.getUserMedia({ video: true, audio: false });
  };

  const streamVideo = function (stream) {
    video.src = window.URL.createObjectURL(stream);
    return video.play();
  };

  const resizeCanvas = function () {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    return { width: video.videoWidth, height: video.videoHeight };
  };

  const greenScreen = function (size) {
    const levels = Array.from(rgb.querySelectorAll('input')).reduce((acc, input) => {
      acc[input.name] = input.value;
      return acc;
    }, {});

    let pixels = ctx.getImageData(0, 0, size.width, size.height);

    for (let i = 0; i < pixels.data.length; i += 4) {
      let red = pixels.data[i + 0];
      let green = pixels.data[i + 1];
      let blue = pixels.data[i + 2];

      if (levels.rmin <= red && red <= levels.rmax &&
          levels.gmin <= green && green <= levels.gmax &&
          levels.bmin <= blue && blue <= levels.bmax) {
        pixels.data[i + 3] = 0;
      }
    }

    ctx.putImageData(pixels, 0, 0);
  };

  const paintToCanvas = function (size) {
    ctx.drawImage(video, 0, 0, size.width, size.height);
    greenScreen(size);
    window.requestAnimationFrame(paintToCanvas.bind(null, size));
  };

  const snap = function () {
    snapAudio.currentTime = 0;
    snapAudio.play();

    const base64 =  canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = base64;
    link.innerHTML = `<img src="${base64}" alt="photo" />`;
    link.setAttribute('download','photo');
    strip.insertBefore(link, strip.firstChild);
  };

  snapButton.addEventListener('click', snap);

  getVideo()
    .then(streamVideo)
    .then(resizeCanvas)
    .then(paintToCanvas)
    .catch(err => console.log(err));
}(navigator, window, document));
