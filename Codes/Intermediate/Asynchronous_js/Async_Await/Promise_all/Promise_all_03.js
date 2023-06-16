// All values are non-promises, so the returned promise gets fulfilled
const p = Promise.all([1, 2, 3]);

// The only input promise is already fulfilled,
// so the returned promise gets fulfilled
const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);

// One (and the only) input promise is rejected,
// so the returned promise gets rejected
const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);     // throws error.

// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
  console.log(p);           // Promise { [ 1, 2, 3 ] }
  console.log(p2);          // Promise { [ 1, 2, 3, 444 ] }
  console.log(p3);
});

// Logs:
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }