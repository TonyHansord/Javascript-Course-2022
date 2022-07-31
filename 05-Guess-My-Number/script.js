'use strict';

const againBtn = document.querySelector('.again');
const numberLabel = document.querySelector('.number');
const message = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const guessBox = document.querySelector('.guess');
const scoreLabel = document.querySelector('.score');
const highScoreLabel = document.querySelector('.highscore');
const body = document.body;

function getRandomNum() {
  return Math.trunc(Math.random() * 20) + 1;
}

let myNumber = getRandomNum();
let guess = 0;
let score = 20;
let highScore = 0;

scoreLabel.textContent = 20;

function checkScore() {
  if (score > 1) {
    submitGuess();
  } else {
    score = 0;
    scoreLabel.textContent = score;
    message.textContent = 'You lost the game';
    body.style.backgroundColor = '#FF0000';
    numberLabel.textContent = myNumber;
    numberLabel.style.width = '30rem';
  }
}

function submitGuess() {
  guess = Number(guessBox.value);

  if (!guess) {
    message.textContent = 'No Number!';
  } else if (guess > 20 || guess < 1) {
    message.textContent = 'Choose numbers between 1-20!';
  } else if (guess === myNumber) {
    message.textContent = 'You are correct!';
    body.style.backgroundColor = '#60b347';
    numberLabel.textContent = myNumber;
    numberLabel.style.width = '30rem';

    if (highScore < score) {
      highScore = score;
      highScoreLabel.textContent = highScore;
    }
  } else if (guess !== myNumber) {
    message.textContent = guess < myNumber ? 'Too Low!' : 'Too High!';
    score--;
    scoreLabel.textContent = score;
  }
}
againBtn.addEventListener('click', function () {
  guessBox.value = '';
  myNumber = getRandomNum();
  score = 20;
  scoreLabel.textContent = score;
  numberLabel.textContent = '?';
  message.textContent = 'Start guessing...';
  body.style.backgroundColor = '#222';
  numberLabel.style.width = '15rem';
});

checkBtn.addEventListener('click', function () {
  checkScore();
});
guessBox.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    checkScore();
  }
});
