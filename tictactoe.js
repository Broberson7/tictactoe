

// Establish the  game array
var grid =[];

// Initialize the array with null charactars
for (i = 0; i < 9; i ++) {
    grid[i] = "/0";
    console.log(grid[i]);
}

// Establish the variables used by the game
var playerUp = 1;
var playerSymbol = "X";
playerUp = Math.floor((Math.random() * 2) + 1); // Decide randomly who goes first

// Asign the correct symbol to playerSymbol
if (playerUp) {
    playerSymbol = "X";

}
    else{
        playerSymbol = "O";
    }
console.log(playerUp);
console.log(playerSymbol);




function changeColorOnMouseOver() {
    this.style.background = "black";
    this.style.color = "white";
}

function changeColorOnMouseOut() {
    this.style.background = "blue";
    this.style.color = "black";
}

function processOnClick() {
    console.log(this.id);
    this.style.color = "white";
    document.getElementById(this.id).innerHTML  = playerSymbol;
}

function getId(){
    var e = document.getElementById(this);
    return e;
}


document.getElementById("prompt").innerHTML += "Player " + playerUp + " its your turn" + "<br>";

document.getElementById("prompt").innerHTML += "Click on a Square";

// Assign the multiple event handlers for all the game elements "boxes"
for (var i = 0; i < 9; i ++) {
    document.getElementById(i + 1).onmouseover = changeColorOnMouseOver;
    document.getElementById(i + 1).onmouseout = changeColorOnMouseOut;
    document.getElementById(i + 1).onclick = processOnClick;
}








