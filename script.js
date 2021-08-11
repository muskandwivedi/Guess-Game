"use strict";
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// For Check button =>
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When there is no input
  if (!guess) {
    console.log(displayMessage("No number!"));
    // When player wins
  } else if (guess === number) {
    displayMessage("YAY! Correct Number..");
    document.querySelector(".number").textContent = number;
    // Manipulating CSS styles
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // When guess is wrong
  else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "Too high!" : "Too low!");
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game..!!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
// For Again button =>
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
