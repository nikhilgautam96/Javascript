// let counter = {
//     count: 0,
//     increment: function () {
//         console.log(counter.count + 2);
//     },
// };
// counter.increment();

// function fun() {
//     console.log(this); // Object [global]
// }
// let x = fun();
// console.log(this.name); // undefined
// console.log(this); // {}

// Inside a function 'this' will point to the immediate parent.
// if immediate parent is an object --> point to object.
// if immediate parent is an function(arrow|annonymous|named|IIFE) --> point to the global Object.

// (function () {
//     console.log(this); // Object [global]
//     function fun() {
//         console.log(this); // Object [global]
//     }
//     fun();
// })();

var obj = {
    x: this,
    y: 20,
    z: function () {
        let obj2 = {
            a: this,
            b: 40,
            c: () => {
                console.log('------ inside c ------');
                let obj3 = {
                    m: this,
                    n: 20,
                    o: {
                        doom: 121,
                        child: this,
                    },
                };
                console.log(obj3);
            },
            d: function () {
                console.log('------ inside d ------');
                let obj3 = {
                    m: this,
                    n: 20,
                    o: {
                        doom: 121,
                        child: this,
                    },
                };
                console.log(obj3);
            },
        };
        console.log(obj2);
        obj2.c();
        obj2.d();
    },
    ray: {
        p: this,
        q: 66,
        r: {
            s: this,
            t: 88,
        },
    },
};
console.log(obj);
obj.z();

// let obj = {
//     x: 'dj',
//     y: 'aewo',
//     z: function fun() {
//         console.log(this);
//         // { x: 'dj', y: 'aewo', z: [Function: fun] }
//         const obj2 = {
//             x1: 'dj',
//             y1: 'aewo',
//             z1: function gun() {
//                 console.log(this);
//                 // { x1: 'dj', y1: 'aewo', z1: [Function: gun] }
//             },
//         };
//         obj2.z1();
//     },
// };
// obj.z();

// let obj = {
//     x: 'dj',
//     y: 'aewo',
//     z: () => {
//         console.log(this);
//         const obj2 = {
//             x1: 'dj',
//             y1: 'aewo',
//             z1: () => {
//                 console.log(this);
//             },
//         };
//         obj2.z1();
//     },
// };
// obj.z();

// function fun() {
//     console.log('fun ==> ', this); // Object [global]
//     function gun() {
//         console.log('gun ==> ', this); // Object [global]
//         function run() {
//             console.log('run ==> ', this); // Object [global]
//             const obj = {
//                 x: 100,
//                 y: 200,
//                 z: function () {
//                     console.log('z ==>', this);
//                     // { x: 100, y: 200, z: [Function: z] }
//                     function got() {
//                         console.log('got ==> ', this); // Object [global]
//                         function pot() {
//                             console.log('pot ==> ', this); // Object [global]
//                             (function () {
//                                 console.log('IIFE ==> ', this); // Object [global]
//                             })();
//                             const obj2 = {
//                                 c: function () {
//                                     console.log('obj2.c ==> ', this);
//                                     // { c: [Function: c], d: [Function: d], e: [Function: outer] }
//                                 },
//                                 d: function () {
//                                     return function () {
//                                         console.log('d-returned ==> ', this); // Object [global]
//                                     };
//                                 },
//                                 e: function outer() {
//                                     console.log('outer ==> ', this);
//                                     // outer ==>  { c: [Function: c], d: [Function: d], e: [Function: outer] }
//                                     return function inner() {
//                                         console.log('inner ==> ', this); // Object [global]
//                                         const obj3 = {
//                                             m: function obj3Inner() {
//                                                 console.log(
//                                                     'obj3Inner ==> ',
//                                                     this
//                                                 );
//                                                 // { m: [Function: obj3Inner] }
//                                             },
//                                         };
//                                         obj3.m();
//                                     };
//                                 },
//                             };
//                             obj2.c();
//                             obj2.d()();
//                             const p = obj2.e();
//                             p();
//                         }
//                         pot();
//                     }
//                     got();
//                 },
//             };
//             obj.z();
//         }
//         run();
//     }
//     gun();
// }
// fun();

// function demo1() {
//     return {
//         x: 11,
//         y: 22,
//         z: function () {
//             let k = 10;
//             console.log('z ==> ', this); // { x: 11, y: 22, z: [Function: z], temp: undefined }
//             (function () {
//                 console.log('IIFE_1 ==> ', this); // Object [global]
//             })();
//         },
//         temp: (function () {
//             console.log('temp IIFE ==> ', this); // Object [global]
//         })(),
//     };
// }
// let p = demo1();
// p.z();
// console.log('Global code ==> ', this); // {}

// const window_Demo = {
//     globalCode: (function () {
//         console.log('I am a IIFE that wraps the entire global code.');
//         console.log('globalCode IIFE ==> ', this); // Object [global]
//     })(),
// };

// Inside an function --> IIFE(this) points to ==> global
// Inside an object --> IIFE(this) points to ==> global

// function fun() {
//     let x = 10;
//     console.log('fun');
//     (function () {
//         console.log('fun-IIFE', this); // Object [global]
//     })();
//     let obj = {
//         k: 55,
//         l: (function () {
//             console.log('fun-obj-IIFE', this); // Object [global]
//         })(),
//     };
// }
// fun();
