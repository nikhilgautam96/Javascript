const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1_delayed_resolution"), 1000);
});
const p2 = new Promise((resolve, reject) => {
    reject(new Error("p2_immediate_rejection"));
});

Promise.all([p1.catch((error) => error), p2.catch((error) => error)])
.then((values) => {
    console.log(values[0]); // "p1_delayed_resolution"
    console.error(values[1]); // "Error: p2_immediate_rejection"
});
// LOGS :
// p1_delayed_resolution
// Error: p2_immediate_rejection
    // with stack trace.