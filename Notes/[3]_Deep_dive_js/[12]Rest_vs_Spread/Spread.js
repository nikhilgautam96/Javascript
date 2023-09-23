// Copying an array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

// Merging arrays
const array1 = [1, 2];
const array2 = [3, 4];
const mergedArray = [...array1, ...array2];

// Function call arguments
const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
const result = sum(...numbers);
console.log(result); // 6

// Creating arrays with specific values
const zeros = [...Array(5).keys()]; // Creates [0, 1, 2, 3, 4]

// using spread to spread a string in JS:
console.log(...'Nikhil'); // N i k h i l

// we cannot use spread on non-iterable objects.
// eg:-
console.log(...123); // TypeError: Found non-callable @@iterator
