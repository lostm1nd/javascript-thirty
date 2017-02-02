const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let timeUp = false;

const randomBetween = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

const peek = function () {
  const time = randomBetween(120, 1200);
  const holeIndex = randomBetween(0, holes.length - 1);

  holes[holeIndex].classList.add('up');
  setTimeout(function () {
    holes[holeIndex].classList.remove('up');

    if (timeUp) {
      return;
    }

    peek();
  }, time);
};

const bonk = function (e) {
  if (!e.isTrusted || timeUp) {
    return;
  }

  e.target.classList.remove('up');
  scoreBoard.textContent = ++scoreBoard.textContent;
};

const start = function () {
  scoreBoard.textContent = 0;
  timeUp = false;

  peek();
  setTimeout(function () {
    timeUp = true;
  }, 5 * 1000);
};

moles.forEach(m => m.addEventListener('click', bonk));
