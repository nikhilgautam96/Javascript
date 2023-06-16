function demo(val) {
    return new Promise(function (resolve, reject) {
        console.log("Promise started");
        setTimeout(function process() {
            console.log("completed timer");
            if(val%2 == 0) {
                // even number
                // resolve("Even");
            } else {
                // odd number
                // reject("ODD");
            }
        }, 5000);
        console.log("Somewhere");
    });
}
x = demo(4);
x.then(function process() {
    // This `.then()` function will not be called as we have commented the `resolve()` and `reject()`
    // so the promise is never fullfilled, hence .then() will never be called.
    console.log(x);
    // x.resolve("Hi");     // This method can not be used with any promise, instead only used as
                            // Promise.resolve("nikhil");
    console.log(x);
})
y = Promise.resolve("Nikhil");
console.log("printing - ", y);

// OUTPUT :
// Promise started
// Somewhere
// printing -  Promise { 'Nikhil' }
// completed timer