# This in JS :

## Inside a `function (annonymous|named|IIFE)` `this` will point to the immediate parent of that function :

-   if immediate parent is an object --> point to object.
-   if immediate parent is an function(arrow|annonymous|named|IIFE) --> point to the `Global Object`.
-   if no parent --> `Global object`.

## `this` inside of `arrow functions` :

**_ Arrow functions were introduced to keep track of user defined parent objects. _**

-   looks for its parent function and the moment it finds a parent function, it point to the this of that parent function.
-   ie:- {
    -   1. If parent point to 'Global' it will point to 'Global. |
    -   2. If parent points to an 'object' it will point to same 'object'.|
           }
-   if no parent found, point to --> '{}' (bcz this is what this in global points to.)

1. Arrow functions were introduced in JavaScript to provide a more concise syntax for writing functions, particularly for short, inline functions. They offer a more compact and visually cleaner way to write functions, especially when the function body consists of a single expression. Arrow functions also have some unique scoping behavior compared to traditional function expressions.

Here are some reasons why arrow functions were introduced:

1. Concise Syntax: Arrow functions allow you to write shorter function expressions, reducing the amount of boilerplate code. This can make your code easier to read and maintain.

2. Lexical this: Arrow functions capture the value of this from their surrounding context, whereas traditional function expressions create their own this context. This behavior can help avoid common pitfalls and confusions when dealing with this in callbacks and nested functions.

3. Implicit Return: If an arrow function's body consists of a single expression, it is implicitly returned. This can be convenient for writing simple functions that return a value.

4. No Binding of arguments: Arrow functions do not have their own arguments object. Instead, they inherit the arguments from their containing scope.

5. No Prototype: Arrow functions do not have their own prototype property, making them unsuitable for use as constructors for creating instances.

## Inside an `Object` :

-   It always points to `{}`.
-   If current Object has a parent :
    -   Parent is an function (arrow|annonymous|named|IIFE) --> point to `this` of the function.
    -   Parent is an object --> point to `this` of that object.

## `this` in Global code :

-   points to --> {}. | in NodeJs based runtimes.
-   points to --> `Window` object in browser.
