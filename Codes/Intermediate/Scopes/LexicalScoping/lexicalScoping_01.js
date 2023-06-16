// Example 1
var teacher = "Sanket";
function fun() {
    var teacher = "Nikhil";
    console.log(teacher);               // "Nikhil"
}

fun();
console.log(teacher);                   // "Sanket"