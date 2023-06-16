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