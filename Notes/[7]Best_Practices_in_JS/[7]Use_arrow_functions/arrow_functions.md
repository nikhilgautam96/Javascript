## Where not to use arrow functions :-

1. `Object methods`
2. `Prototypes`
3. `Constructors / Constructor functions`
4. `Event handlers`

### 1. Never use arrow in `Object methods` :

-   bcz, this will always point to surrounding and here it will be (window). [arrow_function_inside_object_as_object_methods](#arrow_bookmark)

### 2. Never use arrow functions inside prototype of Constructor functions :

```js
function Person(n) {
    this.name = n;
}
Person.prototype.talk = function () {
    return this;
};
Person.prototype.arrowTalk = () => {
    return this;
};
const me = new Person('Nikhil');
me.talk(); // Person {name: 'Nikhil'}
me.arrowTalk(); // Window
```

```js
function f() {
    const ob = {
        name: 'nik',
        t: this,
        Func: function Func() {
            this.age = 21;
            console.log('func :', this); // func : Func {age: 21}
        },
    };
    const p1 = new ob.Func();
    ob.Func.prototype.talk = () => {
        console.log('arrow', this);
    };
    p1.talk(); // arrow Window {...}
    console.log(p1); // Func {age: 21}
}
f();
```

### 3. Never use arrow function as Constructor functions :

-   They are anonymous functions that don't have a prototype of its own.
-   They inherit the prototype property from the enclosing parent function.

    -   So, using `new` keyword for arrow function will give `TypeError`.

    ```js
    const Person(n) = (n) => {
        this.name = n;
    }
    const name = new Person('Sina'); // TypeError: Person is not a constructor.
    ```

### 4. Event handlers :

-   The arrow function will point to the `window` object as event listeners are added in the global scope.

```js
document.body.addEventListener('click', function () {
    console.log(this);
});
// onClick :
// <body> ... </body>
// <body> ... </body>

document.body.document.body.addEventListener('click', () => {
    console.log(this);
});
// onClick :
// Window {window: Window, self: Window, document: document, name: 'nikhil', location: Location, …}
// Window {window: Window, self: Window, document: document, name: 'nikhil', location: Location, …}
```

-   The event listener has the ability to bind the callback function to the `this` (ie. the DOM element). bcz, thats where the event listener is attached to.
    but,
    in setTimeout() we don't see such behaviour as the setTimeout() function does not have the ability to bind to anything.

```js
function outer(callback) {
    callback();
}
function inner() {
    console.log(this);
}
outer(inner); // Window.
```

```js
function outer(callback, obj) {
    callback.call(obj);
}
function inner() {
    console.log(this);
}
outer(inner, { name: 'Nikhil' }); // {name: 'Nikhil'}
```
