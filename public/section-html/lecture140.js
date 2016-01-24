// lecture140.js

var mode = 6;
var colors = generateRandomColors(mode);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');


easyBtn.addEventListener('click', function() {
  mode = 3;
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');
  colors = generateRandomColors(mode);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
  // add initial colors
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
});

hardBtn.addEventListener('click', function() {
  mode = 6;
  hardBtn.classList.add('selected');
  easyBtn.classList.remove('selected');
  colors = generateRandomColors(mode);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
      squares[i].style.display = 'block';
      squares[i].style.background = colors[i];
  }
});

resetButton.addEventListener('click', function() {
  // generate all new colors
  colors = generateRandomColors(mode);

  // reset pickedColor
  pickedColor = pickColor();
  // update the colorDisplay
  colorDisplay.textContent = pickedColor;
  // reset squares
  for (var i = 0; i < squares.length; i++) {
  // add initial colors
    squares[i].style.background = colors[i];
  }
  // reset h1
  h1.style.background = '#232323';
});

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
      resetButton.textContent = 'Play Again?';
      h1.style.background = pickedColor;
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

function generateRandomColors(num) {
  // make an array
  var arr = [];
  // repeat num times
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor() {
  // pick a red 0-255, green 0-255, blue 0-255
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
