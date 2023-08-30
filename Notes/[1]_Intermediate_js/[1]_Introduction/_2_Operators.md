# Operators in JS :-

## `typeof <value>`

-   it returns the type of any value in string format.

```JS
// It is not necessary to use brackets with "typeof".
console.log(typeof 12);                     // "number"
console.log(typeof "abcd");                 // "string"
console.log(typeof -0);                     // "number"
console.log(typeof undefined);              // "undefined"
console.log(typeof null);                   // "object"
console.log(typeof {"nikhil" : 123});       // "object"
console.log(typeof NaN);                    // "number"
console.log(typeof Symbol('hey'));          // "symbol"
console.log(typeof true);                   // "boolean"
console.log(typeof typeof 12);              // "string"
console.log(typeof(12));                    // "number"
console.log(typeof(typeof(12)));            // "string"
```

## `arithmetic operators` :

```JS
// arithmetic operators
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2);
console.log(10 % 2);
```

## `assignment operators` :

```JS
// assignment operators
let x = 10;
x += 2;
x -= 2;
x *= 2;
x /= 2;
x %= 2;
// Note : if we want to have floor divisions.
// 1st way --> parseInt(5/2)
// 2nd way --> Math.floor(5/2)
```

## `logical operators` :

```JS
// logical operators
    // When we talk logical operators --> it refers to "logic gates"
    // For logical operators, the operands are evaluated to booleans 1st and then operators are applied.
console.log("OR Gate : ");
console.log("   - if(1st value is true) ==> { return the 1st value. }");
console.log("   - if(1st value is false) ==> { return whatever is the 2nd value. }");
console.log((10 > 5) || (7 < 6));       // true
console.log(4 || 0);                    // 4
console.log(0 || 4);                    // 4
console.log(4 || 5);                    // 4
console.log(5 || 4);                    // 5
console.log(-4 || 5);                   // -4
console.log(0 || 4);                    // 4
console.log(-0 || 4);                   // 4
console.log(0 || -0);                   // -0
console.log(-0 || 0);                   // 0
console.log((2>1) || "nikhil");         // true
console.log(null || null);              // null : "null" is falsy value
console.log(null || undefined);         // undefined
console.log(undefined || undefined);    // undefined : "undefined" is falsy value
console.log(undefined || null);         // null
console.log(null || 5);                 // 5
console.log(undefined || 5);            // 5

console.log("AND Gate : ");
console.log("   - if(1st value is true) ==> { return whatever is the 2nd value. }");
console.log("   - if(1st value is false) ==> { return the 1st value. }");
console.log((10 > 5) && (7 < 6));       // false
console.log(4 && 0);                    // 0
console.log(0 && 4);                    // 0
console.log(4 && 5);                    // 5
console.log(5 && 4);                    // 4
console.log(-4 && 5);                   // 5
console.log(0 && 4);                    // 0
console.log(-0 && 4);                   // -0
console.log(0 && -0);                   // 0
console.log(-0 && 0);                   // -0
console.log((2>1) && "nikhil");         // nikhil
console.log(null && null);              // null : "null" is falsy value
console.log(null && undefined);         // null
console.log(undefined && undefined);    // undefined : "undefined" is falsy value
console.log(undefined && null);         // undefined
console.log(null && 5);                 // null
console.log(undefined && 5);            // undefined
```

## `comparison operators` :

```JS
    // comparison operators
    " > "            : greater than
    " >= "           : greater than equal to
    " < "            : less than
    " <= "           : less than equal to
    " != "           : abstract not equal to
    " !== "          : strict not equal to
    " == "           : abstract equality
    " === "          : strict equality
```

## `String based operator` :

-   " + " concatenation operator.

## `Bitwise operator` :

```JS
// Bitwise operator
    " & "            : bitwise AND
    " | "            : bitwise OR
    " ^ "            : bitwise XOR
    " ~ "            : bitwise NOT
    " << "           : bitwise left shift    = multiply by 2
    " >> "           : bitwise right shift   = divide by 2
console.log(5 & 3);     // 1
console.log(8 | 1);     // 9
console.log(3 ^ 3);     // 0
console.log(5 << 2);    // 20
console.log(5 >> 1);    // 2
```

## `Ternary operator` :

-   SYNTAX : `(condition) ? (expression 1) : (expression 2);`

## `Exponentiation/Power operator` :

```JS
console.log(2**4);      // 2^4 = 16
```
