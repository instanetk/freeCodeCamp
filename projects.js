// JavaScript Algorithms and Data Structures Projects: Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

function palindrome(str) {

    
    let filter = /[a-zA-Z\d]+/g;
    let xstr = str.match(filter);
    let sep = xstr.join('');
    console.log(sep);

   let arr = sep.toLowerCase().split('');
   console.log(arr);
   let arr2 = arr.slice();
   let rev = arr2.reverse();

   //console.log(arr2.join(''), arr);


   if (arr.join() === rev.join()){
       return true;
   } else {
       return false
   }


  }
  
  
  console.error("JavaScript Algorithms and Data Structures Projects: Palindrome Checker");
  console.log(palindrome("Race Car^"));
  console.log(palindrome("1 eye for of 1 eye.")); //false
  console.log(palindrome("0_0 (: /-\ :) 0-0")); //true


// JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
    return num;
   }
   
console.warn("JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter")
console.log(convertToRoman(36));
   