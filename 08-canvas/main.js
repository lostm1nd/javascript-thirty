(function () {
  'use strict';

  const canvas = document.querySelector('#draw');
  const context = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.lineJoin = 'round';
  context.lineCap = 'round';

  let startX = 0;
  let startY = 0;
  let hue = 0;
  let lineWidth = 10;
  let isDrawing = false;

  const draw = e => {
    if (!isDrawing) {
      return;
    }

    context.lineWidth = lineWidth;
    context.strokeStyle = `hsl(${hue % 360}, 75%, 50%)`;
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();

    hue++;
    lineWidth = lineWidth < 50 ? lineWidth + 1 : lineWidth;
    [startX, startY] = [e.offsetX, e.offsetY];
  };

  canvas.addEventListener('mousedown', e => {
    lineWidth = 10;
    isDrawing = true;
    [startX, startY] = [e.offsetX, e.offsetY];
  });

  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseleave', () => isDrawing = false);

}());
