// SET 1 :
// console.log(this); // {} | Window' object
// this.a = 20;
// console.log(this, this.a); // {a: 20}, 20 | Window' object, 20

// SET 2 :
// function fun() {
//     console.log('fun', this); // Object [global] | Window' object
// }
// fun();
// const gun = () => {
//     console.log('gun', this); // {} | Window' object
// };
// gun();
// (function () {
//     console.log('IIFE', this); // Object [global] | Window' object
// })();
// const anonymous = function () {
//     console.log('anonymous', this); // Object [global] | Window' object
// };
// anonymous();

// SET 3 :
// const user = {
//     name: 'nikhil',
//     age: 21,
//     getDetails() {
//         // normal function always points to immediate parent (object | function).
//         console.log('getDetails|==>', this); // user {..}
//         const nestedArrow1 = () => {
//             // arrow function always points to immediate parent function.
//             console.log('nestedArrow1|==>', this); // user {..}
//         };
//         nestedArrow1();
//         function nestedFun() {
//             console.log('nestedFun|==>', this); // Object [global] | Window' object
//         }
//         nestedFun();
//     },
//     getArrowDetails: () => {
//         console.log('getArrowDetails|==>', this); // {} | Window' object
//         const nestedArrow2 = () => {
//             console.log('nestedArrow2|==>', this); // {} | Window' object
//         };
//         nestedArrow2();
//     },
//     childObj: {
//         newName: 'niku',
//         getMoreDetails() {
//             console.log('getMoreDetails|==>', this); // childObj {...}
//             const nestedArrow3 = () => {
//                 console.log('nestedArrow3|==>', this); // childObj {...}
//             };
//             nestedArrow3();
//         },
//         getMoreArrowDetails: () => {
//             console.log('getMoreArrowDetails|==>', this); // {} | Window' object
//             const nestedArrow4 = () => {
//                 console.log('nestedArrow4|==>', this); // {} | Window' object
//             };
//             nestedArrow4();
//         },
//     },
// };
// user.getDetails();
// user.getArrowDetails();
// user.childObj.getMoreDetails();
// user.childObj.getMoreArrowDetails();

// // SET 4 :
// var length = 4;
// function callback() {
//     // 'Object [global], undefined' | 'Window object, 4'
//     console.log(this, this.length);
// }
// const obj = {
//     length: 5,
//     method(fn) {
//         fn();
//     },
// };
// obj.method(callback);

// SET 5 :
// let obj = {
//     name: 'nikhil',
//     fun() {
//         console.log('fun', this); // obj {...}
//     },
//     gun: function () {
//         console.log('gun', this);
//     },
//     arrow: () => {
//         console.log('arrow', this);
//     },
//     IIFE: (function () {
//         console.log('IIFE', this);
//     })(),
// };
// obj.fun();
// obj.gun();
// obj.arrow();

// let obj = {
//     name: 'nikhil',
//     fun() {
//         console.log('fun', this); // obj {...}
//         function fun() {
//             console.log('fun-nested', this); // Window
//         }
//         const gun = function () {
//             console.log('gun-nested', this); // Window
//         };
//         const arrow = () => {
//             console.log('arrow-nested', this); // obj {...}
//         };
//         const IIFE = (function () {
//             console.log('IIFE-nested', this); // Window
//         })();

//         fun();
//         gun();
//         arrow();
//     },
//     // gun: function () {
//     //     console.log('gun', this);
//     // },
//     // arrow: () => {
//     //     console.log('arrow', this);
//     // },
//     // IIFE: (function () {
//     //     console.log('IIFE', this);
//     // })(),
// };
// obj.fun();
// // obj.gun();
// // obj.arrow();

// SET 6 :
// let obj = {
//     name: 'nikhil',
//     prop: this,
//     nestedObj: {
//         nestedProp: this,
//     },
// };
// console.log(obj.prop);
// console.log(obj.nestedObj.nestedProp);

// SET 7 :
// `this` using new keyword :
// function fun() {
//     this.a = 10;
//     this.b = 20;
//     console.log(this); // fun { a: 10, b: 20 }
// }
// const funObj = new fun();

// const gun = function () {
//     this.a = 10;
//     this.b = 20;
//     console.log(this); // gun { a: 10, b: 20 }
// };
// const gunObj = new gun();

// class User {
//     static hobby = 'football';
//     constructor(n) {
//         this.name = n;
//         this.age = 21;
//     }
//     getUserDetails() {
//         console.log(this); // User { name: 'Nikhil', age: 21 }
//     }
// }
// const userObj = new User('Nikhil');
// userObj.getUserDetails();
// console.log(userObj.hobby, ' ', User.hobby); // undefined   football
// console.log(User);
