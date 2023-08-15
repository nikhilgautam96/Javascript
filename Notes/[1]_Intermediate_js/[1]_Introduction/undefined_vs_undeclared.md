# `Undefined` vs `Undeclared`(or not defined) :-

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
