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
  let sep = xstr.join("");
  console.log(sep);

  let arr = sep.toLowerCase().split("");
  console.log(arr);
  let arr2 = arr.slice();
  let rev = arr2.reverse();

  //console.log(arr2.join(''), arr);

  if (arr.join() === rev.join()) {
    return true;
  } else {
    return false;
  }
}

console.error(
  "JavaScript Algorithms and Data Structures Projects: Palindrome Checker"
);
console.log(palindrome("Race Car^"));
console.log(palindrome("1 eye for of 1 eye.")); //false
console.log(palindrome("0_0 (: /- :) 0-0")); //true

// JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
  let roman = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];
  let decim = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  decim.reverse();
  roman.reverse();
  let romanized = "";

  for (let i = 0; i < decim.length; i++) {
    while (decim[i] <= num) {
      romanized += roman[i];
      num -= decim[i];
      console.log(num);
    }
  }

  return romanized;
}

console.warn(
  "JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter"
);
console.log(convertToRoman(36));
console.log(convertToRoman(400));

// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let arr = str.split("");
  // console.log(arr[13].toString().charCodeAt());
  let cypher = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString().charCodeAt() > 65) {
      let decode = alphabet.indexOf(arr[i]) - 13;
      if (decode < 0) {
        decode += 26;
      }
      cypher.push(alphabet[decode]);
    } else {
      cypher.push(arr[i]);
    }
  } //loop

  console.log(cypher);

  return cypher.join("");
}

console.error(
  "JavaScript Algorithms and Data Structures Projects: Caesars Cipher"
);
console.log(rot13("SERR PBQR PNZC!?."));

//   JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
//   Return true if the passed string looks like a valid US phone number.

//   The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

//   555-555-5555
//   (555)555-5555
//   (555) 555-5555
//   555 555 5555
//   5555555555
//   1 555 555 5555
//   For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

function telephoneCheck(str) {
  //  let invalid = /[^()-\d\s]/g; //if true not valid -- RegEx

  let invalid = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  if (!invalid.test(str)) {
    // if regex test is passed perform next test
    // let arr = str.split('');
    // let phone = [];

    // // filter non-numeric characters into phone array. loop.
    // for (let i = 0; i < arr.length; i++){
    //     if (!isNaN(arr[i]) && arr[i].toString().charCodeAt() >= 48) {
    //         phone.push(arr[i])

    //     }
    // } //end for loop

    // check no more than ten numbers

    // console.warn(phone.length, phone.join(''));

    //     if (phone.length < 10){
    //         return false;
    //     } else if (phone.length === 10){
    //         return true;
    //     } else if (phone.length === 11 && phone[0].indexOf(1) === 0){
    //         return true;
    //     }

    // all else is false

    return false;
  } else {
    // regex test failed

    return true;
  }
}

console.error(
  "JavaScript Algorithms and Data Structures Projects: Telephone Number Validator"
);
console.log(telephoneCheck("555-555-5555")); //true
console.log(telephoneCheck("5555055555")); //true
console.log(telephoneCheck("1 (555) 555-5555")); //true
console.log(telephoneCheck("1 555-555-5555")); // true
console.log(telephoneCheck("1 555)555-5555")); // should return false.
console.log(telephoneCheck("(6054756961)")); // should return false
console.log(telephoneCheck("-1 (757) 622-7382")); // should return false
console.log(telephoneCheck("555)-555-5555")); // should return false.
console.log(telephoneCheck("(555-555-5555")); // should return false.