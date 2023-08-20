## Functions Introductions :-

-   By default all functions return 'undefined'.
-   A function can either be a `function definition` or a `function expression`.

1.  Function Statements :

```JS
function funcName(argument) {
    // logic goes here.
    return x; // not mandatory, if we don't put return it automatically returns "undefined".
}
```

2. Anonymous function :

```js
const func = function () {
    console.log('I am anonymous function.');
};
```

3. Arrow function :

```js
const arrow = () => {
    console.log('I am arrow function.');
};
```

4. IIFE :

```js
(function () {
    console.log('I am a anonymous function.');
})();
```

## Function Statement :-

-   Function Statements are hoisted.

```js
function a() {
    console.log('I am a function statement');
}
```

## Function Expression :-

-   `Function Expressions are not hoisted.`
-   `They are used in a place where functions are used as a value.`
-   If the first word in our piece of code is not starting with the keyword "function" and it involves a function then it is a function expression.
-   Function expressions are of two types.
    1. Annonymous.
    2. Named.
-   Why is it called as function expression :-
    -   beacuse there is some kind of evaluation is happening in case of function expression whether its an IIFE as well. eg :-
-   Annonymous function are hard to debug.

```JS
// Annonymous :-
var x = function () { // "function expression"
    // logic.
}
x();
// Named :-
var greet = function sayHello(name) { // "function expression"
    console.log("Hello, " + name + "!");
};
greet("John"); // Output: Hello, John!

(function () {})    // This is an function expression.
```

## Scope of Function Expression :-

-   scope of function expression is inside the scope of variable it is assigned to.

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

## Functions - as `First class citizens` | First class functions :-

-   Functions is js are so beautiful, we can pass it as a value, return it from a function.
-   `The ability for a function to be passed or used as values and returned from a function is what makes them "First class citizens" and thus "First class functions".

## Higher Order functions :-

-   A function that accepts another function as a argument or returns another function is actually a Higher order function.

```js
function fun(x) {
    console.log(x);
}
fun(function () {
    console.log('another function');
});
```

```js
function fun(x) {
    return function () {
        console.log('another function');
    };
}
fun();
```

## Parameters vs Arguments :-

```js
function fun(parameter1, parameter2) {
    console.log('fun');
}
fun(argumet1, argument2);
```

## Function Name Shadowing :-

-   In JavaScript, when you declare a function with the same name as its parent function, it creates a new local function that shadows the outer function within its own scope. This behavior is known as function name shadowing.

-   Here's an example to illustrate this concept:

```js
function outer() {
    console.log('Outer function');

    function outer() {
        console.log('Inner function shadowing outer() parent func.');
    }

    outer();
}
outer();
```