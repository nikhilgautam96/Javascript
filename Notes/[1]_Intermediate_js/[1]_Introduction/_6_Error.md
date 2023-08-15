# Error types :-

1. `ReferenceError` :

-   It is caught in the execution phase (phase 2 of execution).
-   some line of code might get executed before this error is thrown.
-   It is thrown when we try to look for a memory location which is either not allocated or allocated but is inaccessible right(while in TDZ).
-   eg 1:-

```js
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
```

-   eg 2:-

```js
console.log(x); // ReferenceError: x is not defined
let a = 20;
```

2. `SyntaxError` :

-   It is thrown in the Parsing phase.
-   not even a single line of code is executed if this error is thrown.
-   eg 1:-

```js
const a;
a = 10; // SyntaxError: Missing initializer in const declaration
```

3. `TypeError` :

-   Thrown in execution phase, so lines before the error line will execute.
-   eg :-

```js
const c = 10;
c = 20; // TypeError: Assignment to constant variable.
```
