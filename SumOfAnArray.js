// JavaScript function to calculate the sum of an array, demonstrated with [1, 2, 3, 4, 10] :

// Best Solution (Using reduce)
function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

// Example usage
const numbers = [1, 2, 3, 4, 10];
console.log(sumArray(numbers)); // Output: 20 ✅

/******** Alternative Approaches **********/

// Using a for loop
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Using forEach
function sumArray(arr) {
  let sum = 0;
  arr.forEach((num) => (sum += num));
  return sum;
}

// Using for...of (Modern JS)
function sumArray(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

/*
Edge Cases Handled
Empty array → Returns 0 (thanks to reduce's initial value 0).

Works with any array of numbers.

Why reduce is Best?
✅ Concise (one-liner)
✅ Functional programming style (cleaner than loops)
✅ Readable and widely used in modern JS
*/

// Example Test
console.log(sumArray([1, 2, 3, 4, 10])); // 20 ✅
console.log(sumArray([])); // 0 ✅
console.log(sumArray([-1, 0, 1])); // 0 ✅
