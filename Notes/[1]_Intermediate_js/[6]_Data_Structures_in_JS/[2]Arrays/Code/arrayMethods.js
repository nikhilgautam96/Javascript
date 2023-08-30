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
console.log(array1); // output: Array [1, 100000, 21, 30, 4]

// toString() method :
/*
    The toString method of arrays calls `join()` internally, which joins the array and returns one string 
    containing each array element separated by commas. 
    If the join method is unavailable or is not a function, Object.prototype.toString is used instead, 
    returning [object Array].
*/
const arr1 = [1, 2, , { x: 'nikhil' }, [25, 26], function () {}];
console.log(arr1.toString());
// 1,2,,[object Object],25,26,function () {}
const arr2 = [];
arr2.join = 1; // re-assign `join` with a non-function
console.log(arr2.toString()); // [object Array]
console.log(Array.prototype.toString.call({ join: () => 1 })); // 1
console.log(Array.prototype.toString.call({ join: () => undefined })); // undefined
console.log(Array.prototype.toString.call({ join: 'not function' })); // [object Object]

// Splice method :
/*
    changes the contents of an array by removing or replacing existing elements 
    and/or adding new elements `in place`.
    
    SYNTAX :
        splice(start)
        splice(start, deleteCount)
        splice(start, deleteCount, item0)
        splice(start, deleteCount, item0, item1)
        splice(start, deleteCount, item0, item1, ...,  itemN)
    RETURN Value :
        - An array containing the deleted elements.
        - If only one element is removed, an array of one element is returned.
        - If no elements are removed, an empty array is returned.
*/
const monthsArr = ['Jan', 'March', 'April', 'June'];
monthsArr.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(monthsArr);
// output: Array ["Jan", "Feb", "March", "April", "June"]

monthsArr.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(monthsArr);
// output: Array ["Jan", "Feb", "March", "April", "May"]

const myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
const removed = myFish.splice(3, 1);
// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]

const arr = [1, , 3, 4, , 6];
console.log(arr.splice(1, 2)); // [empty, 3]
console.log(arr); // [1, 4, empty, 6]
