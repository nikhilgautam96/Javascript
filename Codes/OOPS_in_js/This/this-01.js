// var a = 10;
// let b = 20;
// function demo() {
//     this.name = 'nikhil';
//     this.age = '20';
//     console.log('demo function :', this);
//     return this;
// }
// console.log('--------------------------');
// demo();
// console.log(this);
// console.log(this.name, this.age);
// console.log('--------------------------');
// let x = demo();
// console.log(x);
// console.log(x.name, x.age);
// console.log('--------------------------');
// const obj = new demo();
// console.log(obj);
// console.log(obj.name, obj.age);

// class Demo {
//     constructor() {
//         this.mname = 'nikhil';
//         this.age = '21';
//     }
// }

// If the parent is function --> 'this' will point
// to the global object.
// If parent is an object it will point to the object.
// ARROW FUNCTION :
// It always points to the parent object.
// Whatever we write in js, everything is wrapped inside a IIFE
// function.

// (function () {
//     console.log('nikhil gautam');
// })();

// (function () {
//     function fun() {
//         console.log('hello world');
//     }
//     fun();
// })();

function fun() {
    console.log(this); // fun {}
}

const ob1 = new fun();

// const gun = () => {
//     console.log(this);
// };
// const ob2 = new gun(); // TypeError: gun is not a constructor

const run = function () {
    console.log(this);
};
const ob3 = new run(); // run {}
