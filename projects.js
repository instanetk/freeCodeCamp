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

// JavaScript Algorithms and Data Structures Projects: Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (DOLLAR)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)

function checkCashRegister(price, cash, cid) {
  let change = Math.round((cash - price) * 100) / 100;
  console.log("CHANGE DUE: $", change);

  let currency = [
    ["PENNY", 0.01],
    ["NICKLE", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];
  let output = [];

  let status;

  // Use reduce() to total the cash-in-drawer (cid)
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  const total = (arr) =>
    arr
      .map((x) => {
        return x[1];
      })
      .reduce(reducer)
      .toFixed(2);
  console.log((Number(total(cid))), "before");

  // Test if cid total is less than change to generate status
  if (Number(total(cid)) < change) {
    // If less = INSUFFICIENT FUNDS
    status = "INSUFFICIENT FUNDS";
    console.warn("STATUS: ", status);
   // break;
    // If equal = CLOSED
  } else if (change === Number(total(cid))) {
    status = "CLOSED";
    console.warn("STATUS: ", status);
    return;

  } else {
    status = "OPEN";
    console.warn("STATUS: ", status);


      // Update cid with the breakdown of cash

  // for (let i = 0; i < currency.length; i++) {
  //   // Find if cash amount is found in the currency array
  //   if (currency[i].indexOf(cash) === 1) {
  //     let sum = cid[i][1] + cash;
  //     // Replase sum value on cid array
  //     cid[i].splice(1, 1, sum);
  //   }
  // }

    // Reverse arrays from High to Low
    cid.reverse();
    currency.reverse();

    function sort(due) {
      // If change value !== 0
      if (due !== 0) {

        console.log("INIT FUNCTION", due);
        console.table(cid);
    
      // Find highest currency denomination (change > denomination)

      let denom = [];
      
      currency.filter((x) => {
        console.warn("DENOM", x[1], "[currency]");
        return cid.filter((y) => {
          // if cid[name] is found in currency[name]
          console.log("[cid]", y[0],y[1]);
          if (due >= x[1] && y[0].indexOf(x[0]) === 0) { //match cid and currency array
            if (y[1] !== 0) { // a second test excluding denoms below first encounter needed
              console.error("X", x[1], x[0], "/denomination/"); //denomination
              console.error("Y", y[1], y[0], "/available/"); //available
              console.log("AFTER TEST", x[1]);
              denom.push(x);
              } else if ((cid[8].lastIndexOf(0)) === 1 && y[0] === "PENNY"){
                  console.log(cid[8].lastIndexOf(0));
                  console.error("NO MONEY");
                status = "INSUFFICIENT FUNDS";
                console.log(status);
                output.pop();
              } 
            }
          })
      });

      if (denom[0] === undefined){return {status: status, change: []}};

      console.warn("DENOMINATION DUE", denom[0][1]); // success
     // console.table(denom);

          let remainder = function () {
              due = Math.round((due -= denom[0][1]) * 100) / 100;
              return due;
          }

          console.log(due +" - "+ denom[0][1]);

          // Check availabe amount in cid array
          let funds = cid.filter(x => {
              console.log("AVAILABLE NAME: ", denom[0][0]);
              if (x[0].indexOf(denom[0][0]) !== -1) {
                  // Substract currency value from change variable (High to Low) and from cid array.
                  console.warn("SUBSTRACT AVAIL", x[1])
                  if (x[1] >= denom[0][1]) {
                      let substract =  Math.round((x[1] - denom[0][1]) * 100) / 100;
                     // let substract = x[1] - denom[0][1];
                      console.error("CID AVAIL", denom[0][0], denom[0][1], "REMAINING: ", substract);
                      x.splice(1, 1, substract);
                  } else if (substract === 0){
                      console.warn("NO FUNDS");
                      // MIGHT NOT BE NEEDED AN ELSE STATEMENT
                      // IF TEST CAN BE PERFORMED AT DENOM

                  }

                  return x;
              }
          });
          console.error("CALC in CID $" + funds[0][1], "due: " + due);

          // Add these values into output array with relative denomination name.
          // If output array is empty at initiation -- LINE 370
          if (output[0] === undefined) {
              // Insert first value as ["DENOMINATION", value];
              console.log(">> INITIATED OUTPUT ARRAY");
              output.push([denom[0][0], denom[0][1]]);
              console.table(output);
              // Jumps to recursion with remainder after first loop -- LINE 418
          } else {
              // Second iteration resumes here instead of LINE 370
              // Initiate a loop to explore existing array
              for (let i = 0; i < output.length; i++) {
                  console.error("LOOP NUMBER: ", i)
                  let index = output.length-1;
                  console.log("indexOf", output[index][0].lastIndexOf(denom[0][0]), output[index][0], denom[0][0]);
                  // If denomination is found existing
                  // This is if the second iteration is of the same denomination as the first iteration
                  // Otherwise, if it's a different denomination, it jumps to the else statement -- LINE 400
                  if (output[index][0].lastIndexOf(denom[0][0]) === 0) {
                      console.log("SAME TYPE", true);
                      console.log(">> UPDATED OUTPUT ARRAY <<");
                      // Add its existing value to this iteration
                      let sum = Math.round((output[index][1] + denom[0][1]) * 100) / 100;
                     // let sum = output[index][1] + denom[0][1];
                      console.log(sum, i);
                      // Update the array index with the new value
                      output[index].splice(1, 1, sum);
                      console.table(output);
                      break;
                      // due -= denom[0][1];
                      //console.log(i, "LOOP SUBSTRACTION", due);

                  } else {
                      console.log("SAME TYPE", false);
                      console.log(">> INSERTED NEW TYPE <<");
                      // console.log("IF ", output[i][0], "= ", denom[0][0]);
                      // console.log(output[i][0].indexOf(denom[0][0]));
                      output.push([denom[0][0], denom[0][1]]);
                      // Substract updated value from amount due;
                      //due -= denom[0][1];
                      //   remainder();
                      console.table(output);
                      //console.warn("DUE", due);
                      break;
                  }

              }
          }

          // Substract updated value from amount due;
          remainder();

          // Now feed the remainder value in the change variable into the recursive function
          let recursion = due;
          console.warn("REMAINING DUE RECURSION", recursion);
          sort(recursion);

      } // if due is not equal to zero statement ends
    } // --- sort() function ends ---
    sort(change);


    console.table(output);
    //console.table(currency.reverse());

    
    console.log(total(cid), "after", status);

  } // register OPEN else statement
  return {status: status, change: output};
} // end of checkCashRegister() -- LINE 238 
 
//-------------------------------------------------------------------------------//

console.warn(
  "JavaScript Algorithms and Data Structures Projects: Cash Register"
);
// console.log(checkCashRegister(19.5, 25, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // return an object
// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); //should return {status: "OPEN", change: [["QUARTER", 0.5]]}
// console.log(
//   checkCashRegister(3.26, 100, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// ); //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//should return {status: "INSUFFICIENT_FUNDS", change: []}
// console.warn(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//should return {status: "INSUFFICIENT_FUNDS", change: []}
//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

// running tests
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}