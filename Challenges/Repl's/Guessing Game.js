alert("You have 3 guesses. Guess between 1-10")

//var answer = 3;
var randomNumber = Math.floor(Math.random() * 10) + 1;
var guess = prompt("What's your guess?");

for( i = 0; i <= 10; i++){
    if (randomNumber == guess) {      //answer
        alert("You got it right!")
        break;
    } else if (guess > randomNumber) {

        alert("Try again with a lower number");
    
    } else if (guess < randomNumber){
        
        alert("Try again with a higher number");
    };
};



/*
let randomNumber = Math.floor(Math.random() * 10) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 3;
let resetButton;

function checkGuess() {
    alert('I am a placeholder');
  }
  */