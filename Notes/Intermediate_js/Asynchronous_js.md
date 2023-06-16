## How JS handles asynchronous operations :-
- JS is a `single threaded language`.
- JS by default only supports `synchronous` code execution. It means js execution pointer waits till a particular line of code / operation is executed then only it will move ahead to execute the next piece of code.
    - eg :-
    ```js
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
    ```
    - ***NOTE : The above property of synchronous code execution only works for operations natively known to javascript. like (for loop, etc.)***
    ```js
    console.log("start");
    setTimeout(function exec() {
        console.log("Task Done");
    }, 5000);
    console.log("end");
    // OUTPUT :
    // start
    // end
    // Task done  --> JS engine did not wait for the "setTimeout" operation to complete bcz it is a 
    //                  feature of JS Runtime and not natively known to JS.
    ```
    - *** NOTE : console.log is not native to js : *** 
        - it tries to make us feel as synchronous as possible in recent runtime versions. but it actually depends on runtime to runtime that is is synchronous or asynchronous.
        - in nodeJs console.log uses `process.stdout or process.stderr` for console.log() and console.err() operations.
- In JavaScript, asynchronous operations allow you to execute tasks without blocking the execution of other code. They are essential for handling time-consuming operations, such as network requests or file I/O, in a non-blocking manner, ensuring that the application remains responsive and doesn't freeze during these operations.
- There are several mechanisms for handling asynchronous operations in JavaScript:
    1. `Callbacks`
    2. `Promises`
        - Promises are special JS objects that are also considered as readibility enhancers.
        - They get immediately returned from a function setup to return a promise.
        - They act as `placeholders` for the data that we hope to get back from some future task.
        - we also attach the functionality that we want to defer until the future task is done.
        - And promise automatically handles execution of this functionality.
    3. `async/await`

## JS Runtime :-
- Initially js was developed to run only in browser. browser runtime gives some additional functionalities to the language like DOM Api, setTimeout, setInterval, etc. these features are not native to js.
- After 2009 `nodeJs` came as another runtime for js that has again some additional functionalities not native to js like Api's around filesystem, process, etc.

## How JS handles the Runtime functionalities :-
- Js has;
    1. `call stack`.
    2. `event queue`.
    3. `event loop`.
    4. `Runtime`.
    5. `Microtask queue`.
- every time we run a code, 
    - whenever we call a function it allocates some space in call stack.
    - js will execute the code and it sends the Runtime functionalities like setTimeout, etc to the js Runtime.
    - once a runtime task is complete it is then sent to the `event queue`. In event queue we receive `callbacks`.
    - the `event loop` then checks for certain `condition` on regular basis to send the tasks from `event queue` to the `call stack`.
    - condition :
        1. The call stack is empty.
        2. The global code is complete and nothing is left to execute.
        3. The microtask queue is also empty. Microtask queue is given higher priority than the event queue.
- eg :-
```js
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
```

## `Async/await` :-
- we can declare a function as ***`async`***.
- If you declare a function async, it does the following :-
    1. It allows the use of ***`await`*** keyword.
    2. If you declare a function async, `it allows consumption of a promise using await`.
    3. An async function always converts your return value to a promise.
