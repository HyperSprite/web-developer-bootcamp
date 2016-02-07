const mongoose = require('mongoose');
// const Comment = require('./comment');
// const User = require('./user');

const campgroundSchema = new mongoose.Schema({
  name: 'String',
  image: 'String',
  description: 'String',
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    username: 'String',
  },
});

module.exports = mongoose.model('Campground', campgroundSchema);
