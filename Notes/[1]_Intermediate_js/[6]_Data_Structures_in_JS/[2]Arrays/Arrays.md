# Arrays in JS :-

-   They are simply objects.
-   Stores collections of multiple items within single variable name.
-   Features :
    1. Resizable/dynamic
    2. Not associative : `accessed using nonnegative integers as keys / index (starting with 0).`
    3. Array copy operations creates shallow copies.
-   Array Constructor :

    -   `new Array() // length 0 array.`
    -   `new Array(length) // // length = "length" array.`
    -   `new Array(elem1, elem2, /* ... */, elemN) // array with 'n' elements.`
    -   eg :-

    ```js
    const arrayEmpty = new Array(2);
    console.log(arrayEmpty.length); // 2
    console.log(arrayEmpty[0]); // undefined; actually, it is an empty slot
    // `in` operator.
    console.log(0 in arrayEmpty); // false
    console.log(1 in arrayEmpty); // false
    ```

# Array Methods :

-   `map()` :

```js
/*

    Map method : returns a new array populated with the results of calling a provided function on every element 
                in the calling array. Transforms each array element.
    SYNTAX :
        map(callbackFn, thisArg)    --->   'Iterative methods'
            --> callback(element, index, array)

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
```

-   `filter()` :

```js
/*

    Filter method : returns a `shallow copy` of a portion of a given array, filtered down to just the elements
                    from the given array that pass the test implemented by the provided function.
    SYNTAX :
        filter(callback, thisArg)    --->   'Iterative methods'
            --> callback(element, index, array)

*/
// 1
const words1 = [
    'spray',
    'limit',
    'elite',
    'exuberant',
    'destruction',
    'present',
];
const result = words1.filter((word) => word.length > 6);
console.log(result); // [ 'exuberant', 'destruction', 'present' ]

// 2
const arrayLike = {
    length: 3,
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'a', // ignored by filter() since length is 3
};
console.log(Array.prototype.filter.call(arrayLike, (x) => x <= 'b')); // [ 'a', 'b' ]

// 3
console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]

// 4
// Modifying each word
let words2 = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
const modifiedWords = words2.filter((word, index, arr) => {
    arr[index + 1] += ' extra';
    return word.length < 6;
});
console.log(modifiedWords);
// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]

// 5
// Appending new words
words2 = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
const appendedWords = words2.filter((word, index, arr) => {
    arr.push('new');
    return word.length < 6;
});
console.log(appendedWords);
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// ["spray" ,"limit" ,"elite"]

// 6
// Deleting words
words2 = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
const deleteWords = words2.filter((word, index, arr) => {
    arr.pop();
    return word.length < 6;
});
console.log(deleteWords);
// Notice 'elite' is not even obtained as it's been popped off 'words' before filter can even get there
// ["spray" ,"limit"]
```

-   `reduce()` :

