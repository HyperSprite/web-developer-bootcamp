// app.js for yelpcamp
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yelpcamp/');

const app = express();
const appIP = process.env.IP || '127.0.0.1';
const appPORT = process.env.PORT || 3030;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


// schema setup
const campgroundSchema = new mongoose.Schema({
  name: 'String',
  image: 'String',
});

const Campground = mongoose.model('Campground', campgroundSchema);


app.get('/', function(req, res) {
  res.status(200).render('index');
});

app.get('/campgrounds', function(req, res) {
  Campground.find({}, function(err, campgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).render('campgrounds', {campgrounds: campgrounds});
    }
  });
});

app.get('/campgrounds/new', function(req, res) {
  res.status(200).render('campgrounds-new');
});

app.post('/campgrounds', function(req, res) {
  var data = {
    name: req.body.name,
    image: req.body.image,
  };
  Campground.create(data, function(err, cb) {
    if (err) {
      console.log(err);
    } else {
      console.log(cb);
      res.status(302).redirect('/campgrounds');
    }
  });
});

app.get('*', function(req, res) {
  res.status(404).send('Error 404: Page not found');
});

app.listen(appPORT, appIP, function() {
  console.log(`yelpcamp started on ${appIP}:${appPORT} ${Date()}`);
});

