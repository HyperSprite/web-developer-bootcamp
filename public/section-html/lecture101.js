// lecture101.js

function isEven(num) {
  return num % 2 === 0;
}

// this-is-an-example
// function factoral(num) {
//  this needs if "0" here to work right
//   var result = num;
//   for (var i = result - 1; i >= 1; i--) {
//     result *= i;
//   }
//   return result;
// }

function factoral(num) {
  var result = 1;
  for (var i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

function kebabToSnake(kString) {
  var newString = kString.match(/[^-]+/g).join('_');
  return newString;
}


function sing() {
  console.log('Tinkle twinkle little star...');
  console.log('How I wonder....');
}

 setInterval(sing, 1000);
