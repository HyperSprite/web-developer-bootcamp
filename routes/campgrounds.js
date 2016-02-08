const express = require('express');
const router = express.Router();
const middleware = require('../middleware');
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
router.get('/new', middleware.isLoggedIn, function(req, res) {
  res.status(200).render('campground/new');
});

// POST CREATE /////////////////////////////////////
router.post('/', middleware.isLoggedIn, function(req, res) {
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
      res.status(302).redirect('/campgrounds/' + cb._id);
    }
  });
});

// GET SHOW ////////////////////////////////////////
router.get('/:id', function(req, res) {
  Campground.findById(req.params.id).populate('comments').exec(function(err, campground) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).render('campground/show', {
        campground: campground,
      });
    }
  });
});

// EDIT FORM ///////////////////////////////////////
router.get('/:id/edit', middleware.checkCampgroundOwner, function(req, res) {
  Campground.findById(req.params.id, function(err, campground) {
    if (err) {
      console.log(err);
      res.status(303).redirect('/campgrounds/' + req.params.id);
    }
    res.status(200).render('campground/edit', {campground: campground});
  });
});


// PUT UPDATE //////////////////////////////////////
router.put('/:id', middleware.checkCampgroundOwner, function(req, res) {
  Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, eCampground) {
    if (err) {
      console.log(err);
      res.status(303).redirect('/campgrounds/' + req.params.id);
    } else {
      res.status(303).redirect('/campgrounds/' + req.params.id);
    }
  });
});

// DESTROY /////////////////////////////////////////
router.delete('/:id', middleware.checkCampgroundOwner, function(req, res) {
  Campground.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      console.log(err);
      res.status(302).redirect('/campgrounds/' + req.params.id);
    } else {
      res.status(302).redirect('/campgrounds');
    }
  });
});

module.exports = router;
