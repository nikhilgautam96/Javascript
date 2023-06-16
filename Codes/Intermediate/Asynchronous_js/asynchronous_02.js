function process() {
    console.log("Start");
    setTimeout(function exec() {
        console.log("Executed Some Task 1");
    }, 3000);
    setTimeout(function exec() {
        console.log("Executed Some Task 2");
    }, 2000);
    for(let i = 0; i<10000000000; i++) {
        // some task.
    }
    setTimeout(function exec() {
        console.log("Executed Some Task 3");
    }, 1000);
    setTimeout(function exec() {
        console.log("Executed Some Task 4");
    }, 1000);
    console.log("End");
}

process();
console.log("TATA");
// OUTPUT :
// Start
// End
// TATA
// Executed Some Task 2
// Executed Some Task 1
// Executed Some Task 3
// Executed Some Task 4