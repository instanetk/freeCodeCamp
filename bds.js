// Basic Data Structures: Use an Array to Store a Collection of Data
//
// The below is an example of the simplest implementation of an array data structure.
// This is known as a one-dimensional array, meaning it only has one level, or that
// it does not have any other arrays nested within it. Notice it contains booleans,
// strings, and numbers, among other valid JavaScript data types:
//
// let simpleArray = ['one', 2, 'three’, true, false, undefined, null];
// console.log(simpleArray.length);
// // logs 7
//
// All array's have a length property, which as shown above, can be very easily
// accessed with the syntax Array.length.
//
// A more complex implementation of an array can be seen below.
// This is known as a multi-dimensional array, or an array that contains other arrays.
// Notice that this array also contains JavaScript objects, which we will examine
// very closely in our next section, but for now, all you need to know is that
// arrays are also capable of storing complex objects.
//
// let complexArray = [
//   [
//     {
//       one: 1,
//       two: 2
//     },
//     {
//       three: 3,
//       four: 4
//     }
//   ],
//   [
//     {
//       a: "a",
//       b: "b"
//     },
//     {
//       c: "c",
//       d: “d”
//     }
//   ]
// ];
//
// We have defined a variable called yourArray. Complete the statement by assigning
// an array of at least 5 elements in length to the yourArray variable.
// Your array should contain at least one string, one number, and one boolean.

let yourArray = ["Khalessi", 24, true, false, "Mother of Dragons"];
console.error("Line 1 // Basic Data Structures: Use an Array to Store a Collection of Data")
console.log(yourArray);
console.log(yourArray.length)


// Basic Data Structures: Access an Array's Contents Using Bracket Notation
//
// The fundamental feature of any data structure is, of course, the ability to
// not only store data, but to be able to retrieve that data on command.
// So, now that we've learned how to create an array, let's begin to think about
// how we can access that array's information.
//
// When we define a simple array as seen below, there are 3 items in it:
//
// let ourArray = ["a", "b", "c"];
//
// In an array, each array item has an index. This index doubles as the position of
// that item in the array, and how you reference it. However, it is important to note,
// that JavaScript arrays are zero-indexed, meaning that the first element of an array
// is actually at the zeroth position, not the first.
//
// In order to retrieve an element from an array we can enclose an index in brackets
// and append it to the end of an array, or more commonly, to a variable which
// references an array object. This is known as bracket notation.
//
// For example, if we want to retrieve the "a" from ourArray and assign it to a
// variable, we can do so with the following code:
//
// let ourVariable = ourArray[0];
// // ourVariable equals "a"
// In addition to accessing the value associated with an index, you can also set
// an index to a value using the same notation:
//
// ourArray[1] = "not b anymore";
// // ourArray now equals ["a", "not b anymore", "c"];
//
// Using bracket notation, we have now reset the item at index 1
// from "b", to "not b anymore".
//
//
// In order to complete this challenge, set the 2nd position (index 1)
// of myArray to anything you want, besides "b".

let myArray = ["a", "b", "c", "d"];
// change code below this line

//change code above this line

console.warn("Line 54 // Basic Data Structures: Access an Array's Contents Using Bracket Notation")
console.log(myArray);
