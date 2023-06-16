function dummyPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(function process () {
            resolve("Timer's Promise");
        }, 8000);
    });
}
console.log("start of file");

setTimeout(function timer1() {
    console.log("Timer 1 done");
    let y = dummyPromise();
    y.then(function promiseY(value) {
        console.log("Whose promise ?", value);
    });
}, 0);

let x = Promise.resolve("Sanket's promise");
x.then(function processPromise(value) {
    console.log("Whose promise ?", value);
});

setTimeout(function timer2() {
    console.log("Timer 2 done");
}, 0);

console.log("End of the file");
// OUTPUT :
// start of file
// End of the file
// Whose promise ? Sanket's promise
// Timer 1 done
// Timer 2 done
// Whose promise ? Timer's Promise