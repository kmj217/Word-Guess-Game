//array of games

var games = ["doom", "sonic", "quake", "zelda", "mario", 
            "metroid", "goldeneye"];

//random game from array

var game = games[Math.floor(Math.random()* games.length)];

//incorrect guess array

var incorrectGuessesMade = [];

//Guesses remaining variable

var guessesLeft = 6;

//wins/losses variable

var wins = 0;
var losses = 0;

//Create array for answer

var answerArray =[];

//variable for remaining letters

var lettersLeft = game.length;

//variable to start and stop game

var gameStart = false;

//make a function to reset the game to the inital state when win or lose

function reset() {
    gameStart = true;
    game = games[Math.floor(Math.random()* games.length)];
    lettersLeft = game.length;
    answerArray = [];
    for (var i = 0; i < game.length; i++) {
        if (game[i] === " ") {
            answerArray[i] = "&nbsp;";
        } else {
            answerArray[i] = "_";
        }
    };
    guessesLeft = 6;
    displayGuessesLeft();
    incorrectGuessesMade = [];
    displayGuessesMade()
    displayCurrentGame();
    answer.textContent = "";
    hideTitle();
    console.log(game)
    console.log(lettersLeft)
}
//if gameStart is true then check letter array else reset

document.addEventListener("keyup", function(event) {
    if (gameStart===true) {
        firstCheck(event);
        displayCurrentGame();
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
    if (alphabet.indexOf(guess.key) > -1) {
        correctCheck(guess)
    }
}

//Function to check if guess is correct

function correctCheck(guess) {
    if (game.indexOf(guess.key) > -1) {
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
    for (var k = 0; k < game.length; k++) {
        if (guess.key === game[k]) {
            answerArray[k] = guess.key.toUpperCase();
            displayCurrentGame();
            lettersLeft--;
            if (lettersLeft === 0) {
                wins++;
                gameStart = false;
                var won = document.getElementById("wins");
                won.innerHTML = wins
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
        losses++;
        gameStart = false;
        displayAnswer();
        var lost = document.getElementById("losses");
        lost.innerHTML = losses;
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


function displayAnswer() {
    var answer = document.getElementById("answer");
    answer.textContent = game.toUpperCase();
}

function hideTitle() {
    var link = document.getElementById("hide");
    link.style.visibility = "hidden";
}