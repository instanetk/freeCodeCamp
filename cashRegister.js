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
  let obj;

  // Reverse arrays from High to Low
  cid.reverse();
  currency.reverse();

  // Use reduce() to total the cash-in-drawer [cid]
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  const total = (arr) =>
    arr
      .map((x) => {
        return x[1];
      })
      .reduce(reducer)
      .toFixed(2);
  console.log(Number(total(cid)), "[cid] total before");

  // Test if cid total is less than change to generate status
  if (Number(total(cid)) < change) {
    status = "INSUFFICIENT_FUNDS";
    sort(change);
  } else if (change === Number(total(cid))) {
    status = "CLOSED";
    console.warn("STATUS: ", status);
    sort(change);
  } else if (Number(total(cid)) > change) {
    status = "OPEN";
    console.warn("STATUS: ", status);
    sort(change);
  }

  function sort(due) {
    console.log("change:", change, status);
    // If change value !== 0
    if (due !== 0 && status !== "INSUFFICIENT_FUNDS") {
      console.log("INIT FUNCTION", due);
      console.table(cid);

      // Find highest currency denomination (change > denomination)

      let denom = [];

      currency.filter((x) => {
        console.warn("DENOM", x[1], "[currency]");
        return cid.filter((y) => {
          // if cid[name] is found in currency[name]
          console.log("[cid]", y[0], y[1]);
          if (due >= x[1] && y[0].indexOf(x[0]) === 0) {
            //match cid and currency array
            if (y[1] !== 0) {
              // a second test excluding denoms below first encounter needed
              console.error("X", x[1], x[0], "/denomination/"); //denomination
              console.error("Y", y[1], y[0], "/available/"); //available
              console.log("AFTER TEST", x[1]);
              denom.push(x);
            } else if (cid[8].lastIndexOf(0) === 1 && y[0] === "PENNY") {
              console.warn(cid[8].lastIndexOf(0));
              console.error("NO MONEY");
              status = "INSUFFICIENT_FUNDS";
              console.log(status);
              console.table(denom);
            }
          }
        });
      });

      if (denom[0] === undefined) {
        output.pop();
        return { status: status, change: output };
      }

      console.warn("DENOMINATION DUE", denom[0][1]); // success
      // console.table(denom);

      let remainder = function () {
        due = Math.round((due -= denom[0][1]) * 100) / 100;
        return due;
      };

      console.log(due + " - " + denom[0][1]);

      // Check availabe amount in cid array
      let funds = cid.filter((x) => {
        console.log("AVAILABLE NAME: ", denom[0][0]);
        if (x[0].indexOf(denom[0][0]) !== -1) {
          // Substract currency value from change variable (High to Low) and from cid array.
          console.warn("SUBSTRACT AVAIL", x[1]);
          if (x[1] >= denom[0][1]) {
            let substract = Math.round((x[1] - denom[0][1]) * 100) / 100;
            // let substract = x[1] - denom[0][1];
            console.error(
              "CID AVAIL",
              denom[0][0],
              denom[0][1],
              "REMAINING: ",
              substract
            );
            x.splice(1, 1, substract);
          } else if (substract === 0) {
            console.warn("NO FUNDS");
            // MIGHT NOT BE NEEDED AN ELSE STATEMENT
            // IF TEST CAN BE PERFORMED AT DENOM
            return;
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
          console.error("LOOP NUMBER: ", i);
          let index = output.length - 1;
          console.log(
            "indexOf",
            output[index][0].lastIndexOf(denom[0][0]),
            output[index][0],
            denom[0][0]
          );
          // If denomination is found existing
          // This is if the second iteration is of the same denomination as the first iteration
          // Otherwise, if it's a different denomination, it jumps to the else statement -- LINE 400
          if (output[index][0].lastIndexOf(denom[0][0]) === 0) {
            console.log("SAME TYPE", true);
            console.log(">> UPDATED OUTPUT ARRAY <<");
            // Add its existing value to this iteration
            let sum = Math.round((output[index][1] + denom[0][1]) * 100) / 100;
            console.log(sum, i);
            // Update the array index with the new value
            output[index].splice(1, 1, sum);
            console.table(output);
            break;
          } else {
            console.log("SAME TYPE", false);
            console.log(">> INSERTED NEW TYPE <<");
            output.push([denom[0][0], denom[0][1]]);
            console.table(output);
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
    console.log("IF ends");
    // callback();
  } // --- sort() function ends ---

  console.log("sort() ends");


  if (status === "CLOSED" && output[0].indexOf("PENNY") === 0) {
    cid.reverse();
    for (let i = 1; i < cid.length; i++) {
      output.push([cid[i][0], cid[i][1]]);
    }
  }

  console.table(output);

  return { status: status, change: output };
} // end of checkCashRegister() -- LINE 1

// The return object's LINE is the where the function CALL happens.
// NOT where the return line appears.

//-------------------------------------------------------------------------------//

//-------------------------------------------------------------------------------//

//-------------------------------------------------------------------------------//

console.warn(
  "JavaScript Algorithms and Data Structures Projects: Cash Register"
);
//  console.log(checkCashRegister(19.5, 20, [["PEN NY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // return an object
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
//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));// should return {status: "INSUFFICIENT_FUNDS", change: []}.
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
); // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
