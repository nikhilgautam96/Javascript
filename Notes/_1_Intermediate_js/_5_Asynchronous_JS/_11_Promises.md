# Promises :- 
- Promises are `special JS objects` that are also considered as `readibility enhancers`.
- They get immediately returned from a function setup to return a promise.
- They act as `placeholders` for the data that we hope to get back from some future task.
- we also attach the functionality that we want to defer until the future task is done.
- And promise automatically handles execution of this functionality.
- Promises do 2 things one inside JS and 1 outside JS.
    1. It signs up the process required to run in the runtime & gives a placeholder in js, which has a value property.
    2. 
- `A promise is an object that is used for the eventual results of a deferred (and possibly asynchronous) computation.`
- `Any promise object is in one three mutually exclusive states : fulfilled, rejected & pending.`
- `A promise is said to be settled/resolved if it is not pending, ie. it is either fulfilled or rejected.`
- `An unresolved promise is always in the pending state.`

## How promises work behind the scene :-
- The promise object we create has 4 major properties.
    1. `Status / State`
        - It shows current promise's state.
            1. `pending state`
            2. `fulfilled state`   : gives a notion of SUCCESS.
            3. `Rejected state`    : gives a notion of ERROR.
    2. `Value`
        - when status of the promise is pending, the value property is `undefined`.
        - The moment promise is resolved(status --> fulfilled/rejected), the value property is updated from undefined to the new value (this value we can consider as the `returned value / resolved value`).
        - so the value property acts as a placeholder till the time promise finishes.
    3. `onFullfillment`
        - This is an array, which contains functions(can be multiple as well) that we attach to our promise object.
        - to a promise object we can attach some functions using `.then()` method.
        - when the value property is updated from undefined, to a new value, JS gives chance to these attached functions one by one with the value property as their argument (if there is no piece of code left in call stack and in the global code).
    4. `onReject`
- ![promise-lifecycle](./Images/Screenshot%202023-06-08%20at%204.38.37%20PM.png)
- When do we consider a promise fulfilled ?
    - when call the resolve() function, we consider it fulfilled.
- when do we call a promise rejected ?
    - we consider it rejected if we call reject() function.
        
## 1. How to create a promise :-
- To create a promise call the promise constructor.
- The promise constructor takes a callback as an argument.
- The callback passed expets 2 arguments `(resolve, reject)`.
- inside the constructor write your code logic.
- if we want to return something on SUCCESS, then call the resolve function with whatever value you want to return.
- eg :-
```js
function fetchData(url) {
    return new Promise(function(resolve, reject) {
        console.log("Starting fetching from url ", url);
        setTimeout(function process() {
            let data = "Dummy data";
            console.log("completed fetching the data");
            // somehow e need to return the data? - TODO
            resolve(data);  // return some data on SUCCESS.
        });
    });
}
```

## 2. How to consume a promise :-
- In consuming a promise, we avoid Inversion of control.
- whenever we call a function that returns a promise, we get a promise object that can be stored in any variable just like any other JS object.
- Q. will js wait for the promise to be resolved if it involves any asynchronous piece of code ?
    - JS will wait only if promise involves a synchronous piece of code, otherwise not.
    - ie. if we have `setTimeout()` in the callback provided to the promise constructor, it will be sent to `runtime` and execution of global code will continue.
    - but if we have suppose very long loop in the callback then js will wait till the loop finishes then it will continue with code execution inside the promise callback.
- Technically when promise gets resolved we execute some functions.
- we can use `.then()` function on the promise object, to `bind/register` the functions we want to execute once we fulfill a promise.
- The `.then()` function will only be called when the `promise is fulfilled`. 
    - eg :-
    ```js
    function demo(val) {
        return new Promise(function (resolve, reject) {
            console.log("Promise started");
            setTimeout(function process() {
                console.log("completed timer");
                if(val%2 == 0) {
                    // even number
                    // resolve("Even");
                } else {
                    // odd number
                    // reject("ODD");
                }
            }, 5000);
            console.log("Somewhere");
        });
    }
    x = demo(4);
    x.then(function process() {
        // This `.then()` function will not be called as we have commented the `resolve()` and `reject()`
        // so the promise is never fullfilled, hence .then() will never be called.
        console.log(x);
        // x.resolve("Hi");     // This method can not be used with any promise, instead only used as
                                // Promise.resolve("nikhil");
        console.log(x);
    })
    y = Promise.resolve("Nikhil");
    console.log("printing - ", y);

    // OUTPUT :
    // Promise started
    // Somewhere
    // printing -  Promise { 'Nikhil' }
    // completed timer
    ```
