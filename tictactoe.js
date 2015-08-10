

// Establish the  game array
var grid =[];

// Initialize the array with null charactars
for (i = 0; i < 9; i ++) {
    grid[i] = "/0";
    console.log(grid[i]);
}

// Establish the variables used by the game
var player1 = "";
var player2 = "";
var playerUp = 1;
var playerSymbol = "X";
var submitStatus = false; // No players yet!

// Asign the correct symbol to playerSymbol
if (playerUp) {
    playerSymbol = "X";

}
    else{
        playerSymbol = "O";
    }
console.log("PlayerUp= ",playerUp);
console.log("PlayerSymbol= ",playerSymbol);

function randonPlayer() {
    playerUp = Math.floor((Math.random() * 2) + 1); // Decide randomly who goes first
}


function changeColorOnMouseOver() {
    this.style.background = "black";
    this.style.color = "white";
}

function changeColorOnMouseOut() {
    this.style.background = "blue";
    this.style.color = "black";
}

function processOnClick() {
    console.log("This is the click id",this.id);
    this.style.color = "white";
    document.getElementById(this.id).innerHTML  = playerSymbol;
}


function subPlayers() {
    console.log("Hit the submit function");
    player1 = document.forms[0]["player1"].value;
    player2 = document.forms[0]["player2"].value;
    submitStatus = true;
    randomPlayer();
    console.log("Player1",player1);
    console.log("player2",player2);
}



document.getElementById("prompt").innerHTML += "Player " + playerUp + " its your turn" + "<br>";

document.getElementById("prompt").innerHTML += "Click on a Square";

// Assign the multiple event handlers for all the game elements "boxes"
for (var i = 0; i < 9; i ++) {
    document.getElementById(i + 1).onmouseover = changeColorOnMouseOver;
    document.getElementById(i + 1).onmouseout = changeColorOnMouseOut;
    document.getElementById(i + 1).onclick = processOnClick;
}

if (submitStatus) {
    if (playerUp === 1) {
        playerSymbol = "X";
        document.getElementById("prompt").innerHTML += "Player " + playerUp + " its your turn" + "<br>";
    } else {
        playerSymbol = "O";
        document.getElementById("prompt").innerHTML += "Player " + playerUp + " its your turn" + "<br>";
    }
}






