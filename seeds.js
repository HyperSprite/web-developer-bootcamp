const Campground = require('./models/campground');
const Comment = require('./models/comment');

const campSeeds = [
  {
    name: 'Olmsted Point',
    image: 'http://hypersprite.com/blog/wp-content/uploads/2013/08/HS_6971-Edit.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Bodie Ghost Town',
    image: 'http://hypersprite.com/blog/wp-content/uploads/2013/08/HS_6250_HDR_ps.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Hetch Hetchy  Reservoir',
    image: 'http://hypersprite.com/blog/wp-content/uploads/2012/08/HS0417_18_19_20.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Middle of Lombard Street',
    image: 'http://hypersprite.com/blog/wp-content/uploads/2011/05/MG_0879.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Yosemite National Park',
    image: 'http://hypersprite.com/blog/wp-content/uploads/2011/03/MG_8942.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Rocky Mountains',
    image: 'http://hypersprite.com/blog/wp-content/uploads/2011/03/MG_8722.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Yosemite Valley',
    image: 'http://hypersprite.com/blog/wp-content/uploads/2011/03/MG_8722.jpg',
    description: 'Cold here too!',
  },
  {
    name: 'Woodpecker Hollow',
    image: 'http://hypersprite.com/blog/wp-content/uploads/2011/01/woodpecker1.jpg',
    description: 'Lots of woodpeckers',
  },
];


function seedDB() {
  Campground.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    campSeeds.forEach(function(camp) {
      Campground.create(camp, function(err, cCamp) {
        if (err) {
          console.log(err);
        } else {
          console.log('campground added');
          Comment.create({
            text: 'this place is great, I wish it had internet',
            author: 'Jane Doe',
          }, function(err, cCom) {
            if (err) {
              console.log(err);
            } else {
              cCamp.comments.push(cCom);
              cCamp.save();
              console.log('added comment');
            }
          });
        }
      });
    });
  });
}

module.exports = seedDB;
