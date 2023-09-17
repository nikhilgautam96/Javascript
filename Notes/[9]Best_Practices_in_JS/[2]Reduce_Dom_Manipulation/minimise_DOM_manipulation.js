/*
 1. We should avoid heavy DOM manipulations.
 2. we can use practices like to cache the dom element that we want to manipulate many time,
    so that we don't have to fetch the element from DOM tree every time. Thus reducing time.
 */
for (let i = 0; i < 1000; i++) {
    document.getElementById('myDiv').innerHTML += 'Hello World!'; // T1 + T2
} // Total time = (T1 + T2) * 1000, very expensive.

// Faster
let myDiv = document.getElementById('myDiv'); // time = T1, caching the div element for future use.
let content = '';
for (let i = 0; i < 1000; i++) {
    content += 'Hello World!';
} // time = T2
myDiv.innerHTML = content; // T3
// Total time = T1 + T2 + T3