- ***An `async` function is a function declared with the async keyword, and the `await` keyword is permistted within it. The async and await keywords enable asynchronous, promise-based behaviour to be written in a cleaner style, avoiding the need to explicitly configure promise chains.***
- It is not mandatory to use asynchronous task in these functions it just permits the usage of it.
- eg :-
```js
async function fun() {
    console.log("inside async function.");
    return 1234;
}
console.log("Start");
x = fun();
console.log(x);
console.log("End");
// OUTPUT :
// Start
// inside async function.
// Promise { 1234 }
// End
```
- eg 2 :-
```js
console.log("Start");
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Starting fetching from url ", url);
        setTimeout(function processDownloading() {
            let data = "Dummy data";
            console.log("completed fetching the data");
            resolve(data);  // return some data on SUCCESS.
            console.log("hello"); // --> this gets printed eventhough promise is resolved.
        }, 4000);
    });
}
function writeFile(data) {
    return new Promise(function (resolve, reject) {
        console.log("Started writing ", data, " in a file.");
        setTimeout(function processWriting() {
            let fileName = "result.txt";
            console.log("File written successfully");
            resolve(fileName);
        }, 3000);
    });
}
function uploadData(file, url) {
    return new Promise(function (resolve, reject) {
        console.log("Upload started on url", url, "filename is ", file);
        setTimeout(function processUpload() {
            let result = "SUCCESS";
            console.log("Uploading done");
            resolve(result);
        }, 5000);
    })
}

async function processing() {
    let downloadedData = await fetchData("www.google.com");
        console.log("Downloading await completed");
    let fileName = await writeFile(downloadedData);
        console.log("file writing await completed");
    let uploadResponse = await uploadData(fileName, "drive.google.com");
        console.log("Completed process with response :", uploadResponse);
    return true;
}
// x = processing();
// console.log(x);
async function helper() {
    // The purpose of using parentheses around (x = processing()) is to ensure that 
    // the assignment operation is completed before applying the await keyword to 
    // pause the execution. 
    await (a = processing());
    console.log(a);         // Promise { true }
    b = await (processing());
    console.log(b);         // true
    c = processing();
    console.log(c);         // Promise { <pending> }
}
console.log(helper());
let y = Promise.resolve("Hey");
console.log(typeof y);
console.log("End");
// OUTPUT :
// Start
// Starting fetching from url  www.google.com
// Promise { <pending> }
// object
// End
// completed fetching the data
// hello
// Downloading await completed
// Started writing  Dummy data  in a file.
// File written successfully
// file writing await completed
// Upload started on url drive.google.com filename is  result.txt
// Uploading done
// Completed process with response : SUCCESS
// Promise { true }
```
- `While async/await itself does not directly add tasks to the microtask queue, the promises returned by await expressions do add their associated callbacks to the microtask queue, allowing for asynchronous execution with higher priority than regular tasks or macrotasks.`

## `await` :-
- ***`await can also be used for expressions other than a Promise.`***
- `If the value is not a Promise, await converts the value to a resolved Promise, and waits for it.`
- `The awaited value's identity doesn't change as long as it doesn't have a then property that's callable.`
- eg 1:-
```js
async function fun() {
    const y = await 20;
    console.log(y);     // 20

    const obj = {};
    console.log(await obj === obj);     // true
}

fun();
```
- `await always assumes that the expression is unresolved promise, so it will end the global code and then comeback to the await statement to execute statements halted due to await after the promise or expresion is resolved.`
- `await always resolves the promise to its value.`
- eg 2:-
```js
async function fun() {
    console.log("start fun");
    let x = await 10;
    console.log("x is :", x);       // await always resolves the promise to its value.
    console.log("end fun");
    return x;
}
console.log("start");
let val = fun();
console.log(val);
val.then(function gun(value) {
    console.log("value is", value);
    console.log(val);
})
console.log("End");
// OUTPUT :
// start
// start fun
// Promise { <pending> }
// End
// x is : 10
// end fun
// value is 10
// Promise { 10 }
```
- eg 3:-
```js
async function fun() {
    console.log("start fun");
    let x = await Promise.resolve(10);
    console.log("x is :", x);        // await always resolves the promise to its value.
    console.log("end fun");
    return x;
}
console.log("start");
let val = fun();
console.log(val);
val.then(function gun(value) {
    console.log("value is", value);
    console.log(val);
})
console.log("End");
// OUTPUT :
// start
// start fun
// Promise { <pending> }
// End
// x is : 10
// end fun
// value is 10
// Promise { 10 }
```

