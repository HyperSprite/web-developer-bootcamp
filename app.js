// app.js for yelpcamp
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStratagy = require('passport-local');
const Campground = require('./models/campground');
const Comment = require('./models/comment');
const User = require('./models/user.js');
const seedDB = require('./seeds');

const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const campgroundRoutes = require('./routes/campgrounds');
const commentRoutes = require('./routes/comments');

const app = express();
const appIP = process.env.IP || '127.0.0.1';
const appPORT = process.env.PORT || 3030;

// BOILERPLATE MONGOOSE APP ///////////////
mongoose.connect('mongodb://localhost/yelpcamp/');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// PASSPORT //////////////////////////////////////
app.use(require('express-session')({
  secret: '99this88is77my66crazy55secret',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratagy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

seedDB();

// MIDDLEWARE FOR LOGGED IN USER /////////////////
app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

// REQUIRING ROUTES //////////////////////////////
app.use('/', indexRoutes);
app.use(authRoutes);
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/comment', commentRoutes);

app.get('*', function(req, res) {
  res.status(404).send('Error 404: Page not found');
});

app.listen(appPORT, appIP, function() {
  console.log(`yelpcamp started on ${appIP}:${appPORT} ${Date()}`);
});
