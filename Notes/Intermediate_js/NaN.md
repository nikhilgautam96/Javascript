## NaN :-
- NaN is the only number in JS that doesn't follow the Identity property and is not equal to itself.

- `Situation 1` :-
```JS
function check() {

    return NaN;
}
let x = check();
```
- How can we check if `x is NaN` :-
    - `isNaN()` will not show correct output always :-
    ```JS
    let a = "10";
    let b = "abc"; 
    let c = "sanket";
    let d = 10 - c;
    console.log(a, b, c, d);

    console.log(isNaN(a));          // false
    console.log(isNaN(b));          // true ---> we can see in all these cases eventhough it is no NaN but we are getting "true" while doing validation. this is because of coersion.
    // isNaN() --> calls ToNumber() internally.
    console.log(isNaN(c));          // true
    console.log(isNaN(d));          // true
    ```
    - How do we then do the checking :-
        1. using `Number.isNaN()` :-
        ```JS
        console.log(Number.isNaN(NaN));
        console.log(Number.isNaN("abc"));
        // This function doesn't do coercion
        ```
        2. using below logic :-
        ```JS
        let x = "";
        console.log(x);
        console.log((typeof(x) == 'number' && isNaN(x)) ? "NaN value" : "Not NaN value");
        ```