## `asyn/await hell` :-
- when we use await for so many similar tasks then the code becomes very comlicated to understand.
- eg :-
```js
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Starting fetching from url ", url);
        setTimeout(function processDownloading() {
            let data = "Dummy data";
            console.log("completed fetching the data");
            resolve(data);  // return some data on SUCCESS.
            console.log("hello"); // --> this gets printed eventhough promise is resolved.
        }, 4000);
    });
}
function writeFile(data) {
    return new Promise(function (resolve, reject) {
        console.log("Started writing ", data, " in a file.");
        setTimeout(function processWriting() {
            let fileName = "result.txt";
            console.log("File written successfully");
            resolve(fileName);
        }, 3000);
    });
}
function uploadData(file, url) {
    return new Promise(function (resolve, reject) {
        console.log("Upload started on url", url, "filename is ", file);
        setTimeout(function processUpload() {
            let result = "SUCCESS";
            console.log("Uploading done");
            resolve(result);
        }, 5000);
    })
}
async function processing() {
    // codes like below are considered as await hell, bcs we have used await for so many similar tasks.
    let downloadedData1 = await fetchData("www.google.com");
    let fileName1 = await writeFile(downloadedData1);
    let uploadResponse1 = await uploadData(fileName1, "drive.google.com");
    let downloadedData2 = await fetchData("www.facebook.com");
    let fileName2 = await writeFile(downloadedData2);
    let uploadResponse2 = await uploadData(fileName2, "drive.google.com");
    let downloadedData3 = await fetchData("www.amazon.com");
    let fileName3 = await writeFile(downloadedData3);
    let uploadResponse3 = await uploadData(fileName3, "drive.google.com");
    return uploadResponse1 + uploadResponse2 + uploadResponse3;
}
console.log("Start");
x = processing();
console.log("End");
```

