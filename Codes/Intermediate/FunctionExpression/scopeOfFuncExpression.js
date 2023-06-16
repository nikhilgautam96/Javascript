console.log(typeof x);      // undefined
// console.log(x());        // TypeError: x is not a function

var x = function gun() {
    // scope of function "gun()" is in the scope of 'x'.
    console.log("inside gun");
}
console.log(x(), typeof x);
// scope of 'x' is global.
// gun();      // ReferenceError: gun is not defined