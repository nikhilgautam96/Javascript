function fun() {
    console.log("fun called");
}

function gun(fn) {
    console.log("inside gun()");
    fn();
    console.log("leaving gun()");
}

fun()

console.log("----------------xxxxxxx----------------");

gun(function () {       // this is "function expression".
    console.log("an annonymous function passed as an argument.");
});

console.log("----------------xxxxxxx----------------");

gun(fun);