## ***`Promise.all()`*** :-
- Syntax : `Promise.all(iterable)`
- `It is one of the promise concurrency methods.`
- The Promise.all() static method takes an iterable of promises as input and returns a single Promise. 
- This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed).
- The returned value is - an array of the fulfillment values. 
- It rejects when any of the input's promises rejects, with this first rejection reason.
- **`Promise.all() will reject immediately upon any of the input promises rejecting. In comparison, the promise returned by Promise.allSettled() will wait for all input promises to complete, regardless of whether or not one rejects. Use allSettled() if you need the final result of every promise in the input iterable.`**
- eg 1:-
```js
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Starting fetching from url ", url);
        setTimeout(function processDownloading() {
            let data = "Dummy data";
            console.log("completed fetching the data");
            resolve(data);  // return some data on SUCCESS.
            console.log("hello"); // --> this gets printed eventhough promise is resolved.
        }, 4000);
    });
}
function writeFile(data) {
    return new Promise(function (resolve, reject) {
        console.log("Started writing ", data, " in a file.");
        setTimeout(function processWriting() {
            let fileName = "result.txt";
            console.log("File written successfully");
            resolve(fileName);
        }, 3000);
    });
}
function uploadData(file, url) {
    return new Promise(function (resolve, reject) {
        console.log("Upload started on url", url, "filename is ", file);
        setTimeout(function processUpload() {
            let result = "SUCCESS";
            console.log("Uploading done");
            resolve(result);
        }, 5000);
    })
}
async function process_1() {
    let downloadedData1 = await fetchData("www.google.com");
    let fileName1 = await writeFile(downloadedData1);
    let uploadResponse1 = await uploadData(fileName1, "drive.google.com");
    return uploadResponse1
}
async function process_2() {
    let downloadedData2 = await fetchData("www.facebook.com");
    let fileName2 = await writeFile(downloadedData2);
    let uploadResponse2 = await uploadData(fileName2, "drive.google.com");
    return uploadResponse2
}
async function process_3() {
    let downloadedData3 = await fetchData("www.amazon.com");
    let fileName3 = await writeFile(downloadedData3);
    let uploadResponse3 = await uploadData(fileName3, "drive.google.com");
    return uploadResponse3
}
console.log("Start");
// Here each process runs parallelly.
x = Promise.all([process_1(), process_2(), process_3()]).then(function process(value) {
    console.log(value);  // [ 'SUCCESS', 'SUCCESS', 'SUCCESS' ]
});
console.log("End");
// OUTPUT :
// Start
// Starting fetching from url  www.google.com
// Starting fetching from url  www.facebook.com
// Starting fetching from url  www.amazon.com
// End
// completed fetching the data
// hello
// Started writing  Dummy data  in a file.
// completed fetching the data
// hello
// Started writing  Dummy data  in a file.
// completed fetching the data
// hello
// Started writing  Dummy data  in a file.
// File written successfully
// Upload started on url drive.google.com filename is  result.txt
// File written successfully
// Upload started on url drive.google.com filename is  result.txt
// File written successfully
// Upload started on url drive.google.com filename is  result.txt
// Uploading done
// Uploading done
// Uploading done
// [ 'SUCCESS', 'SUCCESS', 'SUCCESS' ]
```
- eg 2:-
```js
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values);      // [3, 1337, "foo"]
});
```
- eg 3:-
```js
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
```
- `This following example demonstrates the asynchronicity of Promise.all when a non-empty iterable is passed.`
- eg 4:-
```js
// Passing an array of promises that are already resolved,
// to trigger Promise.all as soon as possible
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.all(resolvedPromisesArray);
// Immediately logging the value of p
console.log(p);

// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
  console.log("the queue is now empty");
  console.log(p);
});

// Logs, in order:
// Promise { <pending> }
// the queue is now empty
// Promise { [ 33, 44 ] }
```
- `Promise.all resolves synchronously if and only if the iterable passed is empty:`
- eg 5:-
```js
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
```
- `Promise.all is rejected if any of the elements are rejected. For example, if you pass in four promises that resolve after a timeout and one promise that rejects immediately, then Promise.all will reject immediately.`
- eg 6:-
```js
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
```
- `It is possible to change this behavior by handling possible rejections:`
- eg 7:-
```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1_delayed_resolution"), 1000);
});

const p2 = new Promise((resolve, reject) => {
  reject(new Error("p2_immediate_rejection"));
});

Promise.all([p1.catch((error) => error), p2.catch((error) => error)]).then(
  (values) => {
    console.log(values[0]); // "p1_delayed_resolution"
    console.error(values[1]); // "Error: p2_immediate_rejection"
  },
);
```
- Using Promise.all with async functions, eg 8:-
```js
// Using Promise.all() with async functions
function promptForDishChoice() {
    return new Promise((resolve, reject) => {
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `
        <form method="dialog">
            <p>What would you like to eat?</p>
            <select>
                <option value="pizza">Pizza</option>
                <option value="pasta">Pasta</option>
                <option value="salad">Salad</option>
            </select>
            <menu>
                <li><button value="cancel">Cancel</button></li>
                <li><button type="submit" value="ok">OK</button></li>
            </menu>
        </form>`;
    dialog.addEventListener("close", () => {
        if (dialog.returnValue === "ok") {
            resolve(dialog.querySelector("select").value);
        } else {
            reject(new Error("User cancelled dialog"));
        }
    });
    document.body.appendChild(dialog);
    dialog.showModal();
    });
}
  
async function fetchPrices() {
    const response = await fetch("/prices");
    return await response.json();
}

// Approach 1 --> [Wrong_approach]
async function getPrice() {
    const choice = await promptForDishChoice();
    const prices = await fetchPrices();
    return prices[choice];
}

// NOTE : that the execution of promptForDishChoice and fetchPrices don't depend on the result 
//        of each other. While the user is choosing their dish, it's fine for the prices 
//        to be fetched in the background, but in the code above, the await operator causes 
//        the async function to pause until the choice is made, and then again until the p
//        rices are fetched. We can use Promise.all to run them concurrently, 
//        so that the user doesn't have to wait for the prices to be fetched before the result 
//        is given:
// Approach 2 --> [correct_approach]
async function getPrice() {
    const [choice, prices] = await Promise.all([
        promptForDishChoice(),
        fetchPrices(),
    ]);
    return prices[choice];
}
```
- `Promise.all() will reject when any of the input's promises rejects, with this first rejection.reason.`
- eg 9:-
```js
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
```

