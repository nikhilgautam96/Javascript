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
    // codes like below are considered as await hell, bcs we have usd await for so many similar tasks.
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