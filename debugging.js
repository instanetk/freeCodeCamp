// Debugging: Understanding the Differences between the freeCodeCamp and Browser Console
//
// You may have noticed that some freeCodeCamp JavaScript challenges include their
// own console. This console behaves a little differently than the browser console
// you used in the last challenge.
//
// The following challenge is meant to highlight some of the differences between
// the freeCodeCamp console and the browser console.
//
// First, the browser console. When you load and run an ordinary JavaScript
// file in your browser the console.log() statements will print exactly what
// you tell them to print to the browser console the exact number of times you
// requested. In your in-browser text editor the process is slightly different
// and can be confusing at first.
//
// Values passed to console.log() in the text editor block run each set of tests
// as well as one more time for any function calls that you have in your code.
//
// This lends itself to some interesting behavior and might trip you up in the
// beginning, because a logged value that you expect to see only once may print
// out many more times depending on the number of tests and the values being passed
// to those tests.
//
// If you would like to see only your single output and not have to worry about
// running through the test cycles, you can use console.clear().
//
//
// Use console.log() to print the variables in the code where indicated.


// Open your browser console
let outputTwo = "This will print to the browser console 2 times";
// Use console.log() to print the outputTwo variable
console.log(outputTwo);

let outputOne = "Try to get this to log only once to the browser console";
// Use console.clear() in the next line to print the outputOne only once
console.clear();

// Use console.log() to print the outputOne variable
console.log(outputOne);


// Debugging: Use typeof to Check the Type of a Variable
//
// You can use typeof to check the data structure, or type, of a variable. This is useful in debugging when working with multiple data types. If you think you're adding two numbers, but one is actually a string, the results can be unexpected. Type errors can lurk in calculations or function calls. Be careful especially when you're accessing and working with external data in the form of a JavaScript Object Notation (JSON) object.
//
// Here are some examples using typeof:
//
// console.log(typeof ""); // outputs "string"
// console.log(typeof 0); // outputs "number"
// console.log(typeof []); // outputs "object"
// console.log(typeof {}); // outputs "object"
//
// JavaScript recognizes six primitive (immutable) data types: Boolean, Null,
// Undefined, Number, String, and Symbol (new with ES6) and one type for
// mutable items: Object. Note that in JavaScript, arrays are technically a
// type of object.

let seven = 7;
let three = "3";
console.log(seven + three);
// Add your code below this line
console.log(typeof(seven));
console.log(typeof(three));



// Debugging: Catch Misspelled Variable and Function Names
//
// The console.log() and typeof methods are the two primary ways to check
// intermediate values and types of program output. Now it's time to get into
// the common forms that bugs take. One syntax-level issue that fast typers can
// commiserate with is the humble spelling error.
//
// Transposed, missing, or mis-capitalized characters in a variable or function
// name will have the browser looking for an object that doesn't exist -
// and complain in the form of a reference error. JavaScript variable and
// function names are case-sensitive.
//
//
// Fix the two spelling errors in the code so the netWorkingCapital
// calculation works.

let myArray = [1, 2, 3, 4];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
