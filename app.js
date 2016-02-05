// app.js for yelpcamp
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Campground = require('./models/campground');
const Comment = require('./models/comment');
const seedDB = require('./seeds');

const app = express();
const appIP = process.env.IP || '127.0.0.1';
const appPORT = process.env.PORT || 3030;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/yelpcamp/');

seedDB();


app.get('/', function(req, res) {
  res.status(200).render('home');
});

app.get('/campgrounds', function(req, res) {
  Campground.find({}, function(err, campgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).render('index', {campgrounds: campgrounds});
    }
  });
});

app.get('/campgrounds/new', function(req, res) {
  res.status(200).render('new');
});

app.post('/campgrounds', function(req, res) {
  var data = {
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
  };
  Campground.create(data, function(err, cb) {
    if (err) {
      console.log(err);
    } else {
      console.log(cb);
      res.status(302).redirect('/campgrounds/' + cb._id);
    }
  });
});

app.get('/campgrounds/:id', function(req, res) {
  Campground.findById({_id: req.params.id}).populate('comments').exec(function(err, campground) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).render('show',  {campground: campground} );
    }
  });
});



app.get('*', function(req, res) {
  res.status(404).send('Error 404: Page not found');
});

app.listen(appPORT, appIP, function() {
  console.log(`yelpcamp started on ${appIP}:${appPORT} ${Date()}`);
});

