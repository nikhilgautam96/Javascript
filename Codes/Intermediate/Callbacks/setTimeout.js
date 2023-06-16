// console.log("start");
// setTimeout(function execute() {
//     console.log("task completed");
// }, 7000);
// console.log("end");
// OUTPUT :
// start
// end
// task completed

// let id1 = setTimeout(function execute() {
//     console.log("task completed 1");
// }, 7000);

// let id2 = setTimeout(function execute() {
//     console.log("task completed 2");
// }, 5000);
// OUTPUT :
// task completed 2
// task completed 1

let id1 = setTimeout(function execute1() {
    console.log("task completed 1");
}, 7000);

let id2 = setTimeout(function execute2() {
    console.log("task completed 2");
    clearTimeout(id1);
}, 5000);
// OUTPUT :
// task completed 2