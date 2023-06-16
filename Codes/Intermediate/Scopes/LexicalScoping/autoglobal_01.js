var teacher = "Sanket";
function fun() {
    var teacher = "Nikhil";
    teachingAssistant = "Vibhav";       // |--> it will become "autoglobal"
    console.log(teacher);               // "Nikhil"
    console.log(teachingAssistant);     // "Vibhav"   
}

fun();
console.log(teacher);                   // "Sanket"
console.log(teachingAssistant);         // "Vibhav"  --> in global scope.