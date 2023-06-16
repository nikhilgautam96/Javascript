# `let`  vs  `var`  vs  `const`  :-
- Formal Declaration : declaration using `var`, `let`, `const` is a formal declaration.

## ***`var`*** :- 
- The var statement declares a `function-scoped` or `globally-scoped` variable, optionally initializing it to a value.
- Inside a function `var` gets `function scope` whether it is inside a block or not.
```js
// Iside a "function" var will always get the function scope whether it is inside a block or not.
consumer = 'nikhil';
function p() {
    console.log(consumer);          // undefined
    if (consumer == 'nikhil') {
        var consumer = "gautam";
        console.log(consumer);      
    }
    console.log(consumer);          // undefined
}
p();
```
- Oustside a function, even if it is inside any block, it will have `global scope`.
- eg 1 :-
```JS
    console.log(x);  // "undefined" --> bcz of `lexical Scoping` and `Hoisting`
    console.log(y);  // "undefined" --> bcz of `lexical Scoping` and `Hoisting`
    console.log(m);  // "undefined" --> bcz of `lexical Scoping` and `Hoisting`

    function fun() {
        console.log("x inside fun() - ", x);        // undefined
        console.log(z);     // "undefined" --> bcz of `lexical Scoping` and `Hoisting`
        var z = 50;
        console.log(z);
    }
    fun();
    // console.log(z);     // ReferenceError: z is not defined

    {
        var x = 10;
        console.log(x);
    }
    console.log(x);

    if(true) {
        var y = 20;
        console.log(y);
    }
    console.log(y);
    if(false) {
        var m = 30;
        console.log(m);
    }
    console.log(m);
```
- eg 2 :-
```js
function test() {
    for(var i = 0; i<3; i++) {
        setTimeout(function exec() {
            console.log(`i : ${i}`);
        }, i*1000);
    }
}
test();
// OUTPUT :
// i : 3
// i : 3
// i : 3

// Reason : here closure remembers the function scope of variable 'i' bcz of 'var'. 
//          every time a new block is created.
```

## ***`let`*** :- 
- The `let` declaration always declares a `block-scoped` local variable.
- If we declare let outside any block, it still won't get complete global scope.
```JS
{
    let x = 10;
    console.log(x);
}
// console.log(x);     // ReferenceError: x is not defined

function fun() {
    // console.log(y);     // ReferenceError: y is not defined
    let y = 20;
    console.log(y);
}
fun();
// console.log(y);     // ReferenceError: y is not defined

// ----------------------------------XXXXXXXXXX------------------------------------------ //

let a = 15;
// let a = 25;      // let does not allow redeclaration. 
                    //        - "SyntaxError: Identifier 'a' has already been declared"

// ----------------------------------XXXXXXXXXX------------------------------------------ //

// `let` will not give complete global scope if declared outside any block, unlike `var`.
// console.log(d);     // ReferenceError: Cannot access 'd' before initialization
let d = "nikhil";
```
- 
```js
function test_1() {
    for(let i = 0; i<3; i++) {
        setTimeout(function exec() {
            console.log(`i : ${i}`);
        }, i*1000);
    }
}
// test_1();
// OUTPUT :
// i : 0
// i : 1
// i : 2

// Reason : here closure remembers the block scope of variable 'i' bcz of 'let'. 
//          every time a new block is created. everytime the loop runs a new block is created
//          and the value of 'i' is different in each block.
// above code is same as :-
function test_2() {
    for(var i = 0; i<3; i++) {
        let j = i;
        setTimeout(function exec() {
            console.log(`j : ${j} ---- i : ${i}`);
        }, i*1000);
    }
}
test_2();
// OUTPUT :
// j : 0 ---- i : 3
// j : 1 ---- i : 3
// j : 2 ---- i : 3
// Reason : here closure remembers the block scope of variable 'j' bcz of 'let'. 
//          every time a new block is created. everytime the loop runs a new block is created
//          and the value of 'j' is different in each block. And 'i' is function scope.
```

## ***`const`*** :-
- The const declaration creates block-scoped constants, much like variables declared using the let keyword. 
- The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be redeclared (i.e. through a variable declaration). 
- However, if a constant is an object or array its properties or items can be updated or removed.
