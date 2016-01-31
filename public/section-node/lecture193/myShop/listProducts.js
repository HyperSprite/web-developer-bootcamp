const faker = require('faker');
const greeting = 'welcome to my shop';

const getFakerName = function() {
  return faker.company.companyName() + ' ' + faker.commerce.product();
};

const getFakerPrice = function() {
  return faker.commerce.price();
};

// print ten random products with prices.
const getProducts = function() {
  for (var i = 0; i < 10; i++) {
    console.log(getFakerName() + ' - $' + getFakerPrice());
  }
};

// HyperSprite: use of multiline template string
// notice the block is not tabbed in, tabs print :(
console.log(`
===========================
     ${greeting.toUpperCase()}
===========================`);
getProducts();

