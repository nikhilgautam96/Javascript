const p = Promise.all([]); // Will be immediately resolved
const p2 = Promise.all([1337, "hi"]); // Non-promise values are ignored, but the evaluation is done asynchronously
console.log(p);
console.log(p2);
setTimeout(() => {
  console.log("the queue is now empty");
  console.log(p);
  console.log(p2);
});
// Logs:
// Promise { [] }
// Promise { <pending> }
// the queue is now empty
// Promise { [] }
// Promise { [ 1337, 'hi' ] }