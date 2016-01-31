const express = require('express');


const app = express();
const appIP = process.env.IP || '127.0.0.1';
const appPort = process.env.PORT || 3030;

const data = {
  pig: 'oink',
  cow: 'Moo',
  dog: 'Woof Woof!',
  cat: 'I want to lay on you human',
  goldfish: '...',
};


app.get('/', function(req, res) {
  res.send(200, 'Hi there, welcome to my assignment');
});

app.get('/repeat/:arg1/:arg2', function(req, res) {
  var resp = '';
  var qData = req.params;
  for (var i = 0; i < Number(qData.arg2); i++) {
    resp = resp + qData.arg1 + ' ';
  }
  res.status(200).send(resp);
});

app.get('/speak/:arg1', function(req, res) {
  // console.log(req.params);
  var sounds = req.params.arg1.toLowerCase();
  if (data[sounds]) {
  var response = `The ${req.params.arg1} says "${data[sounds]}"`;
    res.status(200).send(response);
  } else {
    res.status(404).send('Error 404:  Sorry, page not found...\
    What are you doing with your life')
  }
});

app.get('*', function(req, res) {
  res.status(400).send('Error 404: Sorry, page not found...\
    What are you doing with your life');
});

app.listen(appPort, appIP, function() {
  console.log(`Server on ${appIP}:${appPort} ${Date()}`);
});

