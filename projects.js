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
  
    let roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    let decim = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    decim.reverse();
    roman.reverse();
    let romanized = "";

    for (let i = 0; i < decim.length; i++){
        while (decim[i] <= num){
            romanized += roman[i];
            num -= decim[i];
            console.log(num);
        }
    }

    return romanized;
   }
   
console.warn("JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter")
console.log(convertToRoman(36));
console.log(convertToRoman(400));

// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    let arr = str.split('');
   // console.log(arr[13].toString().charCodeAt());
    let cypher = [];


    for (let i = 0; i < arr.length; i++){
       if (arr[i].toString().charCodeAt() > 65){

        let decode = alphabet.indexOf(arr[i])-13;
        if (decode < 0){
            decode += 26;
        }
        cypher.push(alphabet[decode]); 
    } else {
        cypher.push(arr[i]);
    }
    } //loop

    console.log(cypher);

    return cypher.join('');
  }
  
  console.error("JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter")
  console.log(rot13("SERR PBQR PNZC!?."));
  