```js
/*

    Reduce method : returns a single value by executing a reducer callback function on each element of the array.
    SYNTAX :
        reduce(callbackFn, initialValue)    --->   'Iterative methods'
            --> callback(accumulator, currentValue, currentIndex, array)
            --> initialValue : 
                        1. A value to which accumulator is initialized the first time the callback is called.
                        2. If initialValue is not specified, accumulator is initialized to the first value in the array,
                             and callbackFn starts executing with the second value in the array as currentValue. 
                        3. In this case, if the array is empty (so that there's no first value to return as accumulator),
                         an error is thrown.
*/
// 1
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
console.log(sumWithInitial); // 10

// 2
const array2 = [15, 16, 17, 18, 19, 20];
function reducer(acc, curr, index) {
    const returns = acc + curr;
    console.log(
        `acc: ${acc}, curr: ${curr}, index: ${index}, returns: ${returns}`
    );
    return returns;
}
console.log(array2.reduce(reducer)); // 105
// Callback is invoked 5 times only, w/o initial value.
// acc: 15, curr: 16, index: 1, returns: 31
// acc: 31, curr: 17, index: 2, returns: 48
// acc: 48, curr: 18, index: 3, returns: 66
// acc: 66, curr: 19, index: 4, returns: 85
// acc: 85, curr: 20, index: 5, returns: 105

// 3
/*
Using reduce() with sparse arrays :
    --> reduce() skips missing elements in sparse arrays, but it does not skip undefined values.
*/
console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN

// 4
/*
Function sequential piping :
 --> The pipe function takes a sequence of functions and returns a new function. 
    When the new function is called with an argument, the sequence of functions are called in order, 
    with each one receiving the return value of the previous function.
*/
const pipe = (...functions) => {
    console.log('...functions :', functions);
    return (initialValue) => {
        console.log('initialiValue :', initialValue);
        return functions.reduce((acc, fn) => fn(acc), initialValue);
    };
    // here,
    // acc = initialValue (6 | 9 | 16 | 10)
    // fn = ...function [double, triple] | [triple, triple] | [double, triple, quadruple]
    // when we call 'reduce()' on '...functions', each function is called sequentially on the 'accumulator'.
};
// Building blocks to use for composition
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;
console.log(double, triple, quadruple);
// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);
console.log(multiply6);
console.log(multiply9);
console.log(multiply16);
// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240

// 5
/*
Sum of values in an object array :
    --> To sum up the values contained in an array of objects, you must supply an initialValue, 
    so that each item passes through your function.
*/
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce((acc, curr) => acc + curr.x, 0);
console.log(sum); // 6

// 6
/*
Running promises in sequence :
 --> Promise sequencing is essentially function piping demonstrated in the previous section, 
    except done asynchronously.
*/
const asyncPipe = (...functions) => {
    console.log('...function :', functions);
    return (initialValue) => {
        console.log('initialValue :', initialValue);
        return functions.reduce(
            (acc, curr) => acc.then(curr),
            Promise.resolve(initialValue)
        );
    };
};
const p1 = async (a) => a * 2;
const p2 = async (a) => a * 5;
const func = (a) => a * 3;
const p3 = async (a) => a * 4;
asyncPipe(p1, p2, func, p3)(10).then(console.log); // 1200
```

-   `flat()` :

```js
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
```

-   `Other methods` :

