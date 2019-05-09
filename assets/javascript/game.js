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

console.log(game)
//randomly select word

//have blanks show number of letters in word
    //count number of letters in selected word
    //create _'s for number of letters with for loop
    //game will start when the player pressed enter
    //for loop through word 




