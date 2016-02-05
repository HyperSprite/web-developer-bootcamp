const mongoose = require('mongoose');

// User email, name
const userSchema = mongoose.Schema({
  email: {type: 'String', requred: true, unique: true},
  name: 'String',
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
