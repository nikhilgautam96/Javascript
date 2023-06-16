const p1 = new Promise((resolve, reject) => {
setTimeout(() => resolve("one"), 1000);
});
const p2 = new Promise((resolve, reject) => {
setTimeout(() => resolve("two"), 2000);
});
const p3 = new Promise((resolve, reject) => {
setTimeout(() => resolve("three"), 3000);
});
const p4 = new Promise((resolve, reject) => {
setTimeout(() => resolve("four"), 4000);
});
const p5 = new Promise((resolve, reject) => {
reject(new Error("reject"));
});

// Using .catch:
Promise.all([p1, p2, p3, p4, p5])
.then((values) => {
    console.log(values);
})
.catch((error) => {
    console.error(error.message);
});

// Logs :
// "reject"