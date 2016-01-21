// lecture86.js

const number = 7;
var numberTest = '';

while (numberTest !== number) {
  numberTest = Number(prompt(`Guess a number?`));
  if (numberTest > number) {
    alert(`${numberTest} is too high`);
  } else if (numberTest < number) {
    alert(`${numberTest} is too low`);
  } else if (numberTest === number) {
    alert(`You guessed it, ${numberTest} was it`);
  }
}
