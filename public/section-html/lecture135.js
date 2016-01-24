// lecture135.js

var p1Button = document.getElementById('p1');
var p1Display = document.getElementById('p1Display');
var p1Score = 0;
var p2Button = document.getElementById('p2');
var p2Display = document.getElementById('p2Display');
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var reset = document.getElementById('reset');
var playTo = document.getElementById('playTo');
var playToDisplay = document.querySelector('p span');

function resetGame() {
  p1Score = 0;
  p1Display.textContent = 0;
  p1Display.classList.remove('winner');
  p2Score = 0;
  p2Display.textContent = 0;
  p2Display.classList.remove('winner');
  gameOver = false;
}

p1Button.addEventListener('click', function() {
  if (!gameOver) {
    p1Score++;
    p1Display.textContent = p1Score;
  }
  if (p1Score === winningScore) {
    p1Display.classList.add('winner');
    gameOver = true;
  }
});

p2Button.addEventListener('click', function() {
  if (!gameOver) {
    p2Score++;
    p2Display.textContent = p2Score;
  }
  if (p2Score === winningScore) {
    p2Display.classList.add('winner');
    gameOver = true;
  }
});

reset.addEventListener('click', function() {
  resetGame();
});

playTo.addEventListener('change', function() {
  playToDisplay.textContent = this.value;
  winningScore = Number(this.value);
  resetGame();
});
