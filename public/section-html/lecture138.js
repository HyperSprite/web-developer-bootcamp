// lecture138.js

tr td a[href^=/en-US/docs/Web/Events/]

<a href="/en-US/docs/Web/Events/abort" title="/en-US/docs/Web/Events/abort">abort</a>

tr a

var count = 0;
var trA = document.querySelectorAll('tbody>tr')
for (var i = 0; i < trA.length; i++) {
  count++;
}
console.log(count);
// 346


trA[0].firstElementChild.innerHTML

colts solution
document.querySelectorAll('tr').length - document.querySelectorAll('table').length;
// 343
document.querySelectorAll('table').length;
// 5
