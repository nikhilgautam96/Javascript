/*

    Map method : returns a new array populated with the results of calling a provided function on every element 
                in the calling array. Transforms each array element.
    SYNTAX :
        map(callbackFn, thisArg)    --->   'Iterative method'
            --> callback(element, index, array)
        thisArg : is set to the array used to call the map function.

*/

// 1
const array1 = [1, 4, 9, 16];
const doubleMap = array1.map((x) => x * 2);
console.log(doubleMap); // [ 2, 8, 18, 32 ]
const binaryMap = array1.map((x) => x.toString(2));
console.log(binaryMap); // [ '1', '100', '1001', '10000' ]

// 2
/*
Calling map() on non-array objects :
    --> The map() method reads the length property of this and then accesses each property whose key is a 
    nonnegative integer less than length.
*/
const arrayLike = {
    length: 3,
    0: 100,
    1: 200,
    2: 300,
    4: 400, // ignored by map() since length is 3
};
console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2)); // [ 10000, 40000, 90000 ]

// 3
/*
 Using map() on sparse arrays :
*/
console.log(
    [1, , undefined, 4].map((x, index) => {
        console.log(`visited : ${index}`);
        return x * 2;
    })
);
// [ 2, <1 empty item>, NaN, 8 ]

// 4
/*
 Using `parseInt` with map() :
    --> parseInt takes 2 arguments
    --> map() callback takes 3 arguments = (elem, index, arr)
    --> map(parseInt) the 3rd argument is ignored but 1st 2 is passed.
*/
console.log(['1', '2', '3'].map(parseInt)); // [ 1, NaN, NaN ]
// bcz, parseInt('2', 1) & parseInt('3', 2) will throw error.
// Solution :
const returnInt = (elem) => parseInt(elem, 10);
console.log(['1', '2', '3'].map(returnInt)); // [ 1, 2, 3 ]
console.log(['1', '2', '3'].map((str) => parseInt(str))); // [ 1, 2, 3 ]
console.log(['1', '2', '3'].map(Number)); // [ 1, 2, 3 ]
console.log(['1.1', '2.2e2', '3e300'].map(Number)); // [ 1.1, 220, 3e+300 ]
console.log(['1.1', '2.2e2', '3e300'].map((str) => parseInt(str))); // [ 1, 2, 3 ]

// 5
/*
Mapped array contains undefined
    --> When undefined or nothing is returned:
*/
const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
    if (index < 3) {
        return num;
    }
});
console.log(filteredNumbers); // [ 1, 2, 3, undefined ]
