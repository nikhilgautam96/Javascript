[](#intro)

## Types/Categories of Programming language :-

1.  Based on Programming paradigm, or aproach to solve a problem.
    |Sno.|`Imperative` | `Declarative` |
    |-|---- |---------|
    |1.|Here we tell the proceesor what process to do & how to do. - eg:- {c, c++, java, javascript(to most extent), etc}.| Here we tell the processor what process to do, how the language does the process is none of our concern. eg:- {SQl, etc}|
    |2.|eg:- like in JS we tell `arr[2]` to get the data from second index of an array.| eg:- in SQL we tell to find a value using `where` clause but how the compiler finds it is none of our business.|

2.  Based on the way a language executes the code lines it can be categorised into three major types :-
    |`Compiled` | `Interpreted` |`Hybrid`|
    |----|---------|---|
    |c++ |shell script (purely interpreted)|Java, Javascript, python, etc.|

## Javascript :-

1. It is a `multipurpose(used for web apps, mobile apps, etc.)` and `multi-paradigm(it supports different styles of programming - functional progamming, object oriented programming, procedural programming, etc.)` programming language(bcz it has decision making capability).
2. It is not a purely scripting language like the shell script, rather a `general-purpose programming language`.
3. It's official name is `EcmaScript`. Developed in 1995 by Brendan Eich became ECMA standard in 1997.
4. **`Apart from the primitive types, everything in JS is an object.`**

## 4 Pillars of JS :-

1. `Coersion`
2. `Scopes`
3. `Asynchronous features`
4. `Objects and classes`

## Data types in JS :-

-   The `8-different ECMAScript language types` are :

    -   Primitives :
        1. `Undefined`,
        2. `Null`,
        3. `Boolean`,
        4. `Symbol`,
        5. `BigInt`,
        6. `String`,
        7. `Number`,
    -   Non-Primivitive :
        1. `Object`.

-   2.  `array`.
    3.  `function`.
-   both array and functions are objects underneath. we can see it by doing `__proto__.__proto__` on them. as we get `[Object: null prototype] {}`.

-   `NOTE` : JS does not differentiate between character and string. ie - it does not has any seperate type as character.

## Program vs Process :-

-   A piece of code in a file is a program.
-   A program in a running state is a process.

## Variables in JS :-

-   defined using :
    1. `var`
    2. `let`
    3. `const`

## Keywords in JS :-

-   Keywords are special reserved words that can be used only to serve its defined purpose in JS.
-   eg :-

```JS
    console.log(let);       // gives an error
    var const = 10;         // gives an error
```

## Statement vs Expression :-

-   `(x + 2)` is an statement.
-   `a = 1 + (x + 2)` is an expression. 1 or more statements together.

## Boxing :-

-   `Boxing` as a term does not exists in JS docs, but it is a term given by the programming community to justify certain phenomenon that happens in JS language.
-   eg :-

```JS
9.toString();           // gives error.
(9).toString();         // it does not give any error as the () does boxing. ie - converts it to Number.
Number(9).toString();   // here also we are explicitly converting value to Number type using wrapper class "Number".

"10".toString();        // this does not need boxing.
```

-   by default, When you access the `__proto__` property on a primitive like a number (x being 10 in your example), JavaScript might temporarily wrap the primitive in a corresponding wrapper object to provide access to properties and methods. This behavior can vary depending on the JavaScript engine and environment.
    eg : -

```js
let x = 10;
console.log(x.__proto__.__proto__); // [Object: null prototype] {}
```

## Different ways to show/print output in JS :-

1. `console.log("Heloo world!!");`
