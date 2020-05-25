// Basic Algorithm Scripting: Convert Celsius to Fahrenheit
//
// The algorithm to convert from Celsius to Fahrenheit is the temperature in
// Celsius times 9/5, plus 32.
//
// You are given a variable celsius representing a temperature in Celsius.
// Use the variable fahrenheit already defined and assign it the Fahrenheit
// temperature equivalent to the given Celsius temperature. Use the algorithm
// mentioned above to help convert the Celsius temperature to Fahrenheit.
//
// Don't worry too much about the function and return statements as they
// will be covered in future challenges. For now, only use operators that you
// have already learned.

function convertToF(celsius) {
  let fahrenheit = celsius * 9 / 5 + 32;
  return fahrenheit;
}

console.error("Line 1 // Basic Algorithm Scripting: Convert Celsius to Fahrenheit")
console.log(convertToF(100));


// Basic Algorithm Scripting: Reverse a String
//
// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function reverseString(str) {
  let input = str.split("");
  let reverse = input.reverse();
  let output = reverse.join("");
  return output;
  // return str.split("").reverse().join("");
}

console.warn("Line 24 // Basic Algorithm Scripting: Reverse a String")
console.log(reverseString("dragon"));


// Basic Algorithm Scripting: Factorialize a Number
//
// Return the factorial of the provided integer.
//
// If the integer is represented with the letter n, a factorial is the product
// of all positive integers less than or equal to n.
//
// Factorials are often represented with the shorthand notation n!
//
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
//
// Only integers greater than or equal to zero will be supplied to the function.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function factorialize(num) {

  if (num === 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }

}

console.error("Line 44 // Basic Algorithm Scripting: Factorialize a Number")
console.log(factorialize(5));


// Basic Algorithm Scripting: Find the Longest Word in a String
//
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// A key misunderstanding was between returning the number of letters long
// in the array or the word itself. The longest word is X letters long.
// It clarified even, that my response should be a NUMBER.

function findLongestWordLength(str) {
  let arr = str.split(" ");
  let longest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}

console.warn("Line 73 // Basic Algorithm Scripting: Find the Longest Word in a String")
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


// Basic Algorithm Scripting: Return Largest Numbers in Arrays
//
// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.
//
// Remember, you can iterate through an array with a simple for loop, and access
// each member with array syntax arr[i].
// Output should be: largestNumber = [5, 26, 39, 1001];

function largestOfFour(arr) {
  let largestNumber = [0, 0, 0, 0];

  // The empty array has to be prepared with the predetermined amount of
  // spaces required for the output.

  for (let i = 0; i < arr.length; i++) {
    console.log("OUT largestNumber is: " + largestNumber + " | i: " + i);
    for (let j = 0; j < arr[i].length; j++) {
      console.log("IN largestNumber is: " + largestNumber + " | i: " + i + " (j: " + j + ")");
      if (arr[i][j] > largestNumber[i] || arr[i][j] < 0) { // note largestNumber[i]
        largestNumber[i] = arr[i][j];
        console.log(largestNumber);

        /* FOR loop cycles
                  arrayIndex => i
                  subArrayIndex => j

               Iteration in the first array
                  For each iteration: arr[i][j]           largestNumber[i]          if arr[i][j] > largestNumber[i]?     then largestNumber[i] = arr[i][j]
                  First iteration:    arr[0][0] => 4      largestNumber[0] => 0     4 > 0? => TRUE                       then largestNumber[0] = 4
                  Second iteration:   arr[0][1] => 5      largestNumber[0] => 4     5 > 4? => TRUE                       then largestNumber[0] = 5
                  Third iteration:    arr[0][2] => 1      largestNumber[0] => 5     1 > 5? => FALSE                      then largestNumber[0] = 5
                  Fourth iteration:   arr[0][3] => 3      largestNumber[0] => 5     3 > 5? => FALSE                      then largestNumber[0] = 5
                  Fifth iteration:    arr[0][4] => FALSE  largestNumber[0] => 5                                          largestNumber = [5,0,0,0]
               Exit the first array and continue on the second one
               Iteration in the second array
                  For each iteration: arr[i][j]            largestNumber[i]           if arr[i][j] > largestNumber[i]?     then largestNumber[i] = arr[i][j]
                  First iteration:    arr[1][0] => 13      largestNumber[1] => 0      13 > 0? => TRUE                      then largestNumber[1] = 13
                  Second iteration:   arr[1][1] => 27      largestNumber[1] => 13     27 > 13? => TRUE                     then largestNumber[1] = 27
                  Third iteration:    arr[1][2] => 18      largestNumber[1] => 27     18 > 27? => FALSE                    then largestNumber[1] = 27
                  Fourth iteration:   arr[1][3] => 26      largestNumber[1] => 27     26 > 27? => FALSE                    then largestNumber[1] = 27
                  Fifth iteration:    arr[1][4] => FALSE   largestNumber[1] => 27                                          largestNumber = [5,27,0,0]
               Exit the first array and continue on the third one
               Iteration in the third array
                  For each iteration: arr[i][j]            largestNumber[i]           if arr[i][j] > largestNumber[i]?     then largestNumber[i] = arr[i][j]
                  First iteration:    arr[2][0] => 32      largestNumber[2] => 0      32 > 0? => TRUE                      then largestNumber[2] = 32
                  Second iteration:   arr[2][1] => 35      largestNumber[2] => 32     35 > 32? => TRUE                     then largestNumber[2] = 35
                  Third iteration:    arr[2][2] => 37      largestNumber[2] => 35     37 > 35? => TRUE                     then largestNumber[2] = 37
                  Fourth iteration:   arr[2][3] => 39      largestNumber[2] => 37     39 > 37? => TRUE                     then largestNumber[2] = 39
                  Fifth iteration:    arr[2][4] => FALSE   largestNumber[2] => 39                                          largestNumber = [5,27,39,0]
               Exit the first array and continue on the fourth one
               Iteration in the fourth array
                  For each iteration: arr[i][j]            largestNumber[i]           if arr[i][j] > largestNumber[i]?     then largestNumber[i] = arr[i][j]
                  First iteration:    arr[3][0] => 1000    largestNumber[3] => 0      1000 > 0? => TRUE                    then largestNumber[3] = 1000
                  Second iteration:   arr[3][1] => 1001    largestNumber[3] => 1000   1001 > 1000? => TRUE                 then largestNumber[3] = 1001
                  Third iteration:    arr[3][2] => 857     largestNumber[3] => 1001   857 > 1001? => FALSE                 then largestNumber[3] = 1001
                  Fourth iteration:   arr[3][3] => 1       largestNumber[3] => 1001   1 > 1001? => FALSE                   then largestNumber[3] = 1001
                  Fifth iteration:    arr[3][4] => FALSE   largestNumber[3] => 1001                                        largestNumber = [5,27,39,1001]
               Exit the FOR loop */

      }
    }
  }
  return largestNumber;
}

