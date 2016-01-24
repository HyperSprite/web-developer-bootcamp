// lecture133.js
// pasting into console

var h1 = document.querySelector('h1');

h1.addEventListener('click', function() {
  alert('h1 was clicked!');
});

h1.addEventListener('click', function() {
  h1.style.background = '#F8911B';
});

// any click on the UL will run this
var ulClick = () => {
  console.log('You clicked the UL!');
};

document.querySelector('ul').addEventListener('click', ulClick);

// using querySelectAll will return a static node list
// using getElementsByTagName keeps a live node list
// https://toddmotto.com/a-comprehensive-dive-into-nodelists-arrays-converting-nodelists-and-understanding-the-dom/
const lis = document.querySelectorAll('li');

for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener('click', function() {
    this.style.color = 'pink';
  });
}

// reStyle(lis, 'color', 'pink');
// this => wont work in old browsers
var reStyle = (elems, prop, val) => {
  for (var i = 0; i < elems.length; i++) {
    elems[i].addEventListener('click', function() {
      this.style[prop] = val;
    });
  }
};

// Not using it but this puts nodelist into array
const nodelistToArray = Array.apply(null, nodelist);
