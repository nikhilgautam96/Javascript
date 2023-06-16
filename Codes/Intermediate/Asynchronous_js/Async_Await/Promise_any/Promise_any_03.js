async function fetchAndDecode(url, description) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.blob();
    return [data, description];
}

const coffee = fetchAndDecode("coffee.jpg", "Coffee");
const tea = fetchAndDecode("tea.jpg", "Tea");

Promise.any([coffee, tea])
.then(([blob, description]) => {
    const objectURL = URL.createObjectURL(blob);
    const image = document.createElement("img");
    image.src = objectURL;
    image.alt = description;
    document.body.appendChild(image);
})
.catch((e) => {
    console.error(e);
});
// LOGS :
// [AggregateError: All promises were rejected] {
// [errors]: [
//     ReferenceError: fetch is not defined
//         at fetchAndDecode (/Users/nikhil_gautam/Desktop/P-11/Javascript/Codes/Asynchronous_js/Async_Await/Promise_any/Promise_any_03.js:2:17)
//         at Object.<anonymous> (/Users/nikhil_gautam/Desktop/P-11/Javascript/Codes/Asynchronous_js/Async_Await/Promise_any/Promise_any_03.js:10:16)
//         at Module._compile (node:internal/modules/cjs/loader:1126:14)
//         at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
//         at Module.load (node:internal/modules/cjs/loader:1004:32)
//         at Function.Module._load (node:internal/modules/cjs/loader:839:12)
//         at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//         at node:internal/main/run_main_module:17:47,
//     ReferenceError: fetch is not defined
//         at fetchAndDecode (/Users/nikhil_gautam/Desktop/P-11/Javascript/Codes/Asynchronous_js/Async_Await/Promise_any/Promise_any_03.js:2:17)
//         at Object.<anonymous> (/Users/nikhil_gautam/Desktop/P-11/Javascript/Codes/Asynchronous_js/Async_Await/Promise_any/Promise_any_03.js:11:13)
//         at Module._compile (node:internal/modules/cjs/loader:1126:14)
//         at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
//         at Module.load (node:internal/modules/cjs/loader:1004:32)
//         at Function.Module._load (node:internal/modules/cjs/loader:839:12)
//         at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//         at node:internal/main/run_main_module:17:47
// ]
// }
  