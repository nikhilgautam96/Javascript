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
