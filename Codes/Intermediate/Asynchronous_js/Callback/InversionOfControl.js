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
// when and how to call the "processData" function.