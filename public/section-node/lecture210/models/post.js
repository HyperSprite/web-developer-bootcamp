const mongoose = require('mongoose');

// Post

const postSchema = new mongoose.Schema({
  title: 'String',
  content: 'String',
});

module.exports = mongoose.model('Post', postSchema);
