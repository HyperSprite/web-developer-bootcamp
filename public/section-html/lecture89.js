// lecture89.js

console.log('Print all numbers btween -10 and 19');
var countProb1 = -10;
while (countProb1 < 20) {
  console.log(countProb1);
  countProb1++;
}

console.log('Print all even numbers between 10 and 40');
var countProb2 = 10;
while (countProb2 < 41) {
  if (countProb2 % 2 === 0) {
    console.log(countProb2);
  }
  countProb2++;
}

console.log('Print all odd numbers between 300 and 333');
var countProb3 = 300;
while (countProb3 < 334) {
  if (countProb3 % 2 !== 0) {
    console.log(countProb3);
  }
  countProb3++;
}

console.log('Print all numbers divisible by 5 and 3 between 5 and 50');
var countProb4 = 5;
while (countProb4 < 51) {
  if (countProb4 % 5 === 0 && countProb4 % 3 === 0) {
    console.log(countProb4);
  }
  countProb4++;
}
