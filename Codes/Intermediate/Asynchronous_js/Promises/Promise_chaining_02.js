let x = Promise.resolve("Nikhil");
console.log("Start");
x.then(function exec_1(value) {
    console.log("1 -- ", value);
    return "Gautam 1";
})
.then(function exec_2(value) {
    console.log("2 -- ", value);
    return "Gautam 2";
});
x.then(function exec_3(value) {
    console.log("3 -- ", value);
    return "Gautam 3";
});
console.log("End");
// OUTPUT :
// Start
// End
// 1 --  Nikhil
// 3 --  Nikhil
// 2 --  Gautam 1

// Explaination :- 
// During the execution phase :-
// pointer sees --> Promise 'x' is resolved.
// pointer logs --> "Start"
// pointer sees --> .then(callback exec_1()) is registered in onfullfillment array of 'x'
//     It will be registered and since 'x' is already resolved 'exec_1()' will be queued in microtask queue.
// pointer sees --> another callback exec_2() is to be registered in onfullfillment array of promise returned by .then() of 'x'.
//     since the x.then() has not been executed yet so no promise is returned yet so this registration task is still pending.
// pointer moves ahead --> sine event loop constantly checks if global code is exhausted.
// pointer sees --> another .then(callback exec_3()) is registered in onfullfillment array of 'x'
//     It will be registered and since 'x' is already resolved 'exec_3()' will be queued in microtask queue.
// Microtask Queue looks like --> [exec_1(), exec_2()]
// Pointer moves ahead and logs --> "End"
// event loop checks global code is exhausted, call stack empty, microtask queue has exec_1() at top
// exec_1() is executed a new promise is returned.
// pointer then registers the exec_2() to the promise returned by x.then().
//     since a fullfilled promise is returned so the the exec_2() is immediately sent to microtask queue.
// Microtask queue --> [exec_3(), exec_2()].
// exec_3() is executed.
// finally exec_2() is executed.
