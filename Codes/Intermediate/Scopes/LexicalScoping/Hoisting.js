// gun();           // "TypeError: gun is not a function"
fun();     // since this is not a formal declaration so it will be called in execution phase.
           // This is an example of "Hoisting". 
var gun = 10;
function fun() {
    teachingAssistant = "Vibhav";       // this will not become autoglobal, 
                                        // bcz in line 4 we have a fromal declaration.
    console.log(teachingAssistant);
    var teachingAssistant = "JD";
}

fun();
gun();           // "TypeError: gun is not a function"