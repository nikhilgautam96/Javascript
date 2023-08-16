# Closures :-

-   Functions along with its lexical scope is closure.
-   Closure is when a function remembers it's lexical scope even when the function is executed outside the lexical scope.
-   Lexical scoping allows nested functions to "remember" their surrounding context and access variables from their enclosing scopes, even after the outer function has finished executing. This behavior is often referred to as a `closure` and is a powerful feature in JavaScript.

```js
function todo(task) {
    console.log('Start of todo');
    setTimeout(function fun() {
        console.log('completed ', task);
    }, 2000);
    console.log('End of todo');
}
console.log('Starting');
todo('assignments');
console.log('Ending');
// OUTPUT :
// Starting
// Start of todo
// End of todo
// Ending
// completed  assignments
```

-   In closure, the nested function does not just remember the value of variable but actually it remembers the variable itself(ie. from which scope the variable is coming) and so if we change the value of the variable we can see the changed value is reflected.

-   eg 1 :-

```js
function todo(task) {
    console.log('started todo');
    setTimeout(function fun() {
        console.log('Completed ', task);
    }, 5000);
    task = 'Nikhil';
    console.log('completed todo');
}
console.log('Starting');
todo('assignment');
console.log('Ending');
// OUTPUT :
// Starting
// started todo
// completed todo
// Ending
// Completed  Nikhil
```

-   eg 2 :-

```js
function a(name) {
    name = 'Gautam';
    return function b() {
        console.log(name);
    };
}

let x = a('Nikhil');
console.log(x);
x();
// OUTPUT :
// [Function: b]
// Gautam
```

-   eg 3 :-

```js
function fun() {
    let name = 'Harshit';

    function callback(params) {
        console.log(college);
        console.log(name);
    }

    return callback;
}
let x = fun();
x();
var college = 'IIT Delhi';
var name = 'Nikhil';
x();
// OUTPUT :
// undefined
// Harshit
// IIT Delhi
// Harshit
```

-   eg 4 :-

```js
function fun() {
    // let name = "Harshit";
    setTimeout(function callback(params) {
        console.log(college);
        console.log(name);
    }, 5000);
    // let name = "Harshit";
    name = 'Harshit';
}
console.log(fun());
var college = 'IIT Delhi';
var name = 'Nikhil';

// OUTPUT :
// undefined
// IIT Delhi
// Nikhil
```

-   eg 5 :-

```js
function fun() {
    // let name = "Harshit";
    setTimeout(function callback(params) {
        console.log(college);
        console.log(name);
    }, 5000);
    let name = 'Harshit';
    // name = "Harshit";
}
console.log(fun());
var college = 'IIT Delhi';
var name = 'Nikhil';

// OUTPUT :
// undefined
// IIT Delhi
// Harshit
```

-   eg 6 :-

```js
function fun(task1, task2) {
    task1 = 'Nikhil';
    setTimeout(function gun() {
        console.log('completed', task1);
    }, 2000);
    task1 = task2;
    task2 = 'Gautam';
}

fun(12, 34);
// completed 34
```

-   `How actually the variables still persist even after function is completed and removed from call stack??`
    -   JS maintains & manages a seperate **_`closure execution context`_**. there it maintains all the variables(along with its scope) and not the values.
-   eg 1 :-

```js
function test() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function exec() {
            console.log(`i : ${i}`);
        }, i * 1000);
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

-   eg 2:-

```js
function test_1() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function exec() {
            console.log(`i : ${i}`);
        }, i * 1000);
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
    for (var i = 0; i < 3; i++) {
        let j = i;
        setTimeout(function exec() {
            console.log(`j : ${j} ---- i : ${i}`);
        }, i * 1000);
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

-   **_VIMP : `demonstrate function scope without using 'let, const' keyword.`_**

```js
function test() {
    for (var i = 0; i<3; i++) {
        function wrap(x) {
            setTimeout(() => {
                console.log(x, i);
            }, i\*1000)
        }
        wrap(i);
    }
}
test();
```

-   eg 3:-

```js
const a = (function fun() {
    let counter = 0;
    return function gun() {
        counter += 1; // here it remembers its scope in fun() function block.
        // so it takes its value from that scope and adds 1 to it everytime.
        return counter;
    };
})();
console.log(a);
console.log(a());
console.log(a());
console.log(a());
// OUTPUT :
// [Function: gun]
// 1
// 2
// 3
```

## Test your Knowledge :

```js
closure: function fun() {
    let x = 10;
    return function () {
        console.log(x++);
    };
}
var a = fun();
var b = fun();
a(); // 10
a(); // 11
b(); // 10
b(); // 11
```
