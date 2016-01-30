// grader.js

function average(grades) {
  var avrg = 0;
  grades.forEach(function(grade) {
    avrg += grade;
  });
  avrg = avrg / grades.length;
  return Math.round(avrg);
}

var scores1 = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log('score1 ' + average(scores1));
console.log('score2 ' + average(scores2));
