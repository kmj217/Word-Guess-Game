//array of games

var games = ["Mortal Kombat", "Super Mario", "Doom", "Sonic", 
            "Quake", "Super Metroid", "Crono Trigger"];

//random game from array

var game = games[Math.floor(Math.random()* games.length)];

//use _'s to show length of game

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
}

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
        incorrectguess(guess);
    }
}





