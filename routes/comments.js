const express = require('express');
const router = express.Router({mergeParams: true});
const Campground = require('../models/campground');
const Comment = require('../models/comment');

// GET NEW CAMPGROUND COMMENT //////////////////////
router.get('/new', isLoggedIn, function(req, res) {
  Campground.findById(req.params.id, function(err, campground) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).render('comment/new', {
        campground: campground,
      });
    }
  });
});

// POST NEW CAMPGROUND COMMENT /////////////////////
router.post('/', isLoggedIn, function(req, res) {
  Comment.create(req.body.data, function(err, cComm) {
    if (err) {
      console.log('Comment.create ' + err);
      res.status(303).redirect('/campgrounds');
    } else {
      Campground.findById(req.params.id, function(err, cCamp) {
        cCamp.comments.push(cComm);
        cCamp.save();
        console.log('comment saved');
      });
      res.status(303).redirect('/campgrounds/' + req.params.id);
    }
  });
});

function isLoggedIn(req, res, next) {
  console.log(req.isAuthenticated);
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(200).redirect('/login');
}

module.exports = router;
