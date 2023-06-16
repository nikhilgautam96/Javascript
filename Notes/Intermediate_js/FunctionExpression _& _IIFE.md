# Function Expression :-
- There are 2 types in which we can declare a function in JS.
- A function can either be a `function definition` or a `function expression`.
- If the first word in our piece of code is not starting with the keyword "function" and it involves a function then it is a function expression.
- Why is it called as function expression ?? --> beacuse there is some king of evaluation is happening in case of function expression whether its an IIFE as well.
eg :-
```JS
function fun() {
    // This is a function definition.
}

let gun = function () {
    // This is an function expression.
}

(function () {})    // This is an function expression.
```
*** NOTE : In JS, we can pass function as an argument to another functions. ***
- Function expressions are of two types.
    <ol>
    <li> Annonymous </li>
    <li> Named </li>
    </ol>
eg:-
```JS
// Annonymous :-
var x = function () { // "function expression"
    // logic.
}
gun(function() { // "function expression"
    // logic.
})

// Named :-
var greet = function sayHello(name) { // "function expression"
  console.log("Hello, " + name + "!");
};

greet("John"); // Output: Hello, John!
```
## Scope of Function Expression :-
- scope of function expression is inside the scope of variable it is assigned to.
```JS
    console.log(typeof x);      // undefined
    // console.log(x());        // TypeError: x is not a function

    var x = function gun() {
        // scope of function "gun()" is in the scope of 'x'.
        console.log("inside gun");
    }
    console.log(x(), typeof x);
    // scope of 'x' is global.
    // gun();      // ReferenceError: gun is not defined
```
- Annonymous function are hard to debug.

# IIFE (Immediately Invoked Function Expression) :-
- 