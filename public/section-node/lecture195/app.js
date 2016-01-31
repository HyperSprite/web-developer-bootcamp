const express = require('express');

const app = express();

const appIP = process.env.IP || '127.0.0.1';
const appPort = process.env.PORT || 3030;

app.get('/', function(req, res) {
  res.send('Hi, Visited on ' + Date());
});

app.get('/bye', function(req, res) {
  res.send('bye');
});

app.get('/dog', function(req, res) {
  res.send('MEOW!');
});

app.get('/system/:systemName/:doSomething', function(req, res) {
  res.send(JSON.toString(req));
  console.log(req.params);
  console.log(req.query);
});

app.get('/*', function(req, res) {
  res.send('dead');
});

app.listen(appPort, appPort, function() {
  console.log('Server running on ' + appIP + ':' + appPort + ' ' + Date());
});
