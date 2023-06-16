function fun(x, fn) {
    /**
     * x --> number
     * fn --> callback function
     */
    for(let i = 0; i<x; i++) {
        console.log(i);
    }
    fn();
}

fun(4, function log() {
    console.log("custom logger");
})
// OUTPUT
// 0
// 1
// 2
// 3
// custom logger

fun(5, function () {
    console.log("annonymous function");
})
// OUTPUT :
// 0
// 1
// 2
// 3
// 4
// annonymous function

function gun() {
    console.log("inside gun()");
}
fun(6, gun);
// OUTPUT :
// 0
// 1
// 2
// 3
// 4
// 5
// inside gun()

let g = function process() {
    console.log("inside g");
}
fun(4, g);
// OUTPUT :
// 0
// 1
// 2
// 3
// inside g

// fun(2, g());    // this is like : fun(2, undefined).   // TypeError: fn is not a function

// function mapper(x, function f() {})      // This is syntactically wrong. 
                    // we cannot write a function as a parameter in function definition/expression.