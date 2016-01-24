// lecture134.js

var backBodySwap = document.querySelector('#back-body-swap');
var phase = document.querySelectorAll('[class^=phase');

backBodySwap.addEventListener('click', function() {
  for (var i = 0; i < phase.length; i++) {
    if (phase[i].className === 'phase1') {
      phase[i].className = 'phase2';
    } else {
      phase[i].className = 'phase1';
    }
  }
});


// colts way, way easier.
// var button = document.querySelector('button');
// var isPurple = false;

// button.addEventListener('click', function() {
//   if(isPurple) {
//     document.body.style.background = 'white';
//   } else {
//     document.body.style.background = 'purple';
//   }
//   isPurple = !isPurple;
// });

// or

// button.addEventListener('click', function() {
//   document.body.classList.toggle('purple');
// });
