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
    {name: 'Olmsted Point', image: 'http://hypersprite.com/blog/wp-content/uploads/2013/08/HS_6971-Edit.jpg'},
    {name: 'Bodie Ghost Town', image: 'http://hypersprite.com/blog/wp-content/uploads/2013/08/HS_6250_HDR_ps.jpg'},
    {name: 'Hetch Hetchy  Reservoir', image: 'http://hypersprite.com/blog/wp-content/uploads/2012/08/HS0417_18_19_20.jpg'},
    {name: 'Middle of Lombard Street', image: 'http://hypersprite.com/blog/wp-content/uploads/2011/05/MG_0879.jpg'},
    {name: 'Olmsted Point', image: 'http://hypersprite.com/blog/wp-content/uploads/2013/08/HS_6971-Edit.jpg'},
    {name: 'Bodie Ghost Town', image: 'http://hypersprite.com/blog/wp-content/uploads/2013/08/HS_6250_HDR_ps.jpg'},
    {name: 'Hetch Hetchy  Reservoir', image: 'http://hypersprite.com/blog/wp-content/uploads/2012/08/HS0417_18_19_20.jpg'},
    {name: 'Middle of Lombard Street', image: 'http://hypersprite.com/blog/wp-content/uploads/2011/05/MG_0879.jpg'},
    {name: 'Olmsted Point', image: 'http://hypersprite.com/blog/wp-content/uploads/2013/08/HS_6971-Edit.jpg'},
    {name: 'Bodie Ghost Town', image: 'http://hypersprite.com/blog/wp-content/uploads/2013/08/HS_6250_HDR_ps.jpg'},
    {name: 'Hetch Hetchy  Reservoir', image: 'http://hypersprite.com/blog/wp-content/uploads/2012/08/HS0417_18_19_20.jpg'},
    {name: 'Middle of Lombard Street', image: 'http://hypersprite.com/blog/wp-content/uploads/2011/05/MG_0879.jpg'},
    {name: 'Olmsted Point', image: 'http://hypersprite.com/blog/wp-content/uploads/2013/08/HS_6971-Edit.jpg'},
    {name: 'Bodie Ghost Town', image: 'http://hypersprite.com/blog/wp-content/uploads/2013/08/HS_6250_HDR_ps.jpg'},
    {name: 'Hetch Hetchy  Reservoir', image: 'http://hypersprite.com/blog/wp-content/uploads/2012/08/HS0417_18_19_20.jpg'},
    {name: 'Middle of Lombard Street', image: 'http://hypersprite.com/blog/wp-content/uploads/2011/05/MG_0879.jpg'},
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