console.error("Line 97 // Basic Algorithm Scripting: Return Largest Numbers in Arrays")
//largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10]
])

//
// function largestOfFour(arr) {
//   var results = [];
//   for (var n = 0; n < arr.length; n++) {
//     var largestNumber = arr[n][0];
//     for (var sb = 1; sb < arr[n].length; sb++) {
//       if (arr[n][sb] > largestNumber) {
//         largestNumber = arr[n][sb];
//       }
//     }
//
//     results[n] = largestNumber;
//   }
//
//   return results;
// }

// TESTING NEGATIVE VALUES IN FUNCTION

function negative(num, neg) {

  if (num > neg) {
    return true;
  } else {
    return false;
  }

}
console.log(negative(-3, -17));


// Basic Algorithm Scripting: Confirm the Ending
//
// Check if a string (first argument, str) ends with the given target string
// (second argument, target).
//
// This challenge can be solved with the .endsWith() method, which was
// introduced in ES2015. But for the purpose of this challenge, we would
// like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let ending = target.length;
  let whole = str.length;
  let letters = str.slice(whole - ending);
  if (letters === target) {
    return true;
  } else {
    return false;
  }
}

console.warn("Line 198 // Basic Algorithm Scripting: Confirm the Ending")
console.log(confirmEnding("Bastian", "an"));

// Basic Algorithm Scripting: Repeat a String Repeat a String
//
// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  // repeat after me
  let repeat = str;
  if (num > 0) {
    for (let i = 1; i < num; i++) {
      repeat += str;
    }
  } else {
    return "";
  }

  return repeat;
}


console.error("Line 223 // Basic Algorithm Scripting: Repeat a String Repeat a String")
console.log(repeatStringNumTimes("abc", 3));

// Basic Algorithm Scripting: Truncate a String
//
// Truncate a string (first argument) if it is longer than the given maximum
// string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  // Clear out that junk in your trunk

  let whole = str.length;
  if (whole > num) {
    return str.slice(0, num) + "...";
  }

  return str;
}

console.warn("Line 246 // Basic Algorithm Scripting: Truncate a String")
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));



// Basic Algorithm Scripting: Finders Keepers
//
// Create a function that looks through an array (first argument) and returns
// the first element in the array that passes a truth test (second argument).
// If no element passes the test, return undefined.

function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}


console.error("Line 246 // Basic Algorithm Scripting: Finders Keepers");
console.log(findElement([1, 3, 5, 8, 9, 11], num => num % 2 === 0));


