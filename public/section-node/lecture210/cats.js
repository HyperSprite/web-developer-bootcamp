const mongoose = require('mongoose');
const VError = require('verror');
mongoose.connect('mongodb://localhost/cat-app/');

// get action from cli arguments
// we start at 2 because... see:
// https://nodejs.org/docs/latest/api/process.html#process_process_argv
const dbVerb = process.argv[2];
const argvCat = {
  name: process.argv[3],
  age: process.argv[4],
  temperament: process.argv[5],
};
if (dbVerb) console.log(`Trying to ${dbVerb} ${argvCat.name}`);

// Simple mongoose schema here.
const catSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  age: 'Number',
  temperament: 'String',
});

// Although I've never heard anyone say it
// we are adding the schema prototype to Cat
const Cat = mongoose.model('Cat', catSchema);

// This could be done with an object
// and maybe future itterations will do that
// but I didn't want to stray too far from
// they example code (little late for that I fear)
// if our first arg is insert, add a cat
if (dbVerb === 'insert') {

// Since we built our cat object up top
// in argvCat, we can just put that in here
// old way... refactoring
//  var newCat = new Cat(argvCat);
//  newCat.save(function(err, cat) {

  Cat.create(argvCat, (err, cat) => {
    if (err) {
      err = new VError(err, `error creating ${argvCat}`);
      console.log(err);
      process.exit(0);
      // the process.exits(0) are ending the app
      // so we don't need to ctrl + c
    }
    console.log(`One Saved Cat`);
    console.log(cat);
    process.exit(0);
  });
  // if our first arg is remove, we will try to find and delete
} else if (dbVerb === `remove`) {
  Cat.findOne({name: argvCat.name}, (err, catRem) => {
    if (!catRem) {
      console.log(`Failed to find a cat ${catRem}`);
      process.exit(0);
    } else if (err) {
      err = new VError(err, `error removing ${argvCat}`);
      console.log(err);
      process.exit(0);
    }
    catRem.remove((err, cb) => {
      if (err) {
        console.log(`Failed to remove a cat`);
        err = new VError(err, `error removing ${argvCat}`);
        console.log(err);
        process.exit(0);
      }
      console.log(`One Cat Removed ${cb}`);
      process.exit(0);
    });
  });
} else {
  // if we did anything other than insert or remove
  // then just find all and console it out
  Cat.find({}, (err, cats) => {
    if (err) {
      console.log(err);
      process.exit(0);
    } else {
      console.log('______________________________________');
      cats.forEach((aCat) => {
        console.log(`${aCat.name} is ${aCat.age} years old and is nearly always ${aCat.temperament}.`);
      });
    }
    process.exit(0);
  });
}

