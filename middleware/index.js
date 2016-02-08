// MIDDLEWARE //////////////////////////////////////
const Campground = require('../models/campground');
const Comment = require('../models/comment');
const middlewareObj = {};

middlewareObj.checkCampgroundOwner = (req, res, next) => {
  if (req.isAuthenticated()) {
    Campground.findById(req.params.id, function(err, fCampground) {
      if (err) {
        req.flash('error', 'Error: Campground not found');
        res.status(302).redirect('back');
      } else {
        if (fCampground.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash('error', 'You are not authorized!');
          res.status(302).redirect('back');
        }
      }
    });
  } else {
    res.status(302).redirect('back');
  }
};

middlewareObj.checkCommentOwner = (req, res, next) => {
  if (req.isAuthenticated()) {
    Comment.findById(req.params.comment_id, function(err, fComment) {
      if (err) {
        req.flash('error', 'Error: Comment not found');
        res.status(302).redirect('back');
      } else {
        if (fComment.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash('error', 'You are not authorized!');
          res.status(302).redirect('back');
        }
      }
    });
  } else {
    req.flash('error', '<strong>Error</strong> You need to be logged in!</h5>');
    res.status(302).redirect('back');
  }
};

middlewareObj.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('error', 'You need to be logged in!');
  res.status(200).redirect('/login');
};

module.exports = middlewareObj;
