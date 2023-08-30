# call() in JS :-

-   ![call_apply_bind](../../Images/call_apply_bind.png)
-   SYNTAX :

```js
call(thisArg);
call(thisArg, arg1);
call(thisArg, arg1, arg2);
call(thisArg, arg1, arg2, /* …, */ argN);
// " [function_name].call(thisArg, arg1, /* …, */ argN) ";
```

-   `thisArg` : whichever object we pass as thisArg will be used as `this` .

## When `thisArg` is not provided :-

```js
globalThis.globProp = 'Wisen';

function display() {
    console.log(`globProp value is ${this.globProp}`);
}

display.call(); // Logs "globProp value is Wisen"
```

```js
// In strict mode, the value of this is not substituted, so it stays as undefined.

'use strict';
globalThis.globProp = 'Wisen';
function display() {
    console.log(`globProp value is ${this.globProp}`);
}

display.call(); // TypeError: Cannot read the property of 'globProp' of undefined
```

## Transforming methods to utility functions :-

-   `call()` can be used to convert methods to ustility functions.
-   eg : we can use `map() with array-like objects that are not arrays`.

```js
// Transforming methods to utility functions :-
const obj = {
    length: 3,
    0: 'nikhil',
    1: 'gautam',
    2: 'nikku',
    3: 'Aditya',
    4: 'gautam',
};
console.log(
    Array.prototype.map.call(obj, (elem, idx) => {
        console.log(elem, idx);
        // nikhil 0
        // gautam 1
        // nikku 2
        return elem + '😎';
    })
);
// [ 'nikhil😎', 'gautam😎', 'nikku😎' ]
/*
1. An object named obj is defined with properties that resemble an array structure. 
    The properties include a length property and properties with numeric indices 0, 1, and 2, 
    each holding a string value.

2. The Array.prototype.map method is used on the obj object. The map method creates a new array by 
    iterating through each element of the original array-like object and applying a provided callback function 
    to each element.

3. The call method is used to invoke the map method on obj, treating it as an array-like object. 
    The call method sets the this value of the map method to obj, allowing you to use array methods 
    on non-array objects.

4. The provided callback function (elem) => elem + '😎' takes an element (elem) as a parameter and 
    appends the "😎" emoji to it.

5. The map method iterates through each element of the obj object and applies the callback function to each element.

6. The result of the map operation is an array containing the transformed elements. However, 
    in the provided code, this result is not assigned to any variable or logged, so it is not used or displayed.
*/
```
