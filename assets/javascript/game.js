//array of games

var games = ["Mortal+Kombat", "Super+Mario", "Doom", "Sonic", 
            "Quake", "Super+Metroid", "Crono+Trigger"];

//random game from array

var game = games[Math.floor(Math.random()* games.length)];

//incorrect guess array

var incorrectGuessesMade = [];

//Guesses remaining variable

var guessesLeft = 9;

//wins variable

var wins = 0;

//Create array for answer

var answerArray =[];

//variable for remaining letters

var remainingLetters = game.length;

//variable to start and stop game

var gameStart = false;

//make a function to reset the game 

function reset() {
    gameStart = true;
    game = games[Math.floor(Math.random()* games.length)];
    remainingLetters = game.length;
    answerArray = [];
    for (var i = 0; i < game.length; i++) {
        if (game[i] === "+") {
            answerArray[i] = "&nbsp;";
        } else {
            answerArray[i] = "_";
        }
    }
}

console.log(game)
//if gameStart is true then check letter array else reset

document.addEventListener("keyup", function(event) {
    if (gameStart===true) {
        firstCheck(event) 
    }
    else {
        reset()
    }
});

//Setup firstCheck array

var alphabet = ["a", "b", "c", "d", "e", "f", "g", 
                "h", "i", "j", "k", "l", "m", "n", 
                "o", "p", "q", "r", "s", "t", "u", 
                "v", "w", "x", "y", "z"];

//Function to check if the user input is in array. 
//If so, check if letter is in the game.

function firstCheck(guess) {
    if (alphabet.indexOf(guess.key) > -1){
        correctCheck(guess)
    }
}

//Function to check if guess is correct

function correctCheck(guess) {
    if (game.indexOf(guess.key) > -1){
        correctGuess(guess);
    } else {
        incorrectGuess(guess);
    }
}

//Functions to add letter to correct guesses

function correctGuess(guess) {
    if (answerArray.indexOf(guess.key.toUpperCase()) < 0) {
        addLetter(guess)
    }
}

function addLetter(guess) {
    for (var i = 0; i < game.length; i++) {
        if (guess.key === game[i]) {
            answerArray[i] = guess.key.toUpperCase();
            displayCurrentGame();
            lettersLeft--;
            if (lettersLeft ===0) {
                wins++;
            }
        }
    }
}


function displayCurrentGame() {
    var currentGameDisplay = document.querySelector("#currentgame");
    currentGameDisplay.innerHTML = answerArray.join(" ");

}

function incorrectGuess(guess) {
    if (incorrectGuessesMade.indexOf(guess.key.toUpperCase()) < 0) {
        addWrongLetter(guess);
    }
}

function addWrongLetter(guess) {
    incorrectGuessesMade.push(guess.key.toUpperCase());
    displayGuessesMade();
    guessesLeft--;
    displayGuessesLeft();
    if (guessesLeft === 0) {
        displayAnswer();
    }
}

function displayWins() {
    var winsDisplay = document.querySelector("#wins");
    winsDisplay.textContent = winScore;
}


function displayGuessesMade() {
    var guessesMadeDisplay = document.querySelector("#guesses");
    guessesMadeDisplay.textContent = incorrectGuessesMade.join(", ");
}


function displayGuessesLeft() {
    var guessesLeftDisplay = document.querySelector("#guessesleft");
    guessesLeftDisplay.textContent = guessesLeft;
}
