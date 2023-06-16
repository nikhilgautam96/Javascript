Promise.allSettled([
    Promise.resolve(33),
    Promise.reject(new Error("an error")),
    new Promise((resolve) => setTimeout(() => resolve(66), 0)),
    99
    
])
.then((values) => console.log(values));

// OUTPUT :
// [
//     { status: 'fulfilled', value: 33 },
//     {
//       status: 'rejected',
//       reason: Error: an error
//           at Object.<anonymous> (/Users/nikhil_gautam/Desktop/P-11/Javascript/Codes/Asynchronous_js/Async_Await/Promise_allSettled/Promise_allSettled_01.js:3:20)
//           at Module._compile (node:internal/modules/cjs/loader:1126:14)
//           at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
//           at Module.load (node:internal/modules/cjs/loader:1004:32)
//           at Function.Module._load (node:internal/modules/cjs/loader:839:12)
//           at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//           at node:internal/main/run_main_module:17:47
//     },
//     { status: 'fulfilled', value: 66 },
//     { status: 'fulfilled', value: 99 }
// ]