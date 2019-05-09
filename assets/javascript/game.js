//array of games

var games = ["Mortal Kombat", "Super Mario", "Doom", "Sonic", 
            "Quake", "Super Metroid", "Crono Trigger"];

//random game from array

var game = games[Math.floor(Math.random()* games.length)];

//use _'s to show length of game

var answerArray =[];
for (var i = 0; i < game.length; i++) {
    answerArray[i] = "_";
}