```js
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Push method : adds element at the end.
a.push(10);
console.log(a);

// Unshift method : adds element at the start.
a.unshift(0);
console.log(a);

// Pop method : returns the value popped from end.
let val = a.pop(); // 10
console.log(a, val);

// Shift method : returns the value popped from start.
val = a.shift(); // 0
console.log(a, val);

// Search operations that works for PRIMITIVE data types.
// IndexOf method
const names = [
    'nikhil',
    'gautam',
    'niku',
    'aditya',
    'gautam',
    'golu',
    'gautam',
    'aakash',
    'neha',
];
console.log(names.indexOf('aditya')); // 3
console.log(names.indexOf('niki')); // -1
console.log(names.indexOf('gautam', 2)); // 5 : the second paramenter indicates the index from where the search should begin
console.log(names.indexOf('gautam', 11)); // -1

// lastIndexOf method
console.log(names.lastIndexOf('gautam')); // 5
console.log(names.lastIndexOf('gautam', 5)); // 4

// Includes method : returns true/false if element exists in array.
console.log(names.includes('gautam')); // true
console.log(names.includes('gautam', 7)); // false

// Search operations that works for NON-PRIMITIVE data types.
// Find method : returns the first element in the provided array
//               that satisfies the provided testing function.
//               If no values satisfy the testing function, undefined is returned.
let channels = [
    {
        name: 'Apna college',
        subscriber: 10000,
    },
    {
        name: 'Apni Kaksha',
        subscriber: 20000,
    },
    {
        name: 'Apna System',
        subscriber: 30000,
    },
    {
        name: 'Sabka baap',
        subscriber: 40000,
    },
];
console.log(channels.find((elem) => elem.subscriber > 10000)); // { name: 'Apni Kaksha', subscriber: 20000 }

// Concat method : returns concatenated array.
const x1 = [1, 2, 3, 4, 5];
const x2 = [4, 5, 6, 7, 8];
const x3 = x1.concat(x2);
console.log(x1.concat(x2)); // [1, 2, 3, 4, 5, 4, 5, 6, 7, 8]
console.log(x1.concat('nik', 'gt')); // [1, 2, 3, 4, 5, 'nik', 'gt']

// Slice method : returns sliced subarray.
console.log(x3.slice(2, 6)); // [ 3, 4, 5, 4 ]

// Spread operator
const name1 = ['Nikhil', 'Gautam', 'Niku', 'Aditya'];
const name2 = ['Ankit', 'Sumit', 'Akshat', 'Parihar', 'Nikhil'];
const name3 = [...name1, ...name2, 'Abhijit', 'Markandey'];
const name4 = [...['Nikhil', 'Gautam', 'Niku', 'Aditya'], 'zooby', 'doo'];
console.log(name3);
//   [ 'Nikhil', 'Gautam', 'Niku', 'Aditya', 'Ankit', 'Sumit',
//     'Akshat', 'Parihar', 'Nikhil', 'Abhijit', 'Markandey' ]
console.log(name4); // [ 'Nikhil', 'Gautam', 'Niku', 'Aditya', 'zooby', 'doo' ]

// For loop in Array
for (let i = 0; i < name3.length; i++) {
    console.log(name3[i]);
}
// For of loop in Arrays
for (let name of name4) {
    console.log(name);
}
// Nikhil
// Gautam
// Niku
// Aditya
// zooby
// doo

// ForEach method : It is a method in Array.prototype, that mimics the For-Each loop, and not the loop.
name2.forEach((element, index) => {
    console.log(element, '--', index);
});
// Ankit -- 0
// Sumit -- 1
// Akshat -- 2
// Parihar -- 3
// Nikhil -- 4

// Join method : returns a string by joining elements of array using a seperator.
let student = ['N', 'i', 'k', 'h', 'i', 'l'];
console.log(student.join()); // N,i,k,h,i,l | by default sperator is : ','
student = student.join('');
console.log(student); // Nikhil

// Split method : returns a array of strings seperated by splitting the initial string using a seperator.
console.log(student.split('')); // [ 'N', 'i', 'k', 'h', 'i', 'l' ]

// Sort method :
/*
Returns the reference to the same array, now sorted (in-place).
SYNTAX :
    sort()
    sort(compareFn) --> compareFn = (a, b) => a - b;

`> 0`	  :   sort a after b, e.g. [b, a]
`< 0`	  :   sort a before b, e.g. [a, b]
`=== 0`	  :   keep original order of a and b
`=== NaN` :   keep original order of a and b

*/
let months = ['March', 'Jan', 11, 'Feb', 12, 'Dec'];
months.sort((a, b) => {
    // console.log(a, b, a < b);
    return a < b ? -1 : 1;
});
console.log(months);
// output: Array ["Dec", "Feb", "Jan", "March", 11, 12]
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// output: Array [1, 100000, 21, 30, 4]
```

-   `splice()` :

```js
/*
‘Splice’,
    --> according to the dictionary, means to join things together.
    --> It is used to remove elements from an array or replace them.

SYNTAX :
    --> " array.splice(start, deleteCount, newElem1, newElem2, ..., newElemN) "
    --> "start" : denotes the index from which the method will start its operation on the array.
    --> "deleteCount" : denotes the number of values to be deleted from the start.
                        If the value is 0, nothing will be deleted.
    --> " newElem1 to newElemN " : denote the values that would be added after the start.

RETURN VALUE :
    --> The returned value is the values that are affected,i.e., deleted.
    --> If deleteCount is 0, an empty array '[]' would be returned.
*/

// Example :

let arr = ['educative', 4, [1, 3], { type: 'animal' }];
let returnedArr = arr.splice(2, 1, { name: 'educative' });
console.log(arr); // [ 'educative', 4, { name: 'educative' }, { type: 'animal' } ]
console.log(returnedArr); // [ [ 1, 3 ] ]

returnedArr = arr.splice(2, { name: 'Nikhil' });
console.log(arr); // [ 'educative', 4, { name: 'educative' }, { type: 'animal' } ]
console.log(returnedArr); // []

returnedArr = arr.splice(2, 0, { name: 'Nikhil' });
console.log(arr); // [ 'educative', 4, { name: 'Nikhil' }, { name: 'educative' }, { type: 'animal' } ]
console.log(returnedArr); // []

returnedArr = arr.splice(2);
console.log(arr); // [ 'educative', 4 ]
console.log(returnedArr); // [ { name: 'Nikhil' }, { name: 'educative' }, { type: 'animal' } ]
```
