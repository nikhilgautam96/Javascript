## why are we learning setTimeout & setInterval ?
- we are learning these to understand closures better. it is not necesssary but it helps in understanding the topic better.
- these two function we are not going to directly find in the official document bcz they are not part of the language.
- But we can still use it as it is part of the `Runtime`.

## SetTimeout :-
- It is a function that helps to execute some task, once, after certain timer.
eg :- we want to run a binary search algorithm after 5 mins on a document only once.
- **`syntax : `** setTimeout(taskCallback, timeInMillisecond).
- eg:-
```js
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
```

## SetInterval :-
- It is a function that helps to execute some task, again and again, after given interval.
eg :- we want to refresh a page after every 30 sec until we put a stop to it.
- **`syntax : `** setInterval(taskCallback, intervalTimeInMillisecond).
- eg:-
```js
let id = setInterval( function() {
    console.log("task done again.");
}, 3000);

setTimeout(function() {
    clearInterval(id);
}, 13000);

// OUTPUT :
// task done again.
// task done again.
// task done again.
// task done again.
```

***NOTE : to understand the above functions we need to understand the term `callbacks`.***

