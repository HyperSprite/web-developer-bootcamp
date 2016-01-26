// lecture160.js

// we need to go up to an element that is on the page
// when jQuery loads and then back down to the li
$('ul').on('click', 'li', function() {
  // we are adding the class that
  // does the line-through and gray
  $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(event) {
  // here we are doing a fadeOut at half a second
  // there is a callback function that will fire after
  // we are done with the fade
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  // this keeps our click from bubling up
  event.stopPropagation();
});

$('input[type="text"').keypress(function(event) {
  if (event.which === 13) {
// HyperSprite: added trim to remove white space on either side of the todo
    var todoText = $(this).val().trim();
// HyperSprite: checking to make sure there is a todo
// so we don't make an empty todos by accident
      $(this).val('');
    if (todoText) {
      // adding the new li with span and text
      $('ul').append('<li><span>X</span> ' + todoText + '</li>');
    }
  }
});
