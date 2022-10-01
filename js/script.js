'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let Corrunt0El = document.getElementById('current--0');
let Corrunt1El = document.getElementById('current--1');

let corentscore = 0;
const maxPoints = 100;

function switchPlayer() {
  player0El.classList.contains('player--active')
    ? (Corrunt0El.textContent = corentscore = 0)
    : (Corrunt1El.textContent = corentscore = 0);
  if (player0El.classList.contains('player--active')) {
    player0El.classList.remove('player--active');
    player1El.classList.add('player--active');
  } else {
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
  }
}
btnHold.classList.add('hidden');
btnRoll.classList.add('hidden');
function isWinner() {
  if (Number(scoreEl0.textContent) >= maxPoints) {
    player0El.classList.add('player--winner');
    btnHold.classList.add('hidden');
    btnRoll.classList.add('hidden');
  } else if (Number(scoreEl1.textContent) >= maxPoints) {
    player1El.classList.add('player--winner');
    btnHold.classList.add('hidden');
    btnRoll.classList.add('hidden');
  }
}

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `./resources/dice-${dice}.png`;
  if (dice !== 1) {
    player0El.classList.contains('player--active')
      ? (Corrunt0El.textContent = corentscore += dice)
      : (Corrunt1El.textContent = corentscore += dice);
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  player0El.classList.contains('player--active')
    ? (scoreEl0.textContent = Number(scoreEl0.textContent) + corentscore)
    : (scoreEl1.textContent = Number(scoreEl1.textContent) + corentscore);
  isWinner();
  switchPlayer();
});

btnNew.addEventListener('click', function () {
  diceEl.classList.add('hidden');
  btnHold.classList.remove('hidden');
  btnRoll.classList.remove('hidden');
  scoreEl0.textContent = Corrunt0El.textContent = corentscore = 0;
  scoreEl1.textContent = Corrunt1El.textContent = corentscore = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.contains('player--winner')
    ? player0El.classList.remove('player--winner')
    : player1El.classList.remove('player--winner');
});
