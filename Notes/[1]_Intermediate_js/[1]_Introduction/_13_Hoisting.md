# Hoisting :-
- Hoisting is actually a direct consequene of lexical scoping/parsing that happens in JS, due to which we are able to access some functions and variables before declaring them. This gives us a notion that they are moved up in the file.
- In many blogs it written as `"hoisting is JS's default behaviour of moving declarations to the top."`
    - This is not true as JS parser is not so advance that it can move piece of code to the top and then move it back to its own place after execution.
    - The point is to make things simple it is assumed that piece of code is moved up(usually formal declarations) but it is actually just parsing and lexical scoping.
eg :-
```JS
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
```