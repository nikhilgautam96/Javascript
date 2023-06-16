let id = setInterval( function() {
    console.log("task done again.");
}, 3000);

setTimeout(function() {
    clearInterval(id);
}, 13000);

// OUTPUT :
// task done again.
// task done again.
// task done again.
// task done again.