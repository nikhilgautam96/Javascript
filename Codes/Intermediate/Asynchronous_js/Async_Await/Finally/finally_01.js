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