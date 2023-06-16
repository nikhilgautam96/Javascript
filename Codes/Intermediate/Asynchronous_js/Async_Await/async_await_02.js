async function fun() {
    console.log("inside async function.");
    return 1234;
}
console.log("Start");
x = fun();
console.log(x);
console.log("End");
// OUTPUT :
// Start
// inside async function.
// Promise { 1234 }
// End
