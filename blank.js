// Intermediate Algorithm Scripting: Steamroller

// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  // I'm a steamroller, baby

  // Declare a placeholder array
  let newArr = arr.flat(Infinity);



  return newArr;
} // end steamrollArray function

console.warn("Intermediate Algorithm Scripting: Steamroller");
console.warn("RESULT ", steamrollArray([[["a"]], [["b"]]])); //should return ["a", "b"].
console.warn("RESULT", steamrollArray([1, [2], [3, [[4]]]])); //should return [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])); //should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])); //should return [1, {}, 3, 4].
