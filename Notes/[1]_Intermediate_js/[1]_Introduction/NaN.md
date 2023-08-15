## NaN :-

-   NaN is the only number in JS that doesn't follow the Identity property and is not equal to itself.

```JS
function check() {

    return NaN;
}
let x = check();
```

## How can we check if `x is NaN` :-

1. `isNaN()` will not show correct output always :-

-   bcz it does coresion(ToNumber()) on the arguments if they are not already of type `Number`.
-   eg :-

```JS
let a = '10';
let b = 'abc';
let c = 'sanket';
let d = 10 - c;
console.log(a, b, c, d); // 10 abc sanket NaN

console.log(isNaN(a)); // false
console.log(isNaN(b)); // true ---> we can see in all these cases eventhough it is no `NaN` but we are getting "true" while doing validation. this is because of coersion.
// isNaN() --> calls ToNumber() internally.
console.log(isNaN(c)); // true
console.log(isNaN(d)); // true
```

2. using `Number.isNaN()` :-

-   This function doesn't do coercion.
-   eg :-

```JS
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN('abc')); // false
```

3. using below logic :-

-   eg :-

```JS
let x = '';
console.log(x);
console.log(typeof x == 'number' && isNaN(x) ? 'NaN value' : 'Not NaN value'); // Not NaN value
```
