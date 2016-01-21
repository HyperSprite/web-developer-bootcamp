// lecture114.js

function arrayTypeTest(arr, test) {
  testArr = true;
  arr.forEach(function(a, i) {
      if(typeof a !== test) {
      testArr = false;
      }
    });
  return testArr;
}
// using this one
function matchValues(arr) {
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] !== arr[0]) {
      return false;
    }
  }
  return true;
}

function maxValue(arr) {
  var m = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if(m < arr[i]) {
      m = arr[i];
    }
  }
  return m;
}

// Same as above but with reduce instead.
function allAreEqual(array){
    if(!array.length) return true;
    // I also made sure it works with [false, false] array
    return array.reduce(function(a, b){return (a === b)?a:(!b);}) === array[0];
}
// this is the fastest out of all of these
function same(a) {
    if (!a.length) return true;
    return !a.filter(function (e) {
        return e !== a[0];
    }).length;
}

function allTheSame(array) {
    var first = array[0];
    return array.every(function(element) {
        return element === first;
    });
}

function useSome(array){
    return !array.some(function(value, index, array){
        return value !== array[0];
    });
}

// back to the asignment -------------------------

// -----------------------------------------------

function printReverse(arr, cb) {
// output 5,4,3,2,1
  arr.forEach(function(x, i) {
    console.log('printReverse [' + i + '] = ' + x);
    var newArr = [];
    x.forEach(function(z, j) {
      newArr.unshift(z);
    });
    console.log('reversePrint [' + i + '] = ' + newArr);
  });
  cb(arr, sumArray);
}

function coltPrintReverse(arr, cb) {
  arr.forEach(function(subArr) {
    for (var i = subArr.length -1; i >= 0; i--) {
    console.log(subArr[i]);
  }
  })
}


// Mine
// function sumArray(arr, cb) {
//   arr.forEach(function(subArr, i) {
//     console.log('sumArray :'+ subArr);
//     result = 0;
//     var testArr = arrayTypeTest(subArr, 'number');
//     if (testArr === false) {
//       console.log ('                       Not all numbers');
//     } else {
//       for (var j = 0; j < subArr.length; j++) {
//         result += subArr[j];
//       }
//       console.log(i + ' :                    ' + result);
//     }
    
//   })
//   cb(arr, coltPrintReverse);
// }


// Colt's
function sumArray(arr, cb) {
  arr.forEach(function(subArr, i) {
    console.log('sumArray :'+ subArr);
    result = 0;
    var testArr = arrayTypeTest(subArr, 'number');
    if (testArr === false) {
      console.log ('                       Not all numbers');
    } else {
      subArr.forEach(function(element) {
        result += element;
      });
      console.log(i + ' :                    ' + result);
    }
  })
  cb(arr, coltPrintReverse);
}

function max(arr, cb) {
  arr.forEach(function(subArr, i) {
    console.log('max()   ' + subArr);
    var testArr = arrayTypeTest(subArr, 'number');
    if (testArr === false) {
      console.log ('                       Not all numbers');
    } else {
    result = maxValue(subArr);
    console.log('[' + i + ']                 ' + result);
  }
  });
  cb(arr);
}

function isUniform(arr, cb) {
  console.log('isUniform');
  arr.forEach(function(subArr, i) {
    var test = matchValues(subArr);
  console.log (subArr + ' isUniform '+ test);
  });
  cb(arr, max);
}

// isUniform([1,1,1,1]); // true
// isUniform([2,1,1,1]); // false
// isUniform(['a','b','p']); // false
// isUniform(['b','b','b']); // true

printReverse([
  [1,2,3,4,5],
  [1,1,1,1,1],
  [5,6,6,6,6],
  [10,3,10,4],
  [-5,100],
  ['a','b','p'],
  ['b','b','b'],
], isUniform);
