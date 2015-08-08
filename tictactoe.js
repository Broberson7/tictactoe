// var player1Name = prompt("Player 1 Enter Your Name");
// var player2Name = prompt("Player 2 Enter Your Name");


// var clickBox = 
// 	document.getElementsByClassName("box");

// var tdClickHandler = function(e) {
//   outputEl.innerHTML = "You clicked X";
// };	


var allBox = document.getElementsByClassName("box");
console.log(allBox);

function boxClick(e) {
  alert("hello");
}

for (var i = 0; i < allBox.length; i++) {
  allBox.item(i).addEventListener("click", boxClick);
}
