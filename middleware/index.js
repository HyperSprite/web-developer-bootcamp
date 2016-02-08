// MIDDLEWARE //////////////////////////////////////
const Campground = require('../models/campground');
const Comment = require('../models/comment');
const middlewareObj = {};

middlewareObj.checkCampgroundOwner = (req, res, next) => {
  if (req.isAuthenticated()) {
    Campground.findById(req.params.id, function(err, fCampground) {
      if (err) {
        res.status(302).redirect('back');
      } else {
        if (fCampground.author.id.equals(req.user._id)) {
          next();
        } else {
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
        res.status(302).redirect('back');
      } else {
        if (fComment.author.id.equals(req.user._id)) {
          next();
        } else {
          res.status(302).redirect('back');
        }
      }
    });
  } else {
    res.status(302).redirect('back');
  }
};

middlewareObj.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(200).redirect('/login');
};

module.exports = middlewareObj;
