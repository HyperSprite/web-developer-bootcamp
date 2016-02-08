const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

// GET NEW USER FORM //////////////////////////
router.get('/register', function(req, res) {
  res.status(200).render('auth/register');
});

// POST NEW USER //////////////////////////////
router.post('/register', function(req, res) {
  var newUser = ({
    username: req.body.username,
    email: req.body.email,
  });
  User.register(newUser, req.body.password, function(err, cUser) {
    if (err) {
      console.log(err);
      req.flash('error', err.message);
      return res.status(202).redirect('/register');
    }
    passport.authenticate('local')(req, res, function() {
      console.log('user created' + cUser.username);
      req.flash('success', 'Welcom to YelpCamp ' + cUser.username);
      res.status(303).redirect('/campgrounds');
    });
  });
});

// GET LOGIN FORM ////////////////////////////
router.get('/login', function(req, res) {
  res.status(200).render('auth/login', {message: req.flash('error')});
});

// POST LOGIN ////////////////////////////////
router.post('/login', passport.authenticate('local', {
  successRedirect: '/campgrounds',
  failureRedirect: '/login',
  failureFlash: true,
}), function(req, res) {
});

// GET LOGOUT (NO VIEW) //////////////////////
router.get('/logout', function(req, res) {
  req.logout();
  req.flash('success', 'You have been logged out');
  res.status(200).redirect('/campgrounds');
});

module.exports = router;
