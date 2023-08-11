// let fname = 'Nikhil';
// var lname = 'gautam';
// const age = 21;

// let obj1 = {
//     a: 10,
//     b: 20,
//     c: () => {
//         console.log('c ==>', this); // c ==> {}
//     },
//     d: () => {
//         let tempD = 55;
//         return function () {
//             console.log('d-returned ==>', this); // Object [global]
//         };
//     },
//     e: function demo() {
//         console.log('demo ==>', this);
//         // demo ==> {
//         //     a: 10,
//         //     b: 20,
//         //     c: [Function: c],
//         //     d: [Function: d],
//         //     e: [Function: demo],
//         //     f: [Function: f]
//         //   }
//         return () => {
//             console.log('demo-returned-arrow ==>', this);
//             // demo-returned-arrow ==> {
//             //     a: 10,
//             //     b: 20,
//             //     c: [Function: c],
//             //     d: [Function: d],
//             //     e: [Function: demo],
//             //     f: [Function: f]
//             // }
//         };
//     },
//     f: function () {
//         let tempF = 22;
//         return {
//             fx: 44,
//             fy: 55,
//             fz: () => {
//                 console.log('f-obj-returned-arrow ==>', this);
//                 // f-obj-returned-arrow ==> {
//                 //     a: 10,
//                 //     b: 20,
//                 //     c: [Function: c],
//                 //     d: [Function: d],
//                 //     e: [Function: demo],
//                 //     f: [Function: f]
//                 // }
//             },
//         };
//     },
//     g: function () {
//         let tempG = 77;
//         let objG = {
//             ga: 44,
//             gb: 55,
//             gc: () => {
//                 console.log('g-objG-arrow ==>', this);
//                 // g-objG-arrow ==> {
//                 //     a: 10,
//                 //     b: 20,
//                 //     c: [Function: c],
//                 //     d: [Function: d],
//                 //     e: [Function: demo],
//                 //     f: [Function: f],
//                 //     g: [Function: g]
//                 // }
//             },
//             gd: {
//                 nga: 12,
//                 ngb: 21,
//                 ngc: () => {
//                     console.log('gd-ngc-arrow ==>', this);
//                     // gd-ngc-arrow ==> {
//                     //     a: 10,
//                     //     b: 20,
//                     //     c: [Function: c],
//                     //     d: [Function: d],
//                     //     e: [Function: demo],
//                     //     f: [Function: f],
//                     //     g: [Function: g]
//                     // }
//                 },
//                 ngd: function () {
//                     console.log('gd-ngd ==>', this);
//                     // gd-ngd ==> {
//                     //     nga: 12,
//                     //     ngb: 21,
//                     //     ngc: [Function: ngc],
//                     //     ngd: [Function: ngd],
//                     //     nge: [Function: nge]
//                     // }
//                     const t = () => {
//                         console.log('gd-ngd-arrow-t ==>', this);
//                         // gd-ngd-arrow-t ==> {
//                         //     nga: 12,
//                         //     ngb: 21,
//                         //     ngc: [Function: ngc],
//                         //     ngd: [Function: ngd],
//                         //     nge: [Function: nge]
//                         // }
//                     };
//                     t();
//                 },
//                 nge: function () {
//                     return () => {
//                         console.log('gd-nge-arrow-returned ==>', this);
//                         // gd-nge-arrow-returned ==> {
//                         //     nga: 12,
//                         //     ngb: 21,
//                         //     ngc: [Function: ngc],
//                         //     ngd: [Function: ngd],
//                         //     nge: [Function: nge]
//                         // }
//                     };
//                 },
//             },
//         };
//         // objG.gc();
//         objG.gd.ngd();
//     },
// };
// obj1.g();

// function fun() {
//     let a = 10;
//     let b = 20;
//     console.log(this); // Object [global]
//     const temp = () => {
//         console.log(this); // Object [global]
//         const ob2 = {
//             x2: 50,
//             y2: () => {
//                 console.log('jhghgj', this); // Object [global]
//                 // temp();
//             },
//         };
//         ob2.y2();
//     };
//     const ob1 = {
//         x: 50,
//         y: () => {
//             console.log(this); // Object [global]
//             // temp();
//         },
//     };
//     temp();
//     ob1.y();
// }
// fun();
