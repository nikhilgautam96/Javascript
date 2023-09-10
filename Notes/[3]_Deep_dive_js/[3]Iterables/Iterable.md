# Iterables :-

-   They are objects that can be iterated over - with for..of loop.
-   Iterables must implement the `Symbol.iterator` method.

```js
// String is built-in iterable object.
let newString = '';
for (const x of 'Nikhil Gautam') {
    newString += '_' + x;
}
console.log(newString); // _N_i_k_h_i_l_ _G_a_u_t_a_m
// Array is built-in iterable object.
let newArray = [];
for (const y of [1, 2, 3, 4]) {
    newArray.unshift(y);
}
console.log(newArray); // [ 4, 3, 2, 1 ]
```

# Iterators :-

-   An object becomes an iterator when it implements the `next()` method. Thus, generates the next value.
-   The next() method must return an object with 2 properties:
    1. `Value` : next-value
    2. `done` : True(iterator completed)/False(iterator returned a new value)
