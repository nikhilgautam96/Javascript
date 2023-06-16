function fun() {
    console.log(x);     // "undefined"
    var x = 10;         // 'x' is local to the function 'fun()'.
    console.log("x is : ", x);
    function test() {
        console.log("inside nested function : ", x); // 'x' is accessible here as well.
    }
    test();
}
fun();
// console.log(x);         // "ReferenceError: x is not defined"