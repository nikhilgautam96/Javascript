function todo(task) {
    console.log("started todo");
    setTimeout(function fun() {
        console.log("Completed ", task);
    }, 5000);
    task = "Nikhil";
    console.log("completed todo");
}
console.log("Starting");
todo("assignment");
console.log("Ending");
// OUTPUT :
// Starting
// started todo
// completed todo
// Ending
// Completed  Nikhil