// Write a function to download some data from a url, and not use callbacks 
// instead use promises.
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

// let downloadPromise = fetchData("www.google.com");
// x = downloadPromise
// .then(function processDownload(dataValue) {
//     console.log("Download promise fulfilled");
//     return "Nikhil";
// });

// x.then(function process(value) {
//     console.log("x promise value is : ", value);      // 'x promise value is :  Nikhil'
// })

let downloadPromise = fetchData("www.google.com");
x = downloadPromise
.then(function processDownload(dataValue) {
    console.log("Download promise fulfilled with value", dataValue);
    return dataValue;
});
y = x.then(function processWrite(value) {
    // whatever is used as argument in 'resolve()' function is registered as a 
    // [[PromiseResult]] : "result.txt" in the promise object returned by '.then()'.
    // now, since we are calling the 'writeFile()` and it returns a promise
    // so technically the same promise is returned by the `.then()` function as well.
    console.log(x);
    return writeFile(value);
});
z = y.then(function processUpload(value) {
    console.log(y);
    return uploadData(value, "www.drive.google.com");
})
.then(function process() {
    console.log("Done");
});
console.log("Ended");
// OUTPUT :
// Starting fetching from url  www.google.com
// Ended
// completed fetching the data
// hello
// Download promise fulfilled with value Dummy data
// Promise { 'Dummy data' }
// Started writing  Dummy data  in a file.
// File written successfully
// Promise { 'result.txt' }
// Upload started on url www.drive.google.com filename is  result.txt
// Uploading done
// Done