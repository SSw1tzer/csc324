// Chapter 5 Excercises

// Excercise 1: Flattening
/* Use the reduce method in combination with the concat method to “flatten” an array of arrays
into a single array that has all the elements of the original arrays. */
let arrays = [[1, 2, 3], [4, 5], [6]];
const flatten = arr => arr.reduce((arrays, v) => {  // v is a placeholder variable to hold values (accumulator)
    if (v instanceof Array) { // instanceof checks to see if the object held in v is in the array
      return arrays.concat(flatten(v)) 
    } else {
      arrays.push(v); 
      return arrays;
    }
  }, [])
  
  console.log(flatten(arrays));

// Excercise 2: Your Own Loop
/* Write a higher-order function "loop" that provides something like a for loop statement. */
function loop (value, test, update, body) {
    if(test(value)) { // checks if the equation from test applied to the value is true
      body(value); // applies the body function to the value
    return loop(update(value), test, update, body); // returns the function but with the value dec/inc
    }
  }

  // for (
    // the value var x = 1;
    // the test x <= 5;
    // the update x++) {
    // the body
  // }

  loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

  loop(7, n => n > 0, n => n - 1, console.log);
  // 7 
  // ...
  // 1

// Excercise 3: Everything
/* Implement every as a function that takes an array and a predicate function as parameters. 
Write two versions, one using a loop and one using the some method. */

// solved using loop
function every(array, test) {
  let val = true;
	for (var i = 0; i < array.length; i++) {
      let testVal = array[i];
      if (test(testVal) == true) {
        val = true;
    } else {
      	val = false;
    }  
	}
  return val;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true