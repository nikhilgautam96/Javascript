# Scopes :-

-   In simple words, scope is simply where to look for things. we are looking for variables and functions.
-   There are 4 types of scopes.
    1. `Global Scope`
    2. `Function Scope`
    3. `Block Scope`
    4. `Lexical Scope`

## `Global Scope` :-

-   If a variable is present in the global scope, then it is accessible everywhere in the JS file.
-   There are many ways to define a variable in global scope, one way is to declare/define variable outside any function or a block.
-   eg 1 :-

```JS
var name = "Nikhil";                    // global variable.
let age = 10;
function greet() {
    console.log("greetings ! ", name, " , ", age);

    function test() {
        console.log("test");
    }
}
function fun() {
    console.log("have funs ! ", name, " , ", age);
}
greet();
fun();

// test(); // this will throw error :- "ReferenceError: test is not defined"
```

## `Function Scope` :-

-   In a function scope, the visibility of a variable/function is just inside the outer function.
-   The variable having function scope will be accessible anywhere inside the function, even before its declaration.

```JS
function fun() {
    console.log(x);     // "undefined"
    var x = 10;         // 'x' is local to the function 'fun()'.
    console.log("x is : ", x);
    function test() {
        console.log("inside nested function : ", x); // 'x' is accessible here as well.
    }
    test();
}
fun();
// console.log(x);         // "ReferenceError: x is not defined"
```

## `Block Scope` :-

-   ```JS
    {
        // This is a block in JS.
    }
    ```
-   If a variable/function is only accessible/visible inside a block then it will have a block scope.
-   Diff. block are - {if-else block, for block, while block, raw block}.
-   The variable having block scope will be accessible only after its declaration in that block.

```JS
if(true) {
    // console.log(x);     // ReferenceError: x is not defined
    let x = 10;
    console.log(x);
}
// console.log(x);     // ReferenceError: x is not defined

{
    // Raw Block
    let y = 20;
    console.log(y);
}
// console.log(y);         // ReferenceError: y is not defined
```

## `Lexical Scope` :-

-   before execution all the scope resolution is done during parsing phase and is called the lexical scoping.
-   Lexical scope is the ability for a function scope to access variables from the parent scope. We call the child function to be lexically bound by that of the parent function.

```JS
// Example 1
var teacher = "Sanket";
function fun() {
    var teacher = "Nikhil";
    console.log(teacher);       // "Nikhil"
}

console.log(teacher);           // "Sanket"
fun();
```

-   eg 2 :-

```js
var a = 10; // variable a assigned to 10

var func = function () {
    // outermost function
    var b = 20;
    console.log('a and b is accessible (outer):', a, b);
    var innerFunc = function () {
        // innermost function
        var c = 30;
        console.log('a and b and c is accessible (innner):', a, b, c);
    };
    innerFunc();
    return;
};
func(); // invoke function func
console.log('only a is accessible (global):', a);

//  In the above code, the value of variable a is accessible by all function scopes since it is in the global scope. Meanwhile, variable b is not accessible outside the function assigned to func. This is because the variable is of local scope for the function assigned to variable func. Another thing to note is that the function assigned to the innerFunc variable can access variable b and c. This is because the inner functions are lexically bound by the outer functions.

// `NOTE`: JavaScript uses a scope chain to find variables accessible in a certain scope. When a variable is referred to, JavaScript will look for it in the current scope and continue to parent scopes until it reaches the global scope. This chain of traversed scopes is called the scope chain.
```

-   `In JavaScript, lexical scoping is a principle that determines how variable names are resolved in nested functions. Lexical scoping means that variables are resolved based on their location in the source code, specifically their position within the nested function definitions.`

    -   When a function is defined inside another function, the inner function has access to variables and functions defined in its own scope, as well as in the scope of its parent function. This access is possible because the inner function retains a reference to its lexical environment, which includes all the variables and functions in the scope where it was defined.
        eg :-

    ```js
    function outer() {
        var x = 10;

        function inner() {
            console.log(x); // Accesses the variable x from the outer function's scope
        }

        inner(); // Prints 10
    }
    outer();
    ```

    -   Lexical scoping allows nested functions to "remember" their surrounding context and access variables from their enclosing scopes, even after the outer function has finished executing. This behavior is often referred to as a `closure` and is a powerful feature in JavaScript.

