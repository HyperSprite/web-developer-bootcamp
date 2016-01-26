// lecture160.js

// check off specific todos by clicking
// $('li').click(function() {
//   if ($(this).css('color') === 'rgb(128, 128, 128)') {
//     $(this).css({
//       textDecoration: 'none',
//       color: 'black',
//     });
//   } else {
//     $(this).css({
//       textDecoration: 'line-through',
//       color: 'gray',
//     });
//   }
// });

$('li').click(function() {
  $(this).toggleClass('completed');
});

