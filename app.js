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

const app = express();
const appIP = process.env.IP || '127.0.0.1';
const appPORT = process.env.PORT || 3030;

// BOILERPLATE MONGOOSE APP ///////////////
mongoose.connect('mongodb://localhost/yelpcamp/');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// PASSPORT ///////////////////////////////
app.use(require('express-session')({
  secret: '99this88is77my66crazy55secret',
  resave: false,
  saveUninitialazed: false,
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratagy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

seedDB();


// MIDDLEWARE FOR LOGGED IN USER /////////////
app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next();
});


// ROUTES /////////////////////////////////
app.get('/', function(req, res) {
  res.status(200).render('home');
});

app.get('/campgrounds', function(req, res) {
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

app.get('/campgrounds/new', isLoggedIn, function(req, res) {
  res.status(200).render('campground/new');
});

app.post('/campgrounds', function(req, res) {
  var data = {
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
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

app.get('/campgrounds/:id', function(req, res) {
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

app.get('/campgrounds/:id/comment/new', isLoggedIn, function(req, res) {
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

app.post('/campgrounds/:id/comment', isLoggedIn, function(req, res) {
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

// AUTH ROUTES ///////////////////////////////

app.get('/register', function(req, res) {
  res.status(200).render('auth/register');
});

app.post('/register', function(req, res) {
  var newUser = ({
    username: req.body.username,
    email: req.body.email,
  });
  User.register(newUser, req.body.password, function(err, cUser) {
    if (err) {
      console.log(err);
      return res.status(202).redirect('auth/register');
    }
    passport.authenticate('local')(req, res, function() {
      console.log('user created' + cUser.username);
      res.status(303).redirect('/campgrounds');
    });
  });
});

app.get('/login', function(req, res) {
  res.status(200).render('auth/login');
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/campgrounds',
  failureRedirect: '/login',
  failureFlash: false,
}), function(req, res) {
});

app.get('/logout', function(req, res) {
  req.logout();
  res.status(200).redirect('/campgrounds');
});

app.get('*', function(req, res) {
  res.status(404).send('Error 404: Page not found');
});

function isLoggedIn(req, res, next) {
  console.log(req.isAuthenticated);
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(200).redirect('/login');
}

app.listen(appPORT, appIP, function() {
  console.log(`yelpcamp started on ${appIP}:${appPORT} ${Date()}`);
});

