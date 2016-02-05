// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const expressSanitizer = require('express-sanitizer');
const app = express();
const appIP = process.env.IP || '127.0.0.1';
const appPORT = process.env.PORT || 3030;

// APP CONFIG
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));


mongoose.connect('mongodb://localhost/blog_project');

// MODELS
const blogSchema = new mongoose.Schema({
  title: 'String',
  image: 'String',
  body: 'String',
  created: {type: Date, default: Date.now},
});

const Blog = mongoose.model('Blog', blogSchema);

// Blog.create({
//   title: 'First Blog Post',
//   image: 'http://hypersprite.com/blog/wp-content/uploads/HS_2531.jpg',
//   body: 'This is an awesome blog.',
// }, function(err, cb) {
//   if (err) {
//     console.error();
//   } else {
//     console.log(cb);
//   }
// });

// ROUTES

app.get('/', function(req, res) {
  res.status(302).redirect('/blog');
});

app.get('/blog', function(req, res) {
  Blog.find({}, function(err, blog) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).render('index', {blog: blog});
    }
  });
});

app.get('/blog/new', function(req, res) {
  res.status(200).render('blog-new');
});

app.get('/blog/:id/edit', function(req, res) {
  Blog.findById(req.params.id, function(err, blog) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).render('blog-edit', {blog: blog});
    }
  });
});

app.get('/blog/:id', function(req, res) {
  Blog.findById(req.params.id, function(err, blog) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).render('blog-id', {blog: blog});
    }
  });
});

app.post('/blog', function(req, res) {
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.create(req.body.blog, function(err, newBlog) {
    if (err) {
      console.log(err);
      res.status(303).redirect('/');
    } else {
      console.log('saved');
      res.status(303).redirect('/blog');
    }
  });
});

app.put('/blog/:id', function(req, res) {
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, editBlog) {
    if (err) {
      console.log(err);
      res.status(303).redirect('/');
    } else {
      console.log(`PUT ${editBlog.title}`);
      res.status(303).redirect('/blog/' + req.params.id);
    }
  });
});

app.delete('/blog/:id', function(req, res) {
  console.log('del1: ' + req.params.id);
  Blog.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      console.log(err);
      res.status(300).redirect('/blog');
    } else {
      console.log(`DELETE`);
      res.status(303).redirect('/blog');
    }
  });
});

app.listen(appPORT, appIP, function() {
  console.log(`Blog running on ${appIP}:${appPORT} ${Date()}`);
});
