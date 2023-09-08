/*
    --> Pure functions are functions that give the same output every time it is called with the same set
    of inputs.
    --> Pure functions do not have any 'side effects'.
    --> Side Effects : when a functions alters/changes anything outside its scope
*/

// example 1
// below function changes the 'arr' array outside it scope, thus a side effect.
const arr1 = [1, 2, 3, 4];
function impure(array, elem) {
    array.push(elem);
    return array;
}
let output = impure(arr1, 5);
console.log(output); // [ 1, 2, 3, 4, 5 ]
output = impure(arr1, 5);
console.log(output); // [ 1, 2, 3, 4, 5, 5 ]
output = impure(arr1, 5);
console.log(output); // [1, 2, 3, 4, 5, 5, 5]
console.log(arr1); // [1, 2, 3, 4, 5, 5, 5]

// below functions does not alter the 'arr2' array outside its scope and returns the same output for
// same set of inputs.
const arr2 = [11, 12, 13, 14];
function pure(array, elem) {
    return [...array, elem];
}
output = pure(arr2, 15);
console.log(output); // [ 11, 12, 13, 14, 15 ]
output = pure(arr2, 15);
console.log(output); // [ 11, 12, 13, 14, 15 ]
console.log(arr2); // [ 11, 12, 13, 14 ]
