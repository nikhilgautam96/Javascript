function fun() {
    teachingAssistant = "Vibhav";       // this will not become autoglobal, 
                                        // bcz in line 4 we have a fromal declaration.
    console.log(teachingAssistant);
    var teachingAssistant = "JD";
}

fun();