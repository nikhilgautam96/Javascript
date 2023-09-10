// 1:19:10
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

function doAsyncProcess() {
    const tempObj = itr.next();
    if(tempObj.done) return;    // as this indicates we have yielded everything in steps().
    tempObj.value.then(doAsyncProcess);
}
function* steps() {
    const downloadedData = yield fetchData("www.google.com");
    console.log("1 |----->> download yield done");
    const fileWritten = yield writeFile(downloadedData);
    console.log("2 |----->> Write File yield done");
    const uploadResponse = yield uploadData(fileWritten, "www.youtube.com");
    console.log("3 |----->> upload yield done.");
    return uploadResponse;
}
console.log("Start");
itr = steps();
const obj = itr.next();     // returns an object {value : promiseObject, done: false}.
obj.value.then(doAsyncProcess);
console.log("End");

// LOGS :
// Start
// Starting fetching from url  www.google.com
// End
// completed fetching the data
// hello
// 1 |----->> download yield done
// Started writing  undefined  in a file.
// File written successfully
// 2 |----->> Write File yield done
// Upload started on url www.youtube.com filename is  undefined
// Uploading done
// 3 |----->> upload yield done.