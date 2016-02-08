const express = require('express');
const router = express.Router({mergeParams: true});
const middleware = require('../middleware');
const Campground = require('../models/campground');
const Comment = require('../models/comment');

// GET NEW CAMPGROUND COMMENT //////////////////////
router.get('/new', middleware.isLoggedIn, function(req, res) {
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
router.post('/', middleware.isLoggedIn, function(req, res) {
  Comment.create(req.body.data, function(err, cComm) {
    if (err) {
      console.log('Comment.create ' + err);
      res.status(303).redirect('/campgrounds');
    } else {
      // add username and id
      cComm.author.id = req.user._id;
      cComm.author.username = req.user.username;
      console.log('user' + req.user.username);
      cComm.save();
      Campground.findById(req.params.id, function(err, cCamp) {
        cCamp.comments.push(cComm);
        cCamp.save();
        console.log('comment saved');
      });
      res.status(303).redirect('/campgrounds/' + req.params.id);
    }
  });
});

// GET EDIT ////////////////////////////////////////
router.get('/:comment_id/edit', middleware.checkCommentOwner, function(req, res) {
  Comment.findById(req.params.comment_id, function(err, eComm) {
    if (err) {
      console.log(err);
      res.status(302).redirect('back');
    } else {
      res.status(200).render('comment/edit', {comment: eComm, campground_id: req.params.id});
    }
  });
});

// PUT UPDATE //////////////////////////////////////
router.put('/:comment_id', middleware.checkCommentOwner, function(req, res) {
  Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, pComm) {
    if (err) {
      console.log(err);
      res.status(302).redirect('back');
    } else {
      res.status(302).redirect('/campgrounds/' + req.params.id);
    }
  });
});

// DELETE ///////////////////////////////////////////
router.delete('/:comment_id', middleware.checkCommentOwner, function(req, res) {
  Comment.findByIdAndRemove(req.params.comment_id, function(err) {
    if (err) {
      console.log(err);
      res.status(302).redirect('back');
    } else {
      res.status(302).redirect('/campgrounds/' + req.params.id);
    }
  });
});

module.exports = router;
