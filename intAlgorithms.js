// Intermediate Algorithm Scripting: Sum All Numbers in a Range

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function sumAll(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let array = [];

  for (let i = min; i < max + 1; i++) {
    array.push(i);
  }

  return array.reduce((a, b) => {
    return a + b;
  });
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

console.error("Intermediate Algorithm Scripting: Diff Two Arrays");
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);

// Intermediate Algorithm Scripting: Seek and Destroy

// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

function destroyer(arr) {
  // Remove all the values

  let args = arr.slice.call(arguments);
  args.splice(0, 1);

  return arr.filter(val => !args.includes(val));
}

console.warn("Intermediate Algorithm Scripting: Seek and Destroy");
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

  arr = collection.filter(function(obj) {
    return srcKeys
      .map(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce(function(a, b) {
        return a && b;
      });
  });

  // Only change code above this line
  return arr;
}

console.error("Intermediate Algorithm Scripting: Wherefore art thou");
console.table(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
);

// Intermediate Algorithm Scripting: Spinal Tap Case

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.warn("Intermediate Algorithm Scripting: Spinal Tap Case");
console.log(spinalCase("ThisIs Spinal Tap"));

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

  if (test === true) {
    // begins with vowel
    return splitStr.join("") + "way";
  } else if (str.match(regex) === null) {
    latin = str + "ay";
  } else {
    // begins with consonant

    console.log(str.match(regex)[0]); // Returns the value of requested match. [0] returns first, [1] returns second, etc. o = 3 and e = 5, respectively. Used in conjuction with indexOf(), it returns the "index position" of it. Which can now be used to manipulate the string up to a certain index.

    let vowelIndice = str.indexOf(str.match(regex)[0]);
    console.log(vowelIndice);

    latin = str.substring(vowelIndice) + str.substring(0, vowelIndice) + "ay";
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

  if (index[0][0] === index[0][0].toUpperCase()) {
    return str.replace(index, upper);
  } else if (index[0][0] === index[0][0].toLowerCase()) {
    return str.replace(index, after);
  }
}

console.warn("Intermediate Algorithm Scripting: Search and Replace");
console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "hopped")
);
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
    if (x === "A") {
      pair.push(x, "T");
    } else if (x === "T") {
      pair.push(x, "A");
    } else if (x === "G") {
      pair.push(x, "C");
    } else if (x === "C") {
      pair.push(x, "G");
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
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i) {
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

  for (let i = 0; i < arguments.length; i++) {
    array.push(arguments[i]);
  }
  let output = [];
  array.map(x => {
    x.map(y => {
      if (output.indexOf(y) === -1) {
        output.push(y);
      }
      //now push into an array and filter the duplicates from the beginning
      //you can nest map functions.
      //x.map returns arrays
      //y.map maps array values.
    });
  });
  return output;
}

console.error("Intermediate Algorithm Scripting: Sorted Union");
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //should return [1, 3, 2, 5, 4].

// Intermediate Algorithm Scripting: Convert HTML Entities

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  // &colon;&rpar;
  let HTMLentities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  return str
    .split("")
    .map(char => HTMLentities[char] || char)
    .join("");
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
  // a for loop would have generated a fibonacci sequence to the Nth number, where as a while loop generates a fibonacci sequence to the Nth value.
  while (currNum <= num) {
    currNum += prevNum;
    prevNum = currNum - prevNum;
    array.push(prevNum);
  }

  return array.reduce((acc, x) => acc + x * (x % 2));
}

console.error(
  "Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers"
);
console.log(sumFibs(1000));

// Intermediate Algorithm Scripting: Sum All Primes

// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

function sumPrimes(num) {
  var sieve = [],
    i,
    j,
    primes = [];
  for (i = 2; i <= num; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes.push(i);
      for (j = i << 1; j <= num; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes.reduce((acc, curr) => acc + curr);
}

console.warn("Intermediate Algorithm Scripting: Sum All Primes");
console.log(sumPrimes(10)); // sumPrimes(10) should return 17.
console.log(sumPrimes(977)); // should return 73156.

// Intermediate Algorithm Scripting: Smallest Common Multiple

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  let sorted = arr.sort(function(a, b) {
    return b - a;
  });

  let array = [];

  for (let i = sorted[0]; i >= sorted[1]; i--) {
    array.push(i);
  }

  let quot = 0;
  let loop = 1;
  let n;

  // run code while n is not the same length as the array
  console.log(array);
  do {
    quot = array[0] * loop * array[1];

    for (n = 2; n < array.length; n++) {
      console.warn(
        "loop " + loop,
        quot,
        "% " + array[n] + " = " + quot / array[n]
      );
      if (quot % array[n] !== 0) {
        break;
      }
    }
    loop++;
  } while (n !== array.length);

  return quot;
}

console.error("Intermediate Algorithm Scripting: Smallest Common Multiple");
console.log(smallestCommons([1, 5])); //should return 60.
//console.log(smallestCommons([2, 10])); // should return 2520

// Intermediate Algorithm Scripting: Drop it

// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
  // drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      // if returns true
      break;
    } else {
      //if false
      arr.shift(); //remove first element (index: 0)
    }
  }
  return arr;
}

