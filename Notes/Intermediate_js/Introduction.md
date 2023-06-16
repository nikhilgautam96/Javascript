## Categories of language :-
- Based on the way a language executes the code lines it can be categorised into three major types :-
    1. `Compiled`           : c++
    2. `Interpreted`        : shell script (purely interpreted)
    3. `Hybrid`             : Java, Javascript, python, etc.

## Javascript :-
- It is a `multipurpose(used for web apps, mobile apps, etc.)` and `multi-paradigm(it supports different styles of programming - functional progamming, object oriented programming, procedural programming, etc.)` programming language(bcz it has decision making capability).
- It is not a purely scripting language like the shell script.
- It's official name is `EcmaScript`.
- **`Apart from the primitive types, everything in JS is an object.`**
#### `4 Pillars of JS` :-
1. `Coersion`
2. `Scopes`
3. `Asynchronous features`
4. `Objects and classes`

## Boxing :-
- `Boxing` as a term does not exists in JS docs, but it is a term given by the programming community to justify certain phenomenon that happens in JS language.
- eg :-
```JS
9.toString();           // gives error.
(9).toString();         // it does not give any error as the () does boxing. ie - converts it to Number.
Number(9).toString();   // here also we are explicitly converting value to Number type using wrapper class "Number".

"10".toString();        // this does not need boxing.
```

## Different ways to show/print output in JS :-
1. `console.log("Heloo world!!");`

## Data types in JS :-
- The `8-different ECMAScript language types` are :
    - Primitives :
        1. `Undefined`, 
        2. `Null`, 
        3. `Boolean`, 
        4. `Symbol`, 
        5. `BigInt`, 
        6. `String`, 
        7. `Number`,
    - Non-Primivitive :
        1. `Object`.

- `NOTE` : JS does not differentiate between character and string. ie- it does not has any seperate type as character.

## Operators in JS :-
- `typeof <value>` - it returns the type of any value in string format.
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

- `arithmetic operators` :
```JS
// arithmetic operators
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2);
console.log(10 % 2);
```

- `assignment operators` :
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

- `logical operators` :
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

- `comparison operators` :
```JS
    // comparison operators
    // " > "            : greater than
    // " >= "           : greater than equal to
    // " < "            : less than
    // " <= "           : less than equal to
    // " != "           : abstract not equal to
    // " !== "          : strict not equal to
    // " == "           : abstract equality
    // " === "          : strict equality
```

- `String based operator` :  " + " concatenation operator.

- `Bitwise operator` :
```JS
// Bitwise operator
    // " & "            : bitwise AND
    // " | "            : bitwise OR
    // " ^ "            : bitwise XOR
    // " ~ "            : bitwise NOT
    // " << "           : bitwise left shift    = multiply by 2
    // " >> "           : bitwise right shift   = divide by 2
console.log(5 & 3);     // 1
console.log(8 | 1);     // 9
console.log(3 ^ 3);     // 0
console.log(5 << 2);    // 20
console.log(5 >> 1);    // 2
```

- `Ternary operator` :  `(condition) ? (expression 1) : (expression 2);`

- `Exponentiation/Power operator` :
```JS
console.log(2**4);      // 2^4 = 16
```

## Program vs Process :-
- A piece of code in a file is a program.
- A program in a running state is a process.

## Variables in JS :-
- defined using :
    1. `var`
    2. `let`
    3. `const`

## Keywords in JS :-
- Keywords are special reserved words that can be used only to serve its defined purpose in JS.
- eg :- 
```JS
    console.log(let);       // gives an error
    var const = 10;         // gives an error
```

## Statement vs Expression :-
- `a = 1 + (x + 2)` is an expression.
- `(x +2)` is an statement.

## Loops in JS :-
1. `while` : 
```JS
let i = 0;
while(i < 10) {
    console.log(i);
    i += 1;
}
```
2. `for` :
```JS
for(let i = 0; i < 10; i++) {
    console.log(i);
}
```

## break vs continue :-
- `break` :
```JS
// break : breaks out of nearest loop.
for(let i = 1; i<20; i++) {
    if(i%7 === 0) {
        console.log("breaking now");
        break;
    }
    console.log(i);
}
for(let i = 0; i<5; i++) {
    let str = "";
    for(let j = 0; true; j++) {
        str += "*";
        if(i == j) {
            break;
        }
    }
    console.log(str);
}
```
- `continue` :
```JS
// continue : we move to the nearest loop for execution.
for(let i = 1; i<10; i++) {
    if(i%2 === 0) {
        console.log("continuing now");
        continue;
    }
    console.log(i);
}
```

## switch :-
```JS
let exp = "%";
let a = 10;
let b = 20;
switch(exp) {
    case "+" :
        console.log(a + b);
        break;
    case "-" :
        console.log(a - b);
        break;
    case "*" :
        console.log(a * b);
        break;
    case "%" :
        console.log(a % b);
        break;
    case "/" :
        console.log(a / b);
        break;
    default :
        console.log("default");
        break;
}
```