## ***`Promise.allSettled()`*** :-
- The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise. 
- This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.
- The promise returned by Promise.allSettled() will wait for all input promises to complete, regardless of whether or not one rejects.
- `It is typically used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, unlike Promise.all(), or you'd always like to know the result of each promise.`
- eg 1:-
```js
Promise.allSettled([
    Promise.resolve(33),
    Promise.reject(new Error("an error")),
    new Promise((resolve) => setTimeout(() => resolve(66), 0)),
    99
    
])
.then((values) => console.log(values));

// OUTPUT :
// [
//     { status: 'fulfilled', value: 33 },
//     {
//       status: 'rejected',
//       reason: Error: an error
//           at Object.<anonymous> (/Users/nikhil_gautam/Desktop/P-11/Javascript/Codes/Asynchronous_js/Async_Await/Promise_allSettled/Promise_allSettled_01.js:3:20)
//           at Module._compile (node:internal/modules/cjs/loader:1126:14)
//           at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
//           at Module.load (node:internal/modules/cjs/loader:1004:32)
//           at Function.Module._load (node:internal/modules/cjs/loader:839:12)
//           at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//           at node:internal/main/run_main_module:17:47
//     },
//     { status: 'fulfilled', value: 66 },
//     { status: 'fulfilled', value: 99 }
// ]
```
- eg 2:-
```js
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises)
.then((results) => results.forEach((result) => console.log(result.status)));

// LOGS :
// fulfilled
// rejected
```

## ***`Promise.any()`*** :-
- The Promise.any() method is one of the promise concurrency methods. 
- The Promise.any() static method takes an iterable of promises as input and returns a single Promise. 
- This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. ***`It short-circuits after a promise fulfills`***, so it does not wait for the other promises to complete once it finds one.
- It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.
- `unlike Promise.race(), which returns the first settled value (either fulfillment or rejection), this method returns the first fulfilled value.` 
- eg 1:-
```js
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
const promises = [promise1, promise2, promise3];
Promise.any(promises).then((value) => console.log(value));
// LOGS :
// quick
```
- eg 2:-
```js
const pErr = new Promise((resolve, reject) => {
    reject("Always fails");
});

const pSlow = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Done quick");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
    console.log(value);
    // pFast fulfills first
});
// Logs:
// Done quick
```
- eg 3:-
```js
async function fetchAndDecode(url, description) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.blob();
    return [data, description];
}

const coffee = fetchAndDecode("coffee.jpg", "Coffee");
const tea = fetchAndDecode("tea.jpg", "Tea");

Promise.any([coffee, tea])
.then(([blob, description]) => {
    const objectURL = URL.createObjectURL(blob);
    const image = document.createElement("img");
    image.src = objectURL;
    image.alt = description;
    document.body.appendChild(image);
})
.catch((e) => {
    console.error(e);
});
// LOGS :
// [AggregateError: All promises were rejected] {
// [errors]: [
//     ReferenceError: fetch is not defined
//         at fetchAndDecode (/Users/nikhil_gautam/Desktop/P-11/Javascript/Codes/Asynchronous_js/Async_Await/Promise_any/Promise_any_03.js:2:17)
//         at Object.<anonymous> (/Users/nikhil_gautam/Desktop/P-11/Javascript/Codes/Asynchronous_js/Async_Await/Promise_any/Promise_any_03.js:10:16)
//         at Module._compile (node:internal/modules/cjs/loader:1126:14)
//         at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
//         at Module.load (node:internal/modules/cjs/loader:1004:32)
//         at Function.Module._load (node:internal/modules/cjs/loader:839:12)
//         at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//         at node:internal/main/run_main_module:17:47,
//     ReferenceError: fetch is not defined
//         at fetchAndDecode (/Users/nikhil_gautam/Desktop/P-11/Javascript/Codes/Asynchronous_js/Async_Await/Promise_any/Promise_any_03.js:2:17)
//         at Object.<anonymous> (/Users/nikhil_gautam/Desktop/P-11/Javascript/Codes/Asynchronous_js/Async_Await/Promise_any/Promise_any_03.js:11:13)
//         at Module._compile (node:internal/modules/cjs/loader:1126:14)
//         at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
//         at Module.load (node:internal/modules/cjs/loader:1004:32)
//         at Function.Module._load (node:internal/modules/cjs/loader:839:12)
//         at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//         at node:internal/main/run_main_module:17:47
// ]
// }
```

