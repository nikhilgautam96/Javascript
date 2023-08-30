/*
    flat() : returns a new array with all sub-array elements 
            concatenated into it recursively up to the specified depth.
*/
// 1
const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat()); // [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat()); // [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2)); // [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2
/*
Using flat() on sparse arrays :
    --> The flat() method removes empty slots in arrays.
*/
const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]

const array = [1, , 3, ['a', , 'c']];
console.log(array.flat()); // [ 1, 3, "a", "c" ]

const array2 = [1, , 3, ['a', , ['d', , 'e']]];
console.log(array2.flat()); // [ 1, 3, "a", ["d", empty, "e"] ]
console.log(array2.flat(2)); // [ 1, 3, "a", "d", "e"]

// 3
/*
Calling flat() on non-array objects
    --> The flat() method reads the length property of this and then accesses each property whose key is a 
        nonnegative integer less than length. If the element is not an array, it's directly appended to 
        the result. If the element is an array, it's flattened according to the depth parameter.
*/
const arrayLike = {
    length: 3,
    0: [1, 2],
    // Array-like objects aren't flattened
    1: { length: 2, 0: 3, 1: 4 },
    2: 5,
    3: 3, // ignored by flat() since length is 3
};
console.log(Array.prototype.flat.call(arrayLike));
// [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]
