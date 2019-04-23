// ES6: Write Higher Order Arrow Functions
// It's time we see how powerful arrow functions are when processing data.
//
// Arrow functions work really well with higher order functions, such as map(),
// filter(), and reduce(), that take other functions as arguments for processing
// collections of data.

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

// Filter all positive numbers which are ingtegers
// Square the array using the Map function

const squareList = (arr) => {
  "use strict";
  // change code below this line
  const intArr = arr.filter((arr) => arr > 0 && Number.isInteger(arr));
  const squaredIntegers = intArr.map((intArr) => { return intArr ** 2 });


  // change code above this line
  return squaredIntegers
};

// test your code
const squaredIntegers = squareList(realNumberArray);
console.error("ES6: Write Higher Order Arrow Functions");
console.log(squaredIntegers);

//freeCodeCamp Solution

// const squareList = (arr) => {
//     "use strict";
//     const squaredIntegers = arr.filter( (num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num, 2) );
//     return squaredIntegers;
//   };
//
//   // test your code
//   const squaredIntegers = squareList(realNumberArray);
//   console.log(squaredIntegers);