## ***`Promise.prototype.catch()`*** :-
- The catch() method of Promise instances schedules a function to be called when the promise is rejected. 
- It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods. 
- It is a shortcut for `Promise.prototype.then(undefined, onRejected)`.
- `Synatx : catch(onRejected)`
- ***`catch() internally calls then() on the object upon which it was called, passing undefined and onRejected as arguments. ie :- .then(undefined, function err(e) {console.log(e);})`***
- eg 1:-
```js
function fetchData(url) {
    return new Promise(function exec(res, rej){
        console.log("Started downloading data from url.", url);
        setTimeout(function processing() {
            let data = undefined;
            console.log("Download completed.");
            if(typeof data === 'undefined') {
                rej(data);
            } else {
                res(data);
            }
        }, 1000)
    });
}

let x = fetchData("skfdskfdsk");
x.then(function success_1(value) {
    console.log("succesfully downloaded data :", value);
    return 10;
})
.then(function success_2(value) {
    console.log("value is :", value);
})
.catch(function err(e) {
    console.log("Error is : ", e);
});

// LOGS : data = undefined
// Started downloading data from url. skfdskfdsk
// Download completed.
// Error is :  undefined

// LOGS : data = "dummy data"
// Started downloading data from url. skfdskfdsk
// Download completed.
// succesfully downloaded data : dummy data
// value is : 10
```
- Errors thrown inside asynchronous functions will act like uncaught errors:
- eg 2:-
```js
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        throw new Error("Uncaught Exception!");
    }, 1000);
});

p2.catch((e) => {
    console.error(e); // This is never called
});

// LOGS :
// Error: Uncaught Exception!
```
- Errors thrown after resolve is called will be silenced:
- eg 3:-
```js
const p3 = new Promise((resolve, reject) => {
  resolve();
  throw new Error("Silenced Exception!");
});

p3.catch((e) => {
  console.error(e); // This is never called
});
```
- catch() is not called if the promise is fulfilled.
- eg 4:-
```js
// Create a promise which would not call onReject
const p1 = Promise.resolve("calling next");

const p2 = p1.catch((reason) => {
  // This is never called
  console.error("catch p1!");
  console.error(reason);
});

p2.then(
  (value) => {
    console.log("next promise's onFulfilled");
    console.log(value); // calling next
  },
  (reason) => {
    console.log("next promise's onRejected");
    console.log(reason);
  },
);

// LOGS :
// next promise's onFulfilled
// calling next
```

## ***`Promise.prototype.finally()`*** :-
- The finally() method of Promise instances schedules a function to be called when the promise is settled (either fulfilled or rejected). 
- It immediately returns an equivalent Promise object.
- `Syntax : finally(onFinally)`.
- This lets you avoid duplicating code in both the promise's then() and catch() handlers.
- eg 1:-
```js
function checkMail() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve('Mail has arrived');
        } else {
            reject(new Error('Failed to arrive'));
        }
    });
}

checkMail()
.then((mail) => {
    console.log(mail);
})
.catch((err) => {
    console.error(err);
})
.finally(() => {
    console.log('Experiment completed');
});

// Logs : "when random() > 0.5"
// Mail has arrived
// Experiment completed

// Logs : "when random() < 0.5"
// Error: Failed to arrive
//     at /Users/nikhil_gautam/Desktop/P-11/Javascript/Codes/Asynchronous_js/Async_Await/Finally/finally_01.js:6:20
//     at new Promise (<anonymous>)
//     at checkMail (/Users/nikhil_gautam/Desktop/P-11/Javascript/Codes/Asynchronous_js/Async_Await/Finally/finally_01.js:2:12)
//     at Object.<anonymous> (/Users/nikhil_gautam/Desktop/P-11/Javascript/Codes/Asynchronous_js/Async_Await/Finally/finally_01.js:11:1)
//     at Module._compile (node:internal/modules/cjs/loader:1126:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
//     at Module.load (node:internal/modules/cjs/loader:1004:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:839:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47
// Experiment completed
```

