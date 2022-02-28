'use strict';

let SecretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When no number is inputted
  if (!guess) {
    displayMessage(`No number!!! =(`);
  }
  //Player Wins
  else if (guess === SecretNumber) {
    displayMessage(`🏆You Win!!!🏆`);
    document.querySelector('.number').textContent = SecretNumber;
    document.querySelector(`body`).style.backgroundColor = `black`;

    document.querySelector(`.number`).style.width = `35rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  }
  //Guess is too high

  //when guess is wrong
  else if (guess !== SecretNumber) {
    if (score > 1) {
      displayMessage(
        guess > SecretNumber
          ? `Too High Try Again!!`
          : `Sorry Too Low Please Chose Between 1-30`
      );
      score--;
      document.querySelector(`.score`).textContent = score;
      document.querySelector(`body`).style.backgroundColor = `red`;
    } else {
      document.querySelector(
        `.message`
      ).textContent = `You Loose! Add 50 Cents To Play Again!!`;
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`body`).style.backgroundColor = `skyblue`;
      displayMessage((style.width = `50rem`));
    }
  }

  document.querySelector(`.again`).addEventListener(`click`, function () {
    score = 30;
    SecretNumber = Math.trunc(Math.random() * 30) + 1;
    displayMessage(`Start guessing..`);
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`.guess`).value = ``;
    document.querySelector(`body`).style.backgroundColor = `rgb(71, 191, 196)`;
    document.querySelector(`.number`).style.width = `15rem`;
  });
});