- The `.then()` function takes callback function as an argument that we want to execute after promise fulfills, and the `argument function` takes `value` property as parameter.
- The `.then()` function itself returns a new promise by default, with the `[[PromiseResult]]: undefined`. 
- If we return nothing from the callback function then a `default promise is created and returned with value undefined` and it will look something like;
```js
// Promise {<fulfilled>: undefined}
//   [[Prototype]]: Promise
//   [[PromiseState]]: "fulfilled"
//   [[PromiseResult]]: undefined
```
- If we return a value like below then again a new promise is created and this time the new promise will look like below;
```js
x = downloadPromise
.then(function processDownload(dataValue) {
    console.log("Download promise fulfilled with value", dataValue);
    return "Nikhil";
});
// Promise {<fulfilled>: 'Nikhil'}
//   [[Prototype]]: Promise
//   [[PromiseState]]: "fulfilled"
//   [[PromiseResult]]: 'Nikhil'
```
- We can also return a promise itself so no new promise gets created, like below;
```js
y = x.then(function processWrite(value) {
    // whatever is used as argument in 'resolve()' function is registered as a 
    // [[PromiseResult]] : "result.txt" in the promise object returned by '.then()'.
    // now, since we are calling the 'writeFile()` and it returns a promise
    // so technically the same promise is returned by the `.then()` function as well.
    console.log(x);
    return writeFile(value);
});
// Promise {<fulfilled>: 'result.txt'}
//   [[Prototype]]: Promise
//   [[PromiseState]]: "fulfilled"
//   [[PromiseResult]]: 'result.txt'
```
- eg :-
```js
let downloadPromise = fetchData("www.google.com");
x = downloadPromise
.then(function processDownload(dataValue) {
    console.log("Download promise fulfilled");
    return "Nikhil";
});

x.then(function process(value) {
    console.log("x promise value is : ", value);      // 'x promise value is :  Nikhil'
})
```

## What `resolve(value)` does is :-
- It changes the `state` of promise object from `pending` to `resolved`.
- It will update the `value` property from `undefined` to `value`.
- It is not the end statement inside a block unlike return statement.
- eg :-
```js
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Starting fetching from url ", url);
        setTimeout(function processDownloading() {
            let data = "Dummy data";
            console.log("completed fetching the data");
            // somehow we need to return the data? - TODO
            resolve(data);  // return some data on SUCCESS.
            console.log("hello"); // --> this gets printed eventhough promise is resolved.
            // resolve("Nikhil");   --> these lines will never get executed as promise 
            // resolve(12345);      --> is resolved only once.
        }, 4000);
    });
}
```

## How to append/register more than 1 function/task to the onFulfillment array :-
- eg 1:-
```js
let x = Promise.resolve("Nikhil");
console.log("Start");
x.then(function exec_1(value) {
    console.log("1 -- ", value);
    return "Gautam 1";
})
.then(function exec_2(value) {
    console.log("2 -- ", value);
    return "Gautam 2";
});
x.then(function exec_3(value) {
    console.log("3 -- ", value);
    return "Gautam 3";
});
console.log("End");
// OUTPUT :
// Start
// End
// 1 --  Nikhil
// 3 --  Nikhil
// 2 --  Gautam 1

// Explaination :- 
// During the execution phase :-
// pointer sees --> Promise 'x' is resolved.
// pointer logs --> "Start"
// pointer sees --> .then(callback exec_1()) is registered in onfullfillment array of 'x'
//     It will be registered and since 'x' is already resolved 'exec_1()' will be queued in microtask queue.
// pointer sees --> another callback exec_2() is to be registered in onfullfillment array of promise returned by .then() of 'x'.
//     since the x.then() has not been executed yet so no promise is returned yet so this registration task is still pending.
// pointer moves ahead --> sine event loop constantly checks if global code is exhausted.
// pointer sees --> another .then(callback exec_3()) is registered in onfullfillment array of 'x'
//     It will be registered and since 'x' is already resolved 'exec_3()' will be queued in microtask queue.
// Microtask Queue looks like --> [exec_1(), exec_2()]
// Pointer moves ahead and logs --> "End"
// event loop checks global code is exhausted, call stack empty, microtask queue has exec_1() at top
// exec_1() is executed a new promise is returned.
// pointer then registers the exec_2() to the promise returned by x.then().
//     since a fullfilled promise is returned so the the exec_2() is immediately sent to microtask queue.
// Microtask queue --> [exec_3(), exec_2()].
// exec_3() is executed.
// finally exec_2() is executed.
```
- eg 2:-
```js
// Here we are actually testing how to append/register more than 1 function/task 
// to the onFulfillment array.
function fun() {
    return new Promise(function f(res, rej) {
        setTimeout(function process() {
            console.log("resolved");
            res(1234);
        }, 5000);
    })
}

let x = fun();
x.then(function exec_1(value) {
    console.log("value is :", value);
    return 100;
})
.then(function exec(value) {
    console.log(value);
})
.then(function exec(value) {
    console.log("Hi 1");
});

x.then(function exec_2(value) {
    console.log("yo the value is :", value);
    return 200;
})
.then(function exec(value) {
    console.log(value);
})
.then(function exec(value) {
    console.log("Hi 2");
});

x.then(function exec_3(value) {
    console.log("Hi value is :", value);
    return 300;
})
.then(function exec(value) {
    console.log(value);
})
.then(function exec(value) {
    console.log("Hi 3");
});
// OUTPUT :
// resolved
// value is : 1234
// yo the value is : 1234
// Hi value is : 1234
// 100
// 200
// 300
// Hi 1
// Hi 2
// Hi 3
```

## Promise Chaining :-

## Promise Hell :-
