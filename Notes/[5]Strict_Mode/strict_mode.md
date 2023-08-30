# Strict mode - `use strict` :-

-   In strict mode there are many limitations put to JS code and one such is that it stops creation of `autoglobals`.
    eg :-

```JS
"use strict";
function fun() {
    teachingAssistant = "JD";           // ReferenceError: teachingAssistant is not defined
    console.log(teachingAssistant);
}

fun();
// NOTE : here we are getting reference error in assignment itself, ie in target reference even before using it as a source.
```

-   we can use strict mode for a particular scope(like in a function or in a block) or for global scope.
    eg :-

```JS
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
```
