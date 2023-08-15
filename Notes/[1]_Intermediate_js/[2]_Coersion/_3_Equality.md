## `===` Strict equality operator :-

```JS
Comparison (x === y) :-

if(typeof(x) === typeof(y)) {
    if(typeof(x) === "number") {
        if(x === NaN || y === NaN) {
            return false;
            // NOTE : "NaN" is the only number in JS that is not equal to itself.
        } else if((x === 0 && y === -0) || (x === -0 && y === 0)) {
            return true;
        } else if(x == y) {
            // 'x' has same value as 'y'.
            return true;
        } else {
            return false;
        }
    } else {
        return SameValueNonNumber(x, y);
    }
} else {
    return false;
}
```

### SameValueNonNumber(x, y) :-

```JS
Assert -: typeof(x) === typeof(y)
if(typeof(x) is undefined) {
    return true;
} else if(typeof(x) is null) {
    return true;
} else if(typeof(x) is string) {
    if( 'x' & 'y' are same sequence of code units) {
        return true;
    } else {
        return false;
    }
} else if(typeof(x) is boolean) {
    if((x & y) both are "true" or both are "false") {
        return true;
    } else {
        return false;
    }
} else if(typeof(x) is symbol) {
    if((x & y) are the same symbol value) {
        return true;
    } else {
        return false;
    }
} else if((x & y) are the same object value) {
    return true;
} else {
    return false;
}
```

## `==` Abstract equality operator :-

```JS
if (typeof(x) === typeof(y)) {
    return `result of performing StrictEqualityComparison x === y`;
} else if((x === "null" && y === "undefined") || (x === "undefined" && y === "null") || (x === "null" && y === "null") || (x === "undefined" && y === "undefined")) {
    return true;
} else if(typeof(x) === "number" && typeof(y) === "string") {
    return "result of (x == ToNumber(y))";
} else if(typeof(x) === "string" && typeof(y) === "number") {
    return "result of (ToNumber(x) == y)";
} else if(typeof(x) === "boolean") {
    return "result of (ToNumber(x) == y)";
} else if(typeof(y) === "boolean") {
    return "result of (x == ToNumber(y)";
} else if((typeof(x) == "string" || typeof(x) == "number" || typeof(x) == "symbol") && typeof(y) == "object") {
    return "result of x == ToPrimitive(y)";
} else if(typeof(x) == "object" && (typeof(y) == "string" || typeof(y) == "number" || typeof(y) == "symbol")) {
    return "result of ToPrimitive(x) == y";
} else {
    return false;
}
```

# Deep Compare JS Objects :-

1. `JSON.stringify() method` :

-

```js
const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 35,
};
const person2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 35,
};
const person3 = {
    age: 35,
    firstName: 'John',
    lastName: 'Doe',
};
JSON.stringify(person1) === JSON.stringify(person2); // true
// FLAW |==> if order of properties is changed then it returns false.
JSON.stringify(person1) === JSON.stringify(person3); // false
```

2. `Comparisons using Lodash library` or `deep-equal library` :

-

```js
// "npm i lodash"
// "npm i deep-equal"
const _ = require('lodash');
const deepEqual = require('deep-equal');
const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 35,
};

const person2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 35,
};
const person3 = {
    age: 35,
    firstName: 'John',
    lastName: 'Doe',
};
console.log(_.isEqual(person1, person2)); // true
console.log(_.isEqual(person1, person3)); // true

console.log(deepEqual(person1, person2)); // true
console.log(deepEqual(person1, person3)); // true
```

# Deep Compare JS arrays :-

1. `JSON.stringify() method` :

```js
let i = [1, true, 'a'];
let j = [1, true, 'a'];
let k = [1, 'a', true];
console.log(JSON.stringify(i) === JSON.stringify(j)); // true
console.log(JSON.stringify(j) === JSON.stringify(k)); // false
```

2. `Comparisons using Lodash library` or `deep-equal library` :

```js
let i = [1, true, 'a'];
let j = [1, true, 'a'];
let k = [1, 'a', true];
console.log(_.isEqual(i, j)); // true
console.log(_.isEqual(j, k)); // false

console.log(deepEqual(i, j)); // true
console.log(deepEqual(j, k)); // false
```
