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
// // here we can see we are not passing the callback func to the fetchData() func 
// // instead we are adding it to the onFullfillment array thus we don't have 'IOC'.
// downloadPromise
// .then(function processDownload(dataValue) {
//     console.log("Download promise fulfilled");
//     // console.log(value);
//     let writePromise = writeFile(dataValue);
//     writePromise.then(function processWriting(fileValue) {
//         console.log("Writing to file completed.");
//         // console.log("filename is", fileValue);
//         let uploadPromise = uploadData(fileValue, "www.drive.google.com");
//         uploadPromise.then(function processUpload(uploadUrl) {
//             console.log("upload completed to url www.drive.google.com");
//             console.log("status is : ", uploadUrl);
//         })
//     })
// })
// OUTPUT :
// Starting fetching from url  www.google.com
// completed fetching the data
// hello
// Download promise fulfilled
// Started writing  Dummy data  in a file.
// File written successfully
// Writing to file completed.
// Upload started on url www.drive.google.com filename is  result.txt
// Uploading done
// upload completed to url www.drive.google.com
// status is :  SUCCESS

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
downloadPromise
.then(function processDownload(dataValue) {
    console.log("Download promise fulfilled with value", dataValue);
    return dataValue;
})
.then(function processWrite(value) {
    // whatever is used as argument in 'resolve()' function is registered as a 
    // [[PromiseResult]] : "result.txt" in the promise object returned by '.then()'.
    // now, since we are calling the 'writeFile()` and it returns a promise
    // so technically the same promise is returned by the `.then()` function as well.
    return writeFile(value);  
})
.then(function processUpload(value) {
    return uploadData(value, "www.drive.google.com");
})