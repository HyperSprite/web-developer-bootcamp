// lecture84.js
var age = prompt('How old are you?');
var oddness = '';
var squareness = '';
if (age % 2 !== 0) {
  oddness = '... and you are odd';
}
var ageSqrt = Math.sqrt(age);
Math.round(ageSqrt);
if (age == ageSqrt * ageSqrt) {
  squareness = ' and you\'re a square';
}

if (age < 0) {
  console.log(`Error: you have no age`);
} else if (age < 18) {
  console.log(`Leave now, you can not come in!${oddness}${squareness}`);
} else if (age < 21) {
  console.log(`You can come in but you can not drink${oddness}${squareness}`);
} else {
  console.log(`You can come in and drink${oddness}${squareness}`);
}
