// lecture132.js

// This is all done in the browser using dev tools on www.google.com
// Needed a SSL image so google would not choke.

// Here is an image of cats sitting in a line I found googling, ssl cat clipart.
https://s-media-cache-ak0.pinimg.com/originals/42/2f/e6/422fe6d070c3c6961f0e542cc1c34405.gif

var lga = document.querySelector('#lga');
var hplogo = document.querySelector('#hplogo');
lga.style.marginTop = '70px';
hplogo.style.height = '220px';
hplogo.style.width = '400px';

// now to make it ugly
hplogo.style.border = '2px solid green';

var links = document.getElementsByTagName('a');

// add background
for (var i = 0; i < links.length; i++) {
  links[i].style.background = '#A2A6D6';
}

// add border
for (var i = 0; i < links.length; i++) {
  links[i].style.border = '2px inset #2736A5'
}

// bold text, instead of color
for (var i = 0; i < links.length; i++) {
  links[i].style.fontWeight = 'bold';
}

for (var i = 0; i < links.length; i++) {
  console.log(links[i].getAttribute('href'));
}


// change links to the Web Developer Bootcamp on Udemy
for (var i = 0; i < links.length; i++) {
  links[i].setAttribute('href', 'https://www.udemy.com/the-web-developer-bootcamp');
}
