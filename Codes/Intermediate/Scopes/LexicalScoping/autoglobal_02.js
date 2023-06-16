var teacher = "Sanket";
function fun() {
    var teacher = "Nikhil";
    teachingAssistant = "Vibhav";       // |--> it will become "autoglobal"
    console.log(teacher);               // "Nikhil"
    console.log(teachingAssistant);     // "Vibhav"   
}

console.log(teachingAssistant);         // here teachingAssistant is "undeclared".
            // "ReferenceError: teachingAssistant is not defined"
            // reason : autoglobals are created during execution phase 
            // and while in execution phase before calling "fun()" 
            // so that "teachingAssistant" could become "autoglobal" 
            // we tried to access it and thus it threw reference error 
            // as JS does not have any info about the variable 
            // "teachingAssistant" in global scope. 
fun();
console.log(teacher);                   // "Sanket"
console.log(teachingAssistant);         // "Vibhav"  --> in global scope.