# AutoGlobal :-

-   Once inside a scope if we don't know about the scope of a variable we check the outer scopes one by one.
-   If the variable is not present in any scope then it is automatically assigned a global scope with default value as "undefined".

```JS
var teacher = "Sanket";
function fun() {
    var teacher = "Nikhil";
    teachingAssistant = "Vibhav";       // |--> it will become "autoglobal"
    console.log(teacher);               // "Nikhil"
    console.log(teachingAssistant);     // "Vibhav"
}

fun();
console.log(teacher);                   // "Sanket"
console.log(teachingAssistant);         // "Vibhav"  --> in global scope.
```

-   `NOTE` : autoglobal only works with "target" reference and not "source" reference.
-   `NOTE` : this happens during the execution phase, autoglobals are made global scoped during execution phase. ie. if we try to use the variable before it has been assigned any value/before it is made autoglobal it will give `"Reference error"`.

```JS
var teacher = "Sanket";
function fun() {
    var teacher = "Nikhil";
    teachingAssistant = "Vibhav";       // |--> it will become "autoglobal"
    console.log(teacher);               // "Nikhil"
    console.log(teachingAssistant);     // "Vibhav"
}

console.log(teachingAssistant);         // here teachingAssistant is "undeclared".
            // "ReferenceError: teachingAssistant is not defined"
            // reason : autoglobals are created during execution phase
            // and while in execution phase before calling "fun()"
            // so that "teachingAssistant" could become "autoglobal"
            // we tried to access it and thus it threw reference error
            // as JS does not have any info about the variable
            // "teachingAssistant" in global scope.
fun();
console.log(teacher);                   // "Sanket"
console.log(teachingAssistant);         // "Vibhav"  --> in global scope.
```

```JS
var teacher = "Sanket";
function fun() {
    console.log(subject);               // "undefined"
    var teacher = "Nikhil";
    var subject = "Javascript";
    teachingAssistant = "Vibhav";       // |--> it will become "autoglobal"
    console.log(teacher);               // "Nikhil"
    console.log(teachingAssistant);     // "Vibhav"
    console.log(subject);               // "Javascript"
}

fun();
console.log(teacher);                   // "Sanket"
console.log(teachingAssistant);         // "Vibhav"  --> in global scope.
console.log(teachingAssistant);         // "Vibhav"
console.log(subject);                   // "ReferenceError: subject is not defined"
```

```JS
function fun() {
    teachingAssistant = "Vibhav";       // this will not become autoglobal,
                                        // bcz in line 4 we have a fromal declaration.
    console.log(teachingAssistant);
    var teachingAssistant = "JD";
}

fun();
```

# `Undefined` vs `Undeclared` :-

-   `Undefined` :
    -   undefined is a variable state where the scopes actually knows about it but, in the execution phase we have not allocated any value to that variable. so it will take `undefined` as default value.
    -   In such cases if try using the variable as a source then it will give `undefined` as its value.
        eg:-

```JS
function fun() {
    console.log(name, typeof name);    // here 'name' will have a value 'undefined'. | type = "undefined"
    var name = "Nikhil";
    console.log(name, typeof name);    // here 'name' will have value as 'Nikhil'.   | type = "string"
}
fun();
```

-   `Undeclared` :
    -   undeclared is a variable state where we never formally declare(`using var, let, const or function`) a variable and before assigning it any value, so that it has chance to become autoglobal, we try to use it as a source.
    -   In such situation we will get error as - `ReferenceError: <variableName> is not defined`.
        eg :-

```JS
function gun() {
    console.log(name);          // undeclared
    name = "nikhil";            // chance of becoming 'autoglobal'
    console.log(name);
}
console.log("start");
gun();
```

## Assigning value `undefined` to a variable :

-   **_NOTE : It is not a good practise to assign `undefined` to a variable explicitly. bcz, the value `undefined` is reserved for a specific purpose and that is - to demonstrate the variable was never assigned any value and so it has a default placeholder and that is `undefined`._**
