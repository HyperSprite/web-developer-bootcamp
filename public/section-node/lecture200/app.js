// lecture200 app.js
const express = require('express');

const app = express();
const appIP = process.env.IP || '127.0.0.1';
const appPort = process.env.PORT || 3030;

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.status(200).render('home.ejs');
});

app.get('/fellinlovewith/:thing', function(req, res) {
  var thing = req.params.thing;
  res.status(200).render('love.ejs', {thingVar : thing});
});

app.get('*', function(req, res) {
  res.status(404).send('Error 404: page not found');
});

app.listen(appPort, appIP, function() {
  console.log(`Server started on ${appIP}:${appPort} ${Date()}`);
});