## ***`throw `*** :-
- The throw statement throws a user-defined exception. 
- Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. 
- If no catch block exists among caller functions, the program will terminate.
- eg 1:-
```js
function getRectArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw new Error('Parameter is not a number!');
    }
}
try {
    getRectArea(3, 'A');
} catch (e) {
    console.error(e);
    // Expected output: Error: Parameter is not a number!
}
// LOGS :
// Error: Parameter is not a number!
```

## ***`Promise.prototype.then()`*** :-
- The .then() method of Promise instances takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise. 
- It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.
- `Syntax : 1. then(onFulfilled), 2. then(onFulfilled, onRejected)`
- `The catch() and finally() methods both work by invoking the object's then() method.`

## Error handling :-
- eg 1:-  "using `.then(onFulfilled, onRejected) `"
```js
function fetchData(url) {
    return new Promise(function exec(res, rej){
        console.log("Started downloading data from url.", url);
        setTimeout(function processing() {
            let data = undefined;
            console.log("Download completed.");
            if(typeof data === 'undefined') {
                rej(data);
            } else {
                res(data);
            }
        }, 1000)
    });
}

let x = fetchData("skfdskfdsk");
x.then(function success(value) {
    console.log("succesfully downloaded data :", value);
}, function error(err) {
    console.log("failed download :", err);
});

// LOGS :
// Started downloading data from url. skfdskfdsk
// Download completed.
// failed download : undefined
```
- eg 2:-  "using `.catch()`"
```js
function fetchData(url) {
    return new Promise(function exec(res, rej){
        console.log("Started downloading data from url.", url);
        setTimeout(function processing() {
            let data = undefined;
            console.log("Download completed.");
            if(typeof data === 'undefined') {
                rej(data);
            } else {
                res(data);
            }
        }, 1000)
    });
}

let x = fetchData("skfdskfdsk");
x.then(function success_1(value) {
    console.log("succesfully downloaded data :", value);
    return 10;
})
.then(function success_2(value) {
    console.log("value is :", value);
})
.catch(function err(e) {
    console.log("Error is : ", e);
});

// LOGS : data = undefined
// Started downloading data from url. skfdskfdsk
// Download completed.
// Error is :  undefined

// LOGS : data = "dummy data"
// Started downloading data from url. skfdskfdsk
// Download completed.
// succesfully downloaded data : dummy data
// value is : 10
```
## try-catch :-
- eg 1:-
```js
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Starting fetching from url ", url);
        setTimeout(function processDownloading() {
            let data = "Dummy data";
            console.log("completed fetching the data");
            resolve(data);  // return some data on SUCCESS.
            console.log("hello"); // --> this gets printed eventhough promise is resolved.
        }, 4000);
    });
}
function writeFile(data) {
    return new Promise(function (resolve, reject) {
        console.log("Started writing ", data, " in a file.");
        setTimeout(function processWriting() {
            let fileName = "result.txt";
            console.log("File written successfully");
            resolve(fileName);
        }, 3000);
    });
}
function uploadData(file, url) {
    return new Promise(function (resolve, reject) {
        console.log("Upload started on url", url, "filename is ", file);
        setTimeout(function processUpload() {
            let result = "SUCCESS";
            console.log("Uploading done");
            resolve(result);
        }, 5000);
    })
}

async function processing() {
    try {
        let downloadedData = await fetchData("www.google.com");
        let fileName = await writeFile(downloadedData);
        let uploadResponse = await uploadData(fileName, "drive.google.com");
        return uploadResponse;
    } catch(err) {
        console.log(err);
    }
}
console.log("Start");
x = processing();
console.log("End");
```
## Error Fisrt Callback :-
- 
```js
function fetchCustom(url, fn) {
    console.log("STARTED DOWNLOADING FROM ", url);
    setTimeout(function process() {
        console.log("Download completed");
        let response = "Dummy Data";
        fn(new Error("Something"), response);
    }, 3000);
}

fetchCustom("www.google.com", function(err, response) {
    if(err) {
        console.log("Error is :", err);
        return;
    }
    console.log("Response is :", response);
});

// LOGS : fn('abc', response);
// STARTED DOWNLOADING FROM  www.google.com
// Download completed
// Error is : abc

// LOGS : fn({error: "some error"}, response);
// STARTED DOWNLOADING FROM  www.google.com
// Download completed
// Error is : { error: 'some error' }

// LOGS : fn(new Error("Something"), response);
// STARTED DOWNLOADING FROM  www.google.com
// Download completed
// Error is : Error: Something
//     at Timeout.process [as _onTimeout] (/Users/nikhil_gautam/Desktop/P-11/Javascript/Codes/Asynchronous_js/Async_Await/errorFirstCallback.js:6:12)
//     at listOnTimeout (node:internal/timers:559:17)
//     at processTimers (node:internal/timers:502:7)

// LOGS : fn(undefined, response);
// STARTED DOWNLOADING FROM  www.google.com
// Download completed
// Response is : Dummy Data
```

