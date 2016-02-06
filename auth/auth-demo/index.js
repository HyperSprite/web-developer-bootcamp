const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('./models/user');

const appIP = process.env.IP || 'localhost';
const appPORT = process.env.PORT || 3045;
const app = express();

mongoose.connect('mongodb://localhost/auth-demo/');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('express-session')({
  secret: '8029e03gUJUygTRrf7897640986gfrrDVJKJTYG0why0am0i0here',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ROUTES ////////////////////////////////////////////

app.get('/', function(req, res) {
  res.status(200).render('home');
});

app.get('/register', function(req, res) {
  res.status(200).render('register');
});

app.post('/register', function(req, res) {
  User.register(new User({username: req.body.username, email: req.body.email}), req.body.password, function(err, cUser) {
    if (err) {
      console.log(err);
      return res.status(303).redirect('/register');
    }
    passport.authenticate('local')(req, res, function() {
      console.log('user created' + cUser);
      res.status(303).redirect('/secret');
    });
  });
});

app.get('/login', function(req, res) {
  res.status(200).render('login');
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/secret',
  failureRedirect: '/login',
  failureFlash: true,
}), function(req, res) {
});

app.get('/logout', function(req, res) {
  req.logout();
  res.status(303).redirect('/');
});


app.get('/secret', isLoggedIn, function(req, res) {
  res.status(200).render('secret');
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(303).redirect('/login');
}

// LISTEN ////////////////////////////////////////////

app.listen(appPORT, appIP, function() {
  console.log('Auth Demo on http://' + appIP + ':' + appPORT );
});
