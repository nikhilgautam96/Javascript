# Types of programming language :-

1. **_`Imperative`_** :
    - Here we tell the proceesor what process to do & how to do.
    - eg:- {c, c++, java, javascript(to most extent), etc}.
    - like in JS we tell `arr[2]` to get the data from second index of an array.
2. **_`Declarative`_** :
    - Here we tell the processor what process to do, how the language does the process is none of our concern.
    - eg:- {SQl, etc}

**_`NOTE : using Iterators and generators we can implement our own version of async await`_**

# Iterators :-

-   `Iterator is an object that provide a way to access a sequence of values one at a time in js.`
-   With every iterator we get a next() function, calling which we get the next data from the collection.
-   `next()` returns a object `{value:__ , done:__ }`.
-   {
    value : `tells actual value/data we fetched by calling next()`
    done : `tells whether we consumed all the values from collection or not. false = not done, true = done.`
    }
-   eg 1:-

```js
function fetchNextElement(array) {
    let idx = 0;
    function next() {
        if (idx === array.length) {
            return { value: undefined, done: true };
        }
        const nextElement = array[idx];
        idx++;
        return { value: nextElement, done: false };
    }
    return { next };
}

const automaticFetcher = fetchNextElement([99, 11, 12, 13, 0, 1, 2, 3, 4]);
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
```

-   ![iterator-image](../Images/Screenshot%202023-06-14%20at%208.53.58%20PM.png)

**_Note : writing an implementation of next is actually a small part of very big LLD question if interviewing for senior engineers_**

# Generators :-

-   generator functions allow us to define an iterative algorithm by writing a single function whose execution is not continious.
-   `Syntax : function* [name]`
-   `Generator functions do not initially execute their code. instead, they return a special type of iterator, called a Generator.`
-   When a value is consumed by calling the generator's next() method, the generator function executes until it encounters the `yield` keyword. again if we call next() it will start from where it had left and execute until next yield encounter.
-   `yield` : it is similar to a return but it is not a return exactly.
-   The function can be called as many times as desired, and returns a new generator each time.
-   **_`Each generator may only be iterated once.`_** : this means once we reach the last element/token of the iterator we cannot start fetching from begining again.
-   eg 1:-

```js
function* fetchNextElement() {
    console.log('I am inside the generator function.');
    yield 1;
    yield 2;
    console.log('Somewhere in the middle.');
    yield 3;
    yield 4;
}

// it will return a return a special type of iterator, called a Generator,
// and it won't execute the function.
const itr = fetchNextElement();
console.log('1st', itr.next());
console.log('2nd', itr.next());
console.log('3rd', itr.next());
console.log('4th', itr.next());
console.log('5th', itr.next());

// LOGS :
// I am inside the generator function.
// 1st { value: 1, done: false }
// 2nd { value: 2, done: false }
// Somewhere in the middle.
// 3rd { value: 3, done: false }
// 4th { value: 4, done: false }
// 5th { value: undefined, done: true }
```

-   eg 2:-

```js
function* fetchNextElement() {
    console.log('I am inside the generator function.');
    yield 1;
    yield 2;
    return 'Nik';
    console.log('Somewhere in the middle.');
    yield 3;
    yield 4;
}

// it will return a special type of iterator, called a Generator,
// and it won't execute the function.
const itr = fetchNextElement();
console.log('1st', itr.next());
console.log('2nd', itr.next());
console.log('3rd', itr.next());
console.log('4th', itr.next());
console.log('5th', itr.next());
console.log('6th', itr.next());

// LOGS :
// I am inside the generator function.
// 1st { value: 1, done: false }
// 2nd { value: 2, done: false }
// 3rd { value: 'Nik', done: true }
// 4th { value: undefined, done: true }
// 5th { value: undefined, done: true }
// 6th { value: undefined, done: true }
```

-   we can pass value through the `itr.next(value)` function as well, this value replaces the yield text where ever it is being used as part of an expression. if we dont pass anything then in expression it gets replaced with `undefined`.
-   eg 4:-

```js
function* fetchNextElement() {
    console.log('Inside generator.');
    const x = 10;
    yield 11;
    console.log('Lets take a break.');
    const y = x + (yield 50);
    console.log('value of y is :', y);
    console.log(yield 500);
}

itr = fetchNextElement();
console.log('1st : ', itr.next());
console.log('2nd : ', itr.next());
// when we pass a value in itr.next() function it is replacing the yield with the value
// paased and if we want we can use this passed value like we are using it in the expression
// for 'y'.
console.log('3rd : ', itr.next(5));
console.log('4th : ', itr.next(101));

// LOGS :
// Inside generator.
// 1st :  { value: 11, done: false }
// Lets take a break.
// 2nd :  { value: 50, done: false }
// value of y is : 15
// 3rd :  { value: 500, done: false }
// 101                                      --> this is the value we passed through next(101).
// 4th :  { value: undefined, done: true }
```
