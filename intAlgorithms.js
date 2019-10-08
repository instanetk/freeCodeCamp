// Intermediate Algorithm Scripting: Sum All Numbers in a Range

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function sumAll(arr) {

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let array = [];

  for (let i = min; i < max+1; i++){
    array.push(i);
  }

  return  array.reduce((a, b) => {return a + b});
  
  }

  console.warn("Intermediate Algorithm Scripting: Sum All Numbers in a Range");
  console.log(sumAll([-1, 20]));

// Intermediate Algorithm Scripting: Diff Two Arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  var newArr = [];
  let nonEx = [];
  // Same, same; but different.

  function diff(first, second) {
    for (let i = 0; i < second.length; i++) {
      newArr = first.includes(second[i]);
      if (newArr === false) {
        nonEx.push(second[i]);
      }
    }
  }

  diff(arr1, arr2);
  diff(arr2, arr1);

  return nonEx;
}



console.error("Intermediate Algorithm Scripting: Diff Two Arrays");console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

// Intermediate Algorithm Scripting: Seek and Destroy

// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

function destroyer(arr) {
  // Remove all the values

  let args = arr.slice.call(arguments);
  args.splice(0, 1);


  return arr.filter((val) => !args.includes(val));
}

console.warn("Intermediate Algorithm Scripting: Seek and Destroy")
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // [1, 5, 1]

// Intermediate Algorithm Scripting: Wherefore art thou

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let srcKeys = Object.keys(source);


  arr = collection.filter(function (obj) {
    return srcKeys
    .map(function (key){
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    })
    .reduce(function(a, b){
      return a && b;
    })
  });

  
  // Only change code above this line
  return arr;
}


console.error("Intermediate Algorithm Scripting: Wherefore art thou");
console.table(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

// Intermediate Algorithm Scripting: Spinal Tap Case

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();


}

console.warn("Intermediate Algorithm Scripting: Spinal Tap Case");
console.log(spinalCase('ThisIs Spinal Tap'));


// Intermediate Algorithm Scripting: Pig Latin

// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  let splitStr = str.split("");
  let latin = "";

  var regex = /[aeiou]/gi;
  let test = regex.test(splitStr[0]);

  if (test === true){
    // begins with vowel
    return splitStr.join('')+"way";
  } else if(str.match(regex) === null){
    latin = str + "ay";
  } else {
    // begins with consonant

    console.log(str.match(regex)[0]); // Returns the value of requested match. [0] returns first, [1] returns second, etc. o = 3 and e = 5, respectively. Used in conjuction with indexOf(), it returns the "index position" of it. Which can now be used to manipulate the string up to a certain index.

    let vowelIndice = str.indexOf(str.match(regex)[0]);
    console.log(vowelIndice)

    latin = str.substring(vowelIndice) + str.substring(0, vowelIndice)+"ay";
    
  }
  return latin;
}

console.error("Intermediate Algorithm Scripting: Pig Latin");
console.log(translatePigLatin("glove"));

// Intermediate Algorithm Scripting: Search and Replace

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
let index = str.match(before);
console.log(index);
let upper = after[0][0].toUpperCase() + after.slice(1);

if (index[0][0] === index[0][0].toUpperCase()){
  return str.replace(index, upper);
} else if (index[0][0] === index[0][0].toLowerCase()){
  return str.replace(index, after);
} 

}

console.warn("Intermediate Algorithm Scripting: Search and Replace");
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "hopped"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("Let us go to the store", "store", "mall"));

// Intermediate Algorithm Scripting: DNA Pairing

// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {

  let arr = str.split("");

  return arr.map(x => {
    let pair = [];
    if (x === "A"){
      pair.push(x,"T");
    } else if (x === "T"){
      pair.push(x,"A");
    } else if (x === "G"){
      pair.push(x,"C");
    } else if (x === "C"){
      pair.push(x,"G");
    }
    return pair;
    
  });

}

console.error("Intermediate Algorithm Scripting: DNA Pairing");
console.table(pairElement("GCG")); // return [["G", "C"], ["C","G"],["G", "C"]]
console.table(pairElement("ATCGA")); //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

// Intermediate Algorithm Scripting: Missing letters

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {



  for (let i = 0; i < str.length; i++){
    let code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0)+i){
      return String.fromCharCode(code - 1);
    }
  }

  return undefined;

}

console.warn("Intermediate Algorithm Scripting: Missing letters");
console.log(fearNotLetter("abce")); //d
console.log(fearNotLetter("abcdefghjklmno")); //i
console.log(fearNotLetter("stvwx")); //u (index = 20)

// Intermediate Algorithm Scripting: Sorted Union

// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

function uniteUnique(arr) {
  let array = [];

  for (let i = 0; i < arguments.length; i++){
    array.push(arguments[i]);
  }
  let output = [];
   array.map(x => { 
    x.map(y => {
  if (output.indexOf(y) === -1){
    output.push(y);
  }
    //now push into an array and filter the duplicates from the beginning
    //you can nest map functions.
    //x.map returns arrays
    //y.map maps array values.
    })
  })
return output;
}

console.error("Intermediate Algorithm Scripting: Sorted Union")
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //should return [1, 3, 2, 5, 4].

// Intermediate Algorithm Scripting: Convert HTML Entities

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  // &colon;&rpar;
  let HTMLentities = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    '\'':"&apos;"
  }

  return str.split("").map(char => HTMLentities[char] || char).join("");
}

console.warn("Intermediate Algorithm Scripting: Convert HTML Entities");
console.log(convertHTML("Dolce & Gabbana"));

// Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {

  let prevNum = 0;
  let currNum = 1;
  let array = [];

  //for (let i = 0; i < num; i++){
    while (currNum <= num) {
    currNum += prevNum;
    prevNum = currNum - prevNum;
    array.push(prevNum);
  }
console.log(array); // num is calculating fib to the Nth iterations where as the problem asks for the fib value.

  return array
    .reduce((acc, x) => acc + x * (x % 2));
}

console.error("Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers");
console.log(sumFibs(1000)); //5