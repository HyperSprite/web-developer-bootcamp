// not working
const mongoose = require('mongoose');
const Post = require('./models/post');
const User = require('./models/user');
mongoose.connect('mongodb://localhost/lecture228');


// Post.create({
//   title: 'How to cook the best burger pt5',
//   contnet: 'lorem hipsters snkjvniudlsnvloidasnkjvniudlsnvldsfnvildfvnoi',
// }, function(err, makePost) {
//   User.findOne({email: 'jane.doe@example.com'}, function(err, foundUser) {
//     if (err) {
//       console.log(err);
//     } else {
//       foundUser.posts.push(makePost);
//       foundUser.save(function(err, uSave) {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log('user saved ' + uSave);
//         }
//       });
//     }
//   });
// });


User.findOne({email: 'jane.doe@example.com'}).populate('posts').exec(function(err, user) {
  if (err) {
    console.log(err);
  } else {
    console.log(user);
  }
});

