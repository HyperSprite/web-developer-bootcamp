// lecture156.js

$('#submit').click(function() {
  $(this).css('background', 'lightblue');
});

var count = 1;
$('button').click(function() {
  $(this).text('You\'ve clicked ' + count++ + ' times');
});

$('input').keypress(function(event) {
  if (event.which === 13) {
    console.log('you pressed key ' + event.which);
  }
});

$('#keyPresser').keypress(function(event) {
  $('#keyDisplay').html('<strong>You pressed ' + event.which + '</strong>');
});

$('h1').on('click', function() {
  $(this).css('color', 'purple');
});

$('body').on('keypress', function() {
  console.log('keypress');
});

$('button').on('mouseenter', function() {
  $(this).css('font-weight', 'bold');
});

$('button').on('mouseleave', function() {
  $(this).css('font-weight', 'normal');
});

$('#fader').on('click', function() {
  $('div').fadeToggle(1000, function() {
    console.log('fade complete');
    // $(this).remove();
  });
});
