function fun(task1, task2) {
    task1 = "Nikhil";
    setTimeout(function gun() {
        console.log("completed", task1);
    }, 2000);
    task1 = task2;
    task2 = "Gautam";
}

fun(12, 34);
// completed 34