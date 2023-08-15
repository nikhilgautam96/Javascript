function fun() {
    console.log(x); // "undefined"
    var x = 10; // 'x' is local to the function 'fun()'.
    console.log('x is : ', x);
    function test() {
        var y = 20;
        console.log('inside nested function : ', x, y); // 'x' is accessible here as well.
    }
    test();
    console.log('outside nested function : ', x, y); // ReferenceError: y is not defined
}
fun();
// console.log(x);         // "ReferenceError: x is not defined"
