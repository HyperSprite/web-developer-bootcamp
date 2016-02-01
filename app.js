// app.js for yelpcamp
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const appIP = process.env.IP || '127.0.0.1';
const appPORT = process.env.PORT || 3030;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

  var campgrounds = [
    {name: 'Camp Coffee', image: 'https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9'},
    {name: 'Rocky Vista', image: 'https://images.unsplash.com/uploads/14131591236686822d392/95b6ec26'},
    {name: 'Wetlands Park', image: 'https://images.unsplash.com/uploads/1412026213666b9983de0/767f037f'},
    {name: 'Bench and Trees Only', image: 'https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0'},
    {name: 'Foggy Grove Park', image: 'https://images.unsplash.com/reserve/6lOsliXXTFmk4UHwTJZn_Store%20Mosse%20Nationalpark-4.jpg'},
    {name: 'High Mountain Lake', image: 'https://images.unsplash.com/photo-1447755331191-00f75c66befc'},
    {name: 'Vista View Valley', image: 'https://images.unsplash.com/photo-1418225043143-90858d2301b4'},
    {name: 'Grass Lands Camp Ground', image: 'https://images.unsplash.com/photo-1445207966278-0a0a65a2047b'},
  ];

app.get('/', function(req, res) {
  res.status(200).render('index');
});

app.get('/campgrounds', function(req, res) {
  res.status(200).render('campgrounds', {campgrounds: campgrounds});
});

app.get('/campgrounds/new', function(req, res) {
  res.status(200).render('campgrounds-new');
});

app.post('/campgrounds', function(req, res) {
  var data = {
    name: req.body.name,
    image: req.body.image,
  };
  campgrounds.push(data);
  res.status(302).redirect('/campgrounds');
});

app.get('*', function(req, res) {
  res.status(404).send('Error 404: Page not found');
});

app.listen(appPORT, appIP, function() {
  console.log(`yelpcamp started on ${appIP}:${appPORT} ${Date()}`);
});