console.error("Intermediate Algorithm Scripting: Drop it");
console.log(
  dropElements([1, 2, 3], function(n) {
    return n < 3;
  })
); // 1, 2
console.log(
  dropElements([0, 1, 0, 1], function(n) {
    return n === 1;
  })
); // 1, 0, 1
console.log(
  dropElements([0, 1, 2, 3, 9, 2], function(n) {
    return n > 2;
  })
); // 3, 9, 2

// Intermediate Algorithm Scripting: Steamroller

// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  // I'm a steamroller, baby

  // Declare a placeholder array
  let newArr = arr.flat(Infinity);

  return newArr;
} // end steamrollArray function

console.warn("Intermediate Algorithm Scripting: Steamroller");
console.warn(steamrollArray([[["a"]], [["b"]]])); //should return ["a", "b"].
console.warn(steamrollArray([1, [2], [3, [[4]]]])); //should return [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])); //should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])); //should return [1, {}, 3, 4].

// Intermediate Algorithm Scripting: Binary Agents
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

function binaryAgent(str) {
  let arr = str
    .split(" ")
    .map(x => String.fromCharCode(parseInt(x, 2)))
    .join("");

  return arr;
}

console.error("Intermediate Algorithm Scripting: Binary Agents");
console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);

// Intermediate Algorithm Scripting: Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
  // Is everyone being true?

  let users = collection
    .map(x => {
      return x[pre];
    })
    .every(x => x);

  //console.log(users);

  return users;
}

console.warn("Intermediate Algorithm Scripting: Everything Be True");
console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" }
    ],
    "sex"
  )
);
console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" }
    ],
    "sex"
  )
);

// Intermediate Algorithm Scripting: Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether() {
  let checkNum = function(num) {
    if (typeof num !== "number") {
      return undefined;
    } else return num;
  };

  if (arguments.length > 1) {
    let a = checkNum(arguments[0]);
    let b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    let c = arguments[0];
    if (checkNum(c)) {
      return function(arg2) {
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          return c + arg2;
        }
      };
    }
  }
}

console.error("Intermediate Algorithm Scripting: Arguments Optional");
console.log(addTogether(2, 2));
console.log(addTogether(3));


// Intermediate Algorithm Scripting: Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
let arr = [];
arr = firstAndLast.split(' ');

  this.getFullName = function() {
    return arr.join(' ');
  };
  this.getFirstName = function(){
    return arr[0];
  }
  this.getLastName = function(){
    return arr[1];
  }
  this.setFirstName = function(first){
    arr.splice(0,1,first);
    return arr[0]; 
  }
  this.setLastName = function(last){
    arr.splice(1,1,last);
    return arr[1]; 
  }
  this.setFullName = function(firstAndLast){
    let full = [];
    full = firstAndLast.split(' ');
    arr.splice(0,2,full[0], full[1]);
    return firstAndLast;
  }

  return firstAndLast;
};

var bob = new Person('Bob Ross');
console.warn("Intermediate Algorithm Scripting: Make a Person")
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.setFirstName("David"));
console.log(bob.setLastName("Quintero"));
console.log(bob.getFirstName());
console.log(bob.getFullName());
console.log(bob.setFullName("Leo Tolstoy"));
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(Object.keys(bob).length);

// Intermediate Algorithm Scripting: Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  let sat = arr.map(obj => {
   let orbital = [];
    let a = earthRadius + obj.avgAlt;
    let period = Math.round(2 * Math.PI * Math.sqrt(Math.pow(a,3) / GM));
    orbital = {name: obj.name, orbitalPeriod: period};
    return orbital;
  });
 return sat;
}

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}]

// [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]

console.error("Intermediate Algorithm Scripting: Map the Debris");
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
