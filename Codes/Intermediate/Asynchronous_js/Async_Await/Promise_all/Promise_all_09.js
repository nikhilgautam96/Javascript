// Promise.all() will reject when any of the input's promises rejects, 
// with this first rejection reason.
const p1 = Promise.resolve("1234");
const p2 = Promise.reject("Random Error");
const p3 = Promise.resolve("Nikhil");

// Approach 1
Promise.all([p1.catch((error) => error), p2.catch((error) => error), p3.catch((error) => error)])
.then((values) => {
    console.log(values[0]);
    console.error(values[1]);
    console.log(values[2]);
})
// LOGS :
// 1234
// Random Error
// Nikhil

// Approach 2
Promise.all([p1, p2, p3])
.then((values) => {
    console.log(values[0]);
    console.error(values[1]);
    console.log(values[2]);
})
.catch((err) => console.log(err));
// LOGS :
// Random Error