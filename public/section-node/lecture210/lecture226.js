const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lecture227');

// Post title, content
const postSchema = mongoose.Schema({
  title: 'String',
  content: 'String',
});

// User email, name
const userSchema = mongoose.Schema({
  email: {type: 'String', requred: true, unique: true},
  name: 'String',
  posts: [ postSchema ],
});

const User = mongoose.model('User', userSchema);

// var newUser = new User ({
//   email: 'Jane@brown.edu',
//   name: 'Jane Brown',
// });


// newUser.posts.push({
//   title: 'Oranges run wild',
//   content: `Oranges found at the bottom of a  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
// });

// newUser.save(function(err, nUser) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`saved ${nUser}`);
//   }
// });

User.findOne({name: 'Jane Brown'}, function(err, fUser) {
  if (err) {
    console.log(err);
  } else {
    // console.log(fName);
    fUser.posts.push({
      title: 'Adding more stuff to mongo the hard way',
      content: 'How much more lorems do I needs, lots mores',
    });
    fUser.save(function(err, saved) {
      if (err) {
        console.log(err);
      } else {
        console.log(saved);
        console.log(fUser);
      }
    });
  }
});

// var newPost = new Post ({
//   title: 'Reflections on Apples',
//   content: 'They are lighter and smaller',
// });

// newPost.save(function(err, nPost) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`post saved`);
//   }
// });
