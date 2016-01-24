// lecture140.js

// note the spaces in he colors, this is
// this is needed to match what is brought back
// from the this.style.background
var colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)',
];

var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // add initial colors
  squares[i].style.background = colors[i];
  // add click listeners
  squares[i].addEventListener('click', function() {
    // grab color from picked square
    var clickedColor = this.style.background;
    // compare value
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct';
      changeColors(clickedColor);
    } else {
      this.style.background = '#232323';
      messageDisplay.textContent = 'Try Again';
    }
  });
}

function changeColors(color) {
  // loop through all colors
  for (var i = 0; i < squares.length; i++) {
    // change each color to match given color
    squares[i].style.background = pickedColor;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
