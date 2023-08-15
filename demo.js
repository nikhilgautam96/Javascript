// debugger;
// consumer = 'nikhil';
// function p() {
//     console.log(consumer);
//     // undefined
//     if (consumer == 'nikhil') {
//         var consumer = 'gautam';
//         console.log(consumer);
//     }
//     console.log(consumer);
//     // undefined
// }
// p();

// const users = [
//     { fName: 'nikhil', lName: 'gautam', age: 25 },
//     { fName: 'aditya', lName: 'gautam', age: 22 },
//     { fName: 'Kushal', lName: 'gautam', age: 31 },
//     { fName: 'Kapil', lName: 'gautam', age: 21 },
// ];
// const output = users.reduce((acc, curr) => {
//     if (curr.age < 30) {
//         acc.push(curr.fName);
//     }
//     return acc;
// }, []);
// console.log(output);

// let x = Number(10);
// let y = Boolean(true);
// let z = undefined;
// let a = null;
// let b = Symbol(10);
// let c = 'nikhil';
// let d = BigInt('123345');
// console.log(typeof x); //number
// console.log(x.__proto__.__proto__); // [Object: null prototype] {}
// console.log(typeof y); // boolean
// console.log(y.__proto__.__proto__); // [Object: null prototype] {}
// console.log(typeof z); // undefined
// // console.log(z.__proto__.__proto__); // error
// console.log(typeof a); // object
// // console.log(a.__proto__.__proto__); // error
// console.log(typeof b); // symbol
// console.log(b.__proto__.__proto__); // [Object: null prototype] {}
// console.log(typeof c); // string
// console.log(c.__proto__.__proto__); // [Object: null prototype] {}
// console.log(typeof d); // bigint
// console.log(d.__proto__.__proto__); // [Object: null prototype] {}
// console.log(typeof null); // object

let a = 10;
console.log(a);
var b = 20;
console.log(b);
