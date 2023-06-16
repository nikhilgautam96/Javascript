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