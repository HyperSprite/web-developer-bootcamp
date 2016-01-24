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
console.dir('phase > '+ phase);

//document.querySelectorAll('[id^=phase]');
