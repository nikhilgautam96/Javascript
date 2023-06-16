var teacher = "Sanket";
function fun() {
    console.log(subject);               // "undefined"
    var teacher = "Nikhil";
    var subject = "Javascript";
    teachingAssistant = "Vibhav";       // |--> it will become "autoglobal"
    console.log(teacher);               // "Nikhil"
    console.log(teachingAssistant);     // "Vibhav"   
    console.log(subject);               // "Javascript"
}

fun();
console.log(teacher);                   // "Sanket"
console.log(teachingAssistant);         // "Vibhav"  --> in global scope.
console.log(teachingAssistant);         // "Vibhav"  
console.log(subject);                   // "ReferenceError: subject is not defined"