# Doubts :

## React :

1. If we have app that increments/decrements the value of a element on clicking the button element.
   So can we say that the button element has exposed the 'onClick()' function to the outer world, which in return accesses the private methods that is responsible for updating the value of the element. just like in closure, we return a function and tge function can access the private members of the parent.
   So we always expose the event functions (like - 'onClick()') only to the outer world??

## JS :

1. Everything except primitives in JS are objects. Then why below code does not throw error;

```js
let x = 10;
console.log(x.__proto__.__proto__); // [Object: null prototype] {}
```
