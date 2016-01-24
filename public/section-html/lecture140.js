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
var pickedColor = colors[3];
var colorDisplay = document.getElementById('colorDisplay');

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
    alert(clickedColor + ' === ' + pickedColor);
  } else {
    alert(clickedColor + ' !== ' + pickedColor);
  }
  });
}