// Basic Algorithm Scripting: Boo who
//
// Check if a value is classified as a boolean primitive. Return true or false.
//
// Boolean primitives are true and false.

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.

  let test = typeof (bool);
  if (test === "boolean") {
    return true;
  } else {
    return false;
  }

}

console.warn("Line 290 // Basic Algorithm Scripting: Boo who");
console.log(booWho(false));


// Basic Algorithm Scripting: Title Case a Sentence
//
// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize connecting
// words like "the" and "of".

function titleCase(str) {

  let words = str.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {

    words[i] = words[i].charAt().toUpperCase() + words[i].slice(1);

  }

  return words.join(" ");

}


console.error("Line 312 // Basic Algorithm Scripting: Title Case a Sentence");
console.log(titleCase("I'm a little tea pot"));


// Basic Algorithm Scripting: Slice and Splice
//
// You are given two arrays and an index.
//
// Use the array methods slice and splice to copy each element of the first
// array into the second array, in order.
//
// Begin inserting elements at index n of the second array.
//
// Return the resulting array. The input arrays should remain the same
// after the function runs.

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!

  // First I made copies of the input arrays
  let arrCopy = arr1.slice();
  let arr2Copy = arr2.slice();

  console.warn("For Loop");
  // Then ran a for loop of the first array to be copied into the second
  for (let i = 0; i < arrCopy.length; i++) {
    console.log(arrCopy[i]);
    // I spliced array 1 into array 2
    arr2Copy.splice(n, 0, arrCopy[i]);
    // I realized the position (n) of the index also
    // had to increment each look or else insert in reverse order
    console.log("n: " + n);
    n++
  }
  console.warn("Results");
  // This problem took over an hour to solve.
  return arr2Copy;
}

console.warn("Basic Algorithm Scripting: Slice and Splice")
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
//console.log(frankenSplice([1, 2, 3], [4, 5], 1));


// Basic Algorithm Scripting: Falsy Bouncer
//
// Remove all falsy values from an array.
//
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//
// Hint: Try converting each value to a Boolean.


function bool(arg) {
  // TEST FUNCTION FOR FALSY VALUES
  if (!arg) {
    return true;
  } else {
    return typeof (arg);
  }

}



function bouncer(arr) {
  // Don't show a false ID to this bouncer.

  return arr.filter(Boolean);

}


console.error("Basic Algorithm Scripting: Falsy Bouncer")
console.error("> Falsy Test: " + bool(""));
console.log(bouncer([7, "ate", "", false, 9]));


// Basic Algorithm Scripting: Where do I Belong
//
// Return the lowest index at which a value (second argument) should be
// inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.
//
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because
// it is greater than 1 (index 0), but less than 2 (index 1).
//
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because
// once the array has been sorted it will look like [3,5,20] and
// 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

  arr.sort(function (a, b) {
    return a - b;
  });

  for (let a = 0; a < arr.length; a++) {
    if (arr[a] >= num) {
      return a;
    }
  }
  // In case the array is empty or otherwise
  return arr.length;
}

console.warn("Basic Algorithm Scripting: Where do I Belong")
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
//console.log(getIndexToIns([5, 3, 20, 3], 5));


// Basic Algorithm Scripting: Mutations

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {

  let arrX = arr[0].toLowerCase().split("").sort();
  let arrX1 = arr[1].toLowerCase().split("").sort();

  console.log(arrX + " | " + arrX1);

  // It was necessary to check the length of the second array against the first one using indexOf.

  for (let i = 0; i < arrX1.length; i++) {
    if (arrX.indexOf(arrX1[i]) < 0) {
      return false;
    }
  }
  return true;
}

console.error("Basic Algorithm Scripting: Mutations")
console.log(mutation(["hello", "hey"]));

// Basic Algorithm Scripting: Chunky Monkey

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

  // Break it up.

  // let l = arr.length; // array length
  // let r = arr.length%size; // get remainder
  // let n = Math.floor(l / size);

  // console.log("Array length (l)", l);
  // console.log("Remainder (r)",r); 
  // console.log("Sets Of (n)",n);
  // console.log("Size",size);

  // console.warn("For Loop")

function chunkArrayInGroups(arr, size) {

  let chunk = [];
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % size !== size - 1)
      chunk.push(arr[i]);
    else {
      chunk.push(arr[i]);
      //chunk = arr.slice(arr[i]);
      newArr.push(chunk);
      chunk = [];
    } // end of if statement
  } // end of outer loop

  if (chunk.length !== 0)
    newArr.push(chunk);
  return newArr;
}

console.warn("Line 476 // Basic Algorithm Scripting: Chunky Monkey")
console.table(chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 4));
//console.warn("Expected Output","Array 6 / Size 4");
// let tableArray = [["a","b","c","d"],["e","f"]];
// console.table(tableArray);
// console.log(tableArray);