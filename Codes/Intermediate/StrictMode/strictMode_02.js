function fun() {
    teachingAssistant = "JD";          
    console.log(teachingAssistant);
}

function gun() {
    "use strict";
    teacher = "Nikhil";         // ReferenceError: teacher is not defined
    console.log(teacher);
}

fun();
gun();