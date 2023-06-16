# Callback Functions :-
- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
eg :-
```js
function greeting(name) {
  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
```
- f(g(x)) --> here g(x) is a function.
```js
function fun(x, fn) {
    /**
     * x --> number
     * fn --> callback function
     */
    for(let i = 0; i<x; i++) {
        console.log(i);
    }
    fn();
}

fun(4, function log() {
    console.log("custom logger");
})
// OUTPUT
// 0
// 1
// 2
// 3
// custom logger

fun(5, function () {
    console.log("annonymous function");
})
// OUTPUT :
// 0
// 1
// 2
// 3
// 4
// annonymous function

function gun() {
    console.log("inside gun()");
}
fun(6, gun);
// OUTPUT :
// 0
// 1
// 2
// 3
// 4
// 5
// inside gun()

let g = function process() {
    console.log("inside g");
}
fun(4, g);
// OUTPUT :
// 0
// 1
// 2
// 3
// inside g

// fun(2, g());    // this is like : fun(2, undefined).   // TypeError: fn is not a function

// function mapper(x, function f() {})      // This is syntactically wrong. 
                    // we cannot write a function as a parameter in function definition/expression.
```

## parameter vs argument :-
- `argument` is the one that is passed while,
- `parameter` is the one that is accepted.

## arr.map() function :-
- the arr.map() function accepts a callback as a parameter.
- what it does - for all the elements of the given array it passes the elements & its index as arguments to the callback. also it return by default "undefined" on each iteration/call.
```js
let arr = [1, 2, 3, 4, 5];
arr.map(function process(v, i) {
    /**
     * v --> the value/element of array.
     * i --> index of the passed element (count starts from 0).
     */
    console.log(v, i);
})
// OUTPUT :-
// 1 0
// 2 1
// 3 2
// 4 3
// 5 4

let x = arr.map(function process(v, i) {
    /**
     * v --> the value/element of array.
     * i --> index of the passed element (count starts from 0).
     */
    console.log(v, i);
    // by default it will return "undefined".
})
console.log(x);     // [ undefined, undefined, undefined, undefined, undefined ]

let y = arr.map(function process(v, i) {
    /**
     * v --> the value/element of array.
     * i --> index of the passed element (count starts from 0).
     */
    console.log(v, i);
    return v * v;
})
console.log(y);      // [ 1, 4, 9, 16, 25 ]
console.log(arr);    // [ 1, 2, 3, 4, 5 ]
```
## custom map() function :-
- 
```js
function mapper(arr, fn) {
    /**
     * arr --> an array elements.
     * fn --> callback function which accepts two arguments (value, index).
     */
    let result = [];
    for (let i = 0; i<arr.length; i++) {
        let res = fn(arr[i], i);
        result.push(res);
    }
    return result;
}
let arr = [1, 2, 3, 4, 5];
let x = mapper(arr, function cuber(v, i) {
    console.log(v, v * v * v, i);
    return v*v*v;
});
console.log(x, arr);
// OUTPUT :
// 1 1 0
// 2 8 1
// 3 27 2
// 4 64 3
// 5 125 4
// [ 1, 8, 27, 64, 125 ] [ 1, 2, 3, 4, 5 ]
```

# Disadvantages of callbacks :-
1. `callback hell`.
    - Callback hell is a situation that arises when multiple asynchronous operations are nested within each other using callbacks, leading to deep and difficult-to-read code structures. 
    - eg :-
    ```js
    // Tasks :
    // 1. write a function to download data from a url.
    // 2. write a function to save that downloaded data in a file and return that filename.
    // 3. write a function to upload the file written in previous step to a new url.

    function fetchCustom(url, fn) {
        // download content of the url
        // downloading can take time
        // after downloading the content from url, and then pass the result to the callback.
        console.log("Starting Downloading");
        setTimeout(function process() {
            console.log("Download completed");
            let response = "dummy data";
            fn(response);
            console.log("downloading ended");
            // return response;     // even if we do try return from here, it won't work bcz response 
                                    // will be returned after 3 secs and the parser has already emptied 
                                    // the call stack and if we try to use the response variable 
                                    // we will get "undefined".
        }, 3000);
    }

    function writeFile(data, fn) {
        // this function writes data in a new file.
        console.log("Started writing data", data);
        setTimeout(function process() {
            let filename = "output.txt";
            console.log("writing completed");
            fn(filename);
            console.log("writing ended");
        }, 4000);
    }

    function uploadFile(filename, newUrl, fn) {
        console.log("Upload Started");
        setTimeout(function process() {
            console.log("File", filename, "upload successfull on url", newUrl);
            let uploadResponse = "SUCCESS";
            fn(uploadResponse);
            console.log("upload ended");
        }, 8000);
    }

    // const response = fetchCustom("www.google.com");          
            // response will be undefined as the asynchronous task is yet to execute but the
            // function call has already returned "undefined".
    // console.log(response);       // "undefined"

    fetchCustom("www.google.com", function downloadCallback(response) {
        console.log("Downloaded Response is :", response);
        writeFile(response, function writeCallback(filename) {
            console.log("new file written is", filename);
            uploadFile(filename, "drive.google.com", function uploadCallback(uploadResponse) {
                console.log("Successfully uploaded", uploadResponse);
            })
        })
    });

    // OUTPUT :
    // Starting Downloading
    // Download completed
    // Downloaded Response is : dummy data
    // Started writing data dummy data
    // downloading ended
    // writing completed
    // new file written is output.txt
    // Upload Started
    // writing ended
    // File output.txt upload successfull on url drive.google.com
    // Successfully uploaded SUCCESS
    // upload ended
    ```
2. `Inversion of control` (biggest disadvantage).
    - Inversion of Control (IoC) is a design principle where the control flow of a program is inverted or handed over to a framework or container. In JavaScript, one common way to achieve IoC is by using callbacks.
    - eg :-
    ```js
    // Service module
    function fetchData(callback) {
    // Simulating an asynchronous operation with setTimeout
        setTimeout(() => {
            const data = 'Some data';
            callback(data);
        }, 2000);
    }

    // Callback function
    function processData(data) {
        console.log('Processing data:', data);
    }

    // Using the service module
    fetchData(processData);
    // we pass the "processData" function as an argument to the "fetchData" function. 
    // This means that the control flow is inverted, and the "fetchData" function determines 
    // when and how to call the "processData" function or even whether to call it or not.
    ```
    - To deal with inversion of control we use promises as in promise we don't leave the control to utility function but actually handle it ourselves by using the `.then()` function. we register the tasks we want to do and in what order we want to do using the .then() function in the promise's `onFullfillment` array.