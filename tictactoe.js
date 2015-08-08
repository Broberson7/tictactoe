
var grid =[];

for (i = 0; i < 9; i ++) {
    grid[i] = "/0";
    console.log(grid[i]);
}

var playerUp = 1;
var playerSimbol = "X";

//var player1Name = prompt("Player 1 Enter Your Name");
//var player2Name = prompt("Player 2 Enter Your Name");

playerUp = Math.floor((Math.random() * 2) + 1);
console.log(playerUp);

document.getElementById("prompt").innerHTML += "Player " + playerUp + " its your turn" + "<br>";

document.getElementById("prompt").innerHTML += "Click on a Square";

document.getElementById("b1").innerHTML = "X";



