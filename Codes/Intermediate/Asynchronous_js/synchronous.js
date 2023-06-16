console.log("start");
for(let i = 0; i<10000000000; i++) {
    // some task.
}
console.log("task done");
console.log("end");

// OUTPUT :
// start
    // waits till the loop finishes, we can see the pause in console output.
// task done
// end