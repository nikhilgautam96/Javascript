let arr = [1, 2, 3, 4, 5];
arr.map(function process(v, i) {
    /**
     * v --> the value/element of array.
     * i --> index of the passed element (count starts from 0).
     */
    console.log(v, i);
})
// OUTPUT :-
// 1 0
// 2 1
// 3 2
// 4 3
// 5 4

let x = arr.map(function process(v, i) {
    /**
     * v --> the value/element of array.
     * i --> index of the passed element (count starts from 0).
     */
    console.log(v, i);
    // by default it will return "undefined".
})
console.log(x);     // [ undefined, undefined, undefined, undefined, undefined ]

let y = arr.map(function process(v, i) {
    /**
     * v --> the value/element of array.
     * i --> index of the passed element (count starts from 0).
     */
    console.log(v, i);
    return v * v;
    // return "nikhil";     // [ 'nikhil', 'nikhil', 'nikhil', 'nikhil', 'nikhil' ]
})
console.log(y);      // [ 1, 4, 9, 16, 25 ]
console.log(arr);    // [ 1, 2, 3, 4, 5 ]