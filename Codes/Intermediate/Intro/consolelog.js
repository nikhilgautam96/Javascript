console.log("Hey this is a new line.");
console.log(12);
console.log(13, true, null, "this is multiple values printed in one single line using ',' seperation");
console.log(null);


// This works in nodeJs
process.stdout.write("hello");
process.stdout.write(" world");

// Miscellaneous :-
// all the "functions" are evaluated first in left to right order,
// then all values printed including the returned values, in left to right order.
function func_1(x) {
    console.log(x + 10);
    return x * 10;
}
function func_2(x) {
    console.log(x + 10);
}
console.log("calling 1st function", func_1(2), "\ndone", func_2(11), func_1(5), func_2(3));
console.log("calling 2nd function", func_2(4));

// console.log() ==> returns (undefined), not the string "undefiined" but just (undefined).
console.log(typeof console.log(10));
console.log(typeof typeof console.log(10));