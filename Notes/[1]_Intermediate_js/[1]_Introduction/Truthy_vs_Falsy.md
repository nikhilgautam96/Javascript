# Truthy and Falsy values :-

-   | Truthy        | Falsy            |
    | ------------- | ---------------- |
    | '0'           | 0                |
    | '-0'          | -0               |
    | true          | false            |
    | []            | null             |
    | {}            | Undefined        |
    | function() {} | NaN              |
    | Symbol()      | ''               |
    |               | 0n (BigInt zero) |

```js
// only falsy value that is not equal to itself.
console.log(NaN === NaN); // false
```

-

```js
// Falsy Values
if (
    null ||
    undefined ||
    NaN ||
    '' ||
    '' ||
    `` ||
    0 ||
    -0 ||
    0n ||
    -0n ||
    (function () {})() ||
    false
) {
    // all the above are falsy values.
    const n = NaN;
    console.log('false', n);
}

// Thruthy Values
if ('0' && '-0' && [] && {} && function () {} && (() => {}) && true) {
    // all the above are falsy values.
    const n = NaN;
    console.log('true', n);
}
```
