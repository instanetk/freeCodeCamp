// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)){
  return myObj[checkProp];
  } else {
    return "Not Found";
  }
}

// Test your code by modifying these values
console.log(checkObj("fruit"));



// check if numbers are equal

function checkEqual(a, b) {

    return a === b ? true : false;

}

console.log(checkEqual(1,1));

// check number positive, negative or zero
function checkSign(num) {

    return (num === 0) ? "zero" : (num <= 0) ? "negative" : "positive";

}

console.log(checkSign(-10));


// let keyword
function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