## Microtask Queue :-
- In JavaScript, the microtask queue, also known as the job queue, is a queue that holds microtasks.
- Microtasks are tasks that need to be executed asynchronously, but with higher priority than regular tasks or macrotasks.
- When the JavaScript engine finishes executing the current task and the call stack is empty, it checks the microtask queue and executes any pending microtasks before moving on to the next task or macrotask.
- The following operations typically add tasks to the microtask queue:
    - `Promise callbacks` : 
        - When a promise is resolved or rejected, its associated callbacks are added to the microtask queue. This allows you to perform actions in response to the fulfillment or rejection of a promise.

    - `Mutation Observer callbacks` : 
        - Mutation Observers are used to watch for changes in the DOM. When a mutation occurs, the associated observer callbacks are added to the microtask queue. This allows you to react to changes in the DOM structure or content.

    - `process.nextTick (Node.js specific)` : 
        - In Node.js, the process.nextTick function allows you to schedule a callback to be executed on the next pass of the event loop, but before any other I/O events or timers. The callback added using process.nextTick is added to the microtask queue.

- It's important to note that the microtask queue has higher priority than the regular task queue (also known as the macrotask queue). This means that when the JavaScript engine is ready to execute tasks, it will first process all the pending microtasks in the microtask queue before moving on to the next macrotask in the event loop.

- This prioritization of microtasks is crucial for maintaining consistency and avoiding issues like callback starvation, as it allows for immediate handling of microtasks before progressing to other tasks or I/O operations.

## `Starvation` in js :-
- In the context of JavaScript, "starvation" typically refers to a situation where a certain task or process is unable to make progress or complete its execution due to other tasks or processes monopolizing system resources or blocking the event loop. 
- This can result in delayed or blocked execution of the starved task, causing performance issues or unresponsiveness in the application.
- Starvation can occur in various scenarios, including:
    - `Synchronous blocking operations` : 
        - JavaScript is single-threaded, and synchronous blocking operations can cause other tasks or event handlers to be delayed or starved until the blocking operation completes. 
        - For example, if a computationally intensive task is performed on the main thread without yielding control, it can block the execution of other tasks and make the application unresponsive.

    - `Long-running tasks` : 
        - If a task takes a long time to complete without yielding control back to the event loop, it can starve other tasks from executing. 
        - This can happen with synchronous network requests, complex calculations, or large data processing tasks.

    - `Inefficient event handling` : 
        - If an event handler takes a significant amount of time to execute, it can cause other events in the queue to be delayed or starved. 
        - This can happen if the event handler performs a time-consuming operation or has a high computational complexity.
