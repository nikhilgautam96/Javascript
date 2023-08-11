// 'this' incase of arrow functions,
// looks for its parent function and the moment it finds a parent function, it point to the this of that parent function.
// ie:- {
// 1. If parent point to 'Global' it will point to 'Global. |
// 2. If parent points to an 'object' it will pint to same 'object'.|
// }
// if no parent found, means global parent. Hence, it will point to --> '{}' (bcz this is what this in global points to.)

// const obj = {
//     a: 10,
//     b: 20,
//     c: function () {
//         console.log('c -->', this, this.a, this.b);
//         return function () {
//             const k = () => {
//                 console.log('k -->', this, this.a, this.b);
//                 const l = () => {
//                     console.log('l -->', this, this.a, this.b);
//                 };
//                 l();
//                 const ob1 = {
//                     fname: 'nik',
//                     lname: 'gtm',
//                     func: () => {
//                         console.log('func -->', this, this.a, this.b);
//                     },
//                     zunc: function () {
//                         this.func();
//                     },
//                 };
//                 ob1.zunc();
//             };
//             k();
//         };
//     },
//     d: () => {
//         console.log(this, this.a, this.b);
//     },
// };
// obj.c()();
// obj.d();

// const kattappa = () => {
//     console.log('no parent', this, typeof this); // '{}'
// };
// kattappa();
