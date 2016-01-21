// lecture121.js

// movie object with movie title, have seen, ratings

var movies = [
  {
    movie: 'Hunt For Red October',
    rating: 5,
    haveSeen: true,
  },
  {
    movie: 'Days of Thunder',
    rating: 3.5,
    haveSeen: true,
  },
  {
    movie: 'Star Wars, The Force Awakens',
    rating: 5,
    haveSeen: false,
  },
  {
    movie: 'Ace Ventura, Pet Detective',
    rating: 1,
    haveSeen: true,
  },
];


// my example
const buildString = (m) => {
  const hS = '';
  const sT = 'stars';
  if (m.haveSeen === true) {
    hS = 'watched'; 
  } else {
    hS = 'not seen';
  }
  if (m.rating === 1) {
    sT = 'star';
  }
  return `I have ${hS} "${m.movie}" - ${m.rating} ${sT}`;
}


// Colt's example
function coltBuildString(m) {
  var result = '';
  var hS = '';
  var sT = 'stars';
  result = 'I have ';
  if (m.haveSeen === true) {
    hS = 'watched'; 
  } else {
    hS = 'not seen';
  }
  result += `${hS} "${m.movie}" - `
  if (m.rating === 1) {
    sT = 'star';
  }
  result += `${m.rating} ${sT}`;
  return result;
}

movies.forEach((m) => {
  console.log(buildString(m));
});

