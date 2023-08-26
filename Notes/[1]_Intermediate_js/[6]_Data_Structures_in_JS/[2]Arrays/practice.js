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

// Filter method : returns a `shallow copy` of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// filter(callback, thisArg)
// callback(element, index, array)
const words = [
    'spray',
    'limit',
    'elite',
    'exuberant',
    'destruction',
    'present',
];
const result = words.filter((word) => word.length > 6);
console.log(result); // [ 'exuberant', 'destruction', 'present' ]

const arrayLike = {
    length: 3,
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'a', // ignored by filter() since length is 3
};

console.log(Array.prototype.filter.call(arrayLike, (x) => x <= 'b')); // [ 'a', 'b' ]

console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]
// Map method

// Reduce method
