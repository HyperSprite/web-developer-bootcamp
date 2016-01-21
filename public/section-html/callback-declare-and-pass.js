// callback-declare-and-pass.js
var allUserData = [];

function logStuff(userData) {
  if (typeof userData === 'string') {
    console.log(userData);
  }
  // item can be anything.
  else if (typeof userData === 'object') {
    for (var item in userData) {
      console.log(item + ': ' + userData[item]);
    }
  }
}

function getInput(options, callback) {
  allUserData.push(options);
  callback(options);
}

getInput({
  name: 'HyperSprite',
  speciality: 'Callbacks',
}, logStuff);


// callback-declare-and-pass.js
const allUserDataes6 = [];

const logStuffes6 = (userData) => {
  if (typeof userData === 'string') {
    console.log(userData);
  }
  // item can be anything.
  else if (typeof userData === 'object') {
    for (var item in userData) {
      console.log(item + ': ' + userData[item]);
    }
  }
}

const getInputes6 = (options, callback) => {
  allUserData.push(options);
  callback(options);
}

getInputes6({
  name: 'HyperSprite-es6',
  speciality: 'Callbacks-es6',
}, logStuffes6);