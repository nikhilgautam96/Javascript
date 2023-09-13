# Use `Strict mode` :-

-   It makes the code more `maintainable`, `readable`.
-   Avoids unexpected behaviour.

```js
'use strict';
// 1
// a = 10; // ReferenceError: a is not defined

// 2
delete Object.prototype; // TypeError: Cannot delete property 'prototype' of function Object() { [native code] }

// 3
function f(x, x, x) {
    // Strict mode - "SyntaxError: Duplicate parameter name not allowed in this context"
    console.log(x, x, x); // w/o strict mode - 4 4 4
}
f(1, 2, 4);
```
