const express = require('express');
const router = express.Router();
const Campground = require('../models/campground');

// GET INDEX ////////////////////////////////////////
router.get('/', function(req, res) {
  Campground.find({}, function(err, campgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).render('campground/index', {
        campgrounds: campgrounds,
      });
    }
  });
});

// GET NEW  /////////////////////////////////////////
router.get('/new', isLoggedIn, function(req, res) {
  res.status(200).render('campground/new');
});

// POST CREATE /////////////////////////////////////
router.post('/', isLoggedIn, function(req, res) {
  var data = {
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    author: {
      id: req.user._id,
      username: req.user.username,
    },
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

// GET SHOW ////////////////////////////////////////
router.get('/:id', function(req, res) {
  Campground.findById({_id: req.params.id}).populate('comments').exec(function(err, campground) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).render('campground/show', {
        campground: campground,
      });
    }
  });
});

// MIDDLEWARE //////////////////////////////////////
function isLoggedIn(req, res, next) {
  console.log(req.isAuthenticated);
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(200).redirect('/login');
}

module.exports = router;
