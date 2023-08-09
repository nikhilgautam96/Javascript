# Contents :

1. [Introduction to JS.](../Notes/_1_Intermediate_js/_00_Introduction.md)

# What -> Where -> How -> How_Not :

-   **_`We will learn JS ina a (What, Where, How and How_not) way.`_**
-   `What` : will tell what is the topic about and the deatils of that topic.
-   `where` : will tell where can we use that topic.
-   `How` : How should we use/implement the topic.
-   `How_not` : how we should not use/implement it.

`Uses of Closures`:

-   Module Design Pattern
-   Currying
-   Functions like once
-   memoize
-   I maintaining state in async world
-   setTimeouts
-   Iterators

1. Closures with Arrow Functions:

```js
const outerVariable = 'I am from outer scope';

const arrowClosure = () => {
    console.log(outerVariable);
};

arrowClosure(); // This will log: "I am from outer scope"
```

2. Closures with Methods:

```js
const obj = {
    data: 'Hello from object',
    method: function () {
        console.log(this.data);
    },
};

obj.method(); // This will log: "Hello from object"
```

3. Closures in Callbacks:

```js
function fetchData(callback) {
    const data = 'Async data';
    setTimeout(function () {
        callback(data);
    }, 1000);
}

fetchData(function (result) {
    console.log(result); // This will log: "Async data"
});
```

4. Closures with Promises and Async/Await:

```js
async function asyncFunction() {
    const data = await fetchData();
    console.log(data);
}

asyncFunction();
```

5. closure with classes

```js
class Counter {
    constructor() {
        // Private variable captured by the closure
        let count = 0;

        // Public method that accesses the private variable
        this.increment = function () {
            count++;
            console.log(`Count: ${count}`);
        };
    }
}

const counter1 = new Counter();
counter1.increment(); // Output: Count: 1
counter1.increment(); // Output: Count: 2

const counter2 = new Counter();
counter2.increment(); // Output: Count: 1 (independent instance)
```
