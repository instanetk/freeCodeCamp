// ES6: Use the Rest Operator with Function Parameters

// In order to help us create more flexible functions, ES6 introduces the rest operator
// for function parameters. With the rest operator, you can create functions that take
// a variable number of arguments. These arguments are stored in an array that can be
// accessed later from inside the function.


const sum = (function() {
  "use strict";
  return function sum(...i) {

    return i.reduce((a, b) => a + b, 0);
  };
})();
console.warn("Line 1: Use the Rest Operator with Function Parameters")
console.log(sum(1, 2, 3, 4, 5, 6, 7, 9, 10)); // 6

// ES6: Use Destructuring Assignment to Assign Variables from Objects

// We saw earlier how spread operator can effectively spread, or unpack, the contents
// of the array.
//
// We can do something similar with objects as well. Destructuring assignment is
// special syntax for neatly assigning values taken directly from an object to variables.

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const {tomorrow : tempOfTomorrow} = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}
console.error("Line 19: Use Destructuring Assignment to Assign Variables from Objects")
console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

// ES6: Use Destructuring Assignment to Assign Variables from Nested Objects

// We can similarly destructure nested objects into variables.

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const { tomorrow : {max: maxOfTomorrow}} = forecast; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.warn("Line 42: Use Destructuring Assignment to Assign Variables from Nested Objects")
console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

// ES6: Use Destructuring Assignment to Assign Variables from Arrays

// ES6 makes destructuring arrays as easy as destructuring objects.
// One key difference between the spread operator and array destructuring is that
// the spread operator unpacks all contents of an array into a comma-separated list.
// Consequently, you cannot pick or choose which elements you want to assign to
// variables.

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  // no need of const as the value swapped is global
   [a, b] = [b, a];

  // change code above this line
})();
console.error("Line 62: Use Destructuring Assignment to Assign Variables from Arrays")
console.log(a); // should be 6
console.log(b); // should be 8

// ES6: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements

// In some situations involving array destructuring, we might want to collect the rest
// of the elements into a separate array.
//
// The result is similar to Array.prototype.slice(), as shown below:
//
// const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// console.log(a, b); // 1, 2
// console.log(arr); // [3, 4, 5, 7]

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  //  arr = list; // change this

    const [a,b, ...arr] = list;


  // change code above this line
  return arr;
}

const arr = removeFirstTwo(source);

console.warn("Line 83: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements")
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];


// ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters
// In some cases, you can destructure the object in a function argument itself.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line


  return function half({max, min}) {
    // use function argument destructuring
    return (max + min) / 2.0;
  };


  // change code above this line

})();

console.error("Line 114: Use Destructuring Assignment to Pass an Object as a Function's Parameters")
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

// ES6: Create Strings using Template Literals

// A new feature of ES6 is the template literal. This is a special type of string
// that makes creating complex strings easier.
//
// Template literals allow you to create multi-line strings and to use string
// interpolation features to create strings.

// The ${variable} syntax used above is a placeholder. Basically, you won't have to
// use concatenation with the + operator anymore. To add variables to strings, you
// just drop the variable in a template string and wrap it with ${ and }.
// Similarly, you can include other expressions in your string literal,
// for example ${a + b}.

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = [
  `<li class="text-warning">${arr[0]}</li>`,
  `<li class="text-warning">${arr[1]}</li>`,
  `<li class="text-warning">${arr[2]}</li>` ];



  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
console.warn("Line 145: Create Strings using Template Literals")
console.log(resultDisplayArray);

// ES6: Write Concise Object Literal Declarations Using Simple Fields

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
console.error("Line 189: Write Concise Object Literal Declarations Using Simple Fields");
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

// ES6: Use class Syntax to Define a Constructor Function
// ES6 provides a new syntax to help create objects, using the keyword class.
//
// This is to be noted, that the class syntax is just a syntax, and not a
// full-fledged class based implementation of object oriented paradigm, unlike
// in languages like Java, or Python, or Ruby etc.
//
// In ES5, we usually define a constructor function, and use the new keyword
// to instantiate an object.

function makeClass() {
  "use strict";
  /* Alter code below this line */

class Vegetable {
  constructor(name){
    this.name = name;
  }
}

  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.warn("Line 204: Use class Syntax to Define a Constructor Function");
console.log(carrot.name); // => should be 'carrot'

// ES6: Use getters and setters to Control Access to an Object

// You can obtain values from an object, and set a value of a property
// within an object.
//
// These are classically called getters and setters.
//
// Getter functions are meant to simply return (get) the value of an object's
// private variable to the user without the user directly accessing the
// private variable.
//
// Setter functions are meant to modify (set) the value of an object's
// private variable based on the value passed into the setter function.
// This change could involve calculations, or even overwriting the previous value
// completely.

function makeClass() {
  "use strict";
  /* Alter code below this line */


class Thermostat {
  constructor(temperature) {
    this.temperature = temperature;
  }
  //getter
  get celsius(){
    return 5/9 * (this.temperature - 32);
  }
  set farenheit(celcius){
    return (celcius * 9.0 / 5 + 32);
  }
}

//                     ///// freeCodeCamp Solution //////
// function makeClass() {
//   "use strict";
//   /* Alter code below this line */
//
//   class Thermostat{
//     constructor(farenheit){
//       this.farenheit = farenheit;
//     }
//     get temperature(){
//       return 5 / 9 * (this.farenheit - 32);
//     }
//     set temperature(celsius){
//       this.farenheit = celsius * 9.0 / 5 + 32;
//     }
//   }
//
//   /* Alter code above this line */
//   return Thermostat;
// }
//                   ///// freeCodeCamp Solution //////


  /* Alter code above this line */

return Thermostat;
}
const Thermostat = makeClass();

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 76;
temp = thermos.temperature; // 26 in C
console.error("Line 232: Use getters and setters to Control Access to an Object");
console.log(thermos);

// ES6: Understand the Differences Between import and require

// In the past, the function require() would be used to import the functions and
// code in external files and modules. While handy, this presents a problem:
// some files and modules are rather large, and you may only need certain code
// from those external resources.
//
// ES6 gives us a very handy tool known as import. With it, we can choose which
// parts of a module or file to load into a given file, saving time and memory.
//
// Consider the following example. Imagine that math_array_functions has about
// 20 functions, but I only need one, countItems, in my current file.
// The old require() approach would force me to bring in all 20 functions.
// With this new import syntax, I can bring in just the desired function, like so:
//
// import { countItems } from "math_array_functions"
//
// A description of the above code:
//
// import { function } from "file_path_goes_here"
// We can also import variables the same way!

// Note
// The whitespace surrounding the function inside the curly braces is a best practice -
// it makes it easier to read the import statement.

console.warn("Line 302: Understand the Differences Between import and require");
console.log(' import \{ countItems \} from "math_array_functions" ');
