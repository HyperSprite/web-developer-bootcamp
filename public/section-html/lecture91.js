// lecture91.js

var answer = prompt('Are we there yet?');

while (answer.indexOf('yes') === -1 && answer.indexOf('yeah') === -1 ) {
  answer = prompt('How about now?');
}
alert('Can we go home now?');
