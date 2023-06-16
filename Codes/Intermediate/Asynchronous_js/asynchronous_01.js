console.log("start");
setTimeout(function exec() {
    console.log("Task Done");
}, 5000);
console.log("end");
// OUTPUT :
// start
// end
// Task done  --> JS engine did not wait for the "setTimeout" operation to complete bcz it is a 
//                  feature of JS Runtime and not natively known to JS.