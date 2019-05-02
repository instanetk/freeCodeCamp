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
  let fahrenheit = celsius * 9/5 + 32;
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

  if (num === 0){
    return 1;
  } else {
    return num * factorialize(num-1);
  }

}

console.error("Line 44 // Basic Algorithm Scripting: Factorialize a Number")
console.log(factorialize(5));
