/*
GAME FUNCTION
- Player must guess a number between a min and max
- Player get a certain amount remaining
- Notify player of numbers of guesses left
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

//Game values
let min = 1;
let max = 10;
let winningNumber = 2;
let guessLeft = 3;

//UI Elements
const gameEl = document.querySelector("#game");
const minNumEl = document.querySelector(".min-num");
const maxNumEl = document.querySelector(".max-num");
const guessInputEl = document.querySelector("#guess-input");
const guessBtnEl = document.querySelector("#guess-btn");
const message = document.querySelector(".message");

//Ass UI min & max
minNumEl.textContent = min;
maxNumEl.textContent = max;

//create EventListener on Button
guessBtnEl.addEventListener("click", () => {
  let guess = parseInt(guessInputEl.value);
  // console.log(guess);

  //Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  //check if won
  if (guess === winningNumber) {
    //Disable input
    guessInputEl.disabled = true;
    //change border color to green
    guessInputEl.style.borderColor = "green";
    //Game over - won
    //win case
    setMessage(`YOU WIN!! ${winningNumber} is the winning number.`, "green");
  } else {
    //wrong number
    guessLeft -= 1;

    if (guessLeft === 0) {
      //Game over - lost
      //Disable input
      guessInputEl.disabled = true;
      // show msg
      setMessage(`Game Over,You Lost! The winning number is ${winningNumber}`, "red");
    } else {
      //Game continues answer wrong

      //change border color to red
      guessInputEl.style.borderColor = "red";

      //clear Input
      guessInputEl.value = "";

      //Tell user it's the wrong number
      setMessage(`${guess} is not correct! ${guessLeft} guess left`, "red");
    }
  }
});

const setMessage = (msg, color) => {
  message.style.color = color;
  message.textContent = msg;
};
