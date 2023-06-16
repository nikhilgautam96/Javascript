function fun() {
    console.log("fun called");
    console.trace(); // whereever we put "trace()", it will only print till that function.
}

function gun(fn) {
    console.log("inside gun()");
    fn();
    console.log("leaving gun()");
    // console.trace();
}

// fun();

// gun(function () {       // this is "function expression".
//     console.log("an annonymous function passed as an argument.");
//     console.trace();
    // Trace
    //     at /Users/nikhil_gautam/Desktop/P-11/Javascript/Codes/FunctionExpression/debugAnnonymousFunc.js:17:13
    //     at gun (/Users/nikhil_gautam/Desktop/P-11/Javascript/Codes/FunctionExpression/debugAnnonymousFunc.js:8:5)
    //     at Object.<anonymous> (/Users/nikhil_gautam/Desktop/P-11/Javascript/Codes/FunctionExpression/debugAnnonymousFunc.js:15:1)
    //     at Module._compile (node:internal/modules/cjs/loader:1126:14)
    //     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    //     at Module.load (node:internal/modules/cjs/loader:1004:32)
    //     at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    //     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    //     at node:internal/main/run_main_module:17:47
    // leaving gun()
// });

// gun(fun);

// gun(function logger() {       // this is "function expression".
//     console.log("an annonymous function passed as an argument.");
//     console.trace();
    // Trace
    //     at logger (/Users/nikhil_gautam/Desktop/P-11/Javascript/Codes/FunctionExpression/debugAnnonymousFunc.js:23:13)
    //     at gun (/Users/nikhil_gautam/Desktop/P-11/Javascript/Codes/FunctionExpression/debugAnnonymousFunc.js:8:5)
    //     at Object.<anonymous> (/Users/nikhil_gautam/Desktop/P-11/Javascript/Codes/FunctionExpression/debugAnnonymousFunc.js:21:1)
    //     at Module._compile (node:internal/modules/cjs/loader:1126:14)
    //     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    //     at Module.load (node:internal/modules/cjs/loader:1004:32)
    //     at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    //     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    //     at node:internal/main/run_main_module:17:47
    // leaving gun()
// });