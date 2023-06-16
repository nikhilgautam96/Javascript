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