# Arrow Functions :-

-   They are anonymous functions that don't have a prototype of its own.
-   They inherit the prototype property from the enclosing parent function.

    -   So, using new keyword for arrow function will give `TypeError`.

    ```js
    const Person(n) = (n) => {
        this.name = n;
    }
    const name = new Person('Sina'); // TypeError: Person is not a constructor.
    ```

-   They don't have `arguments` array.

```js
const sayHello1 = function () {
    console.log(arguments);
};
const sayHello2 = () => {
    console.log(arguments);
};
sayHello1('Nikhil', 'Jaz', 21);
sayHello2('Gautam', 'Hip-Hop', 21); // ReferenceError :  arguments is not defined.
```

-   `this` inside arrow func takes its value from `surrounding/Lexical scope`. and we know `inside a object the this will point to window` object in global scope. bcz, this in global scope points to window whether or not it is inside of a block.

<a id="arrow_bookmark"></a>

```js
// VVIMP example
const ob1 = {
    name: 'nik',
    func() {
        console.log(this); // ob1{name: 'nik', ...}
        const ob2 = {
            x: this, // ob1{name: 'nik', ...} ==> from surrounding scope ie. func() {}.
        };
        console.log(ob2.x); // ob1{name: 'nik', ...}
        const arrow1 = () => {
            console.log(this); // ob1{name: 'nik', ...} ==> from surrounding scope ie. func() {}.
        };
        arrow1();
        function gunc() {
            console.log(this); // window
            const ob3 = {
                y: this, // window ==> from surrounding scope ie. gunc() {}.
            };
            console.log(ob3.y); // window
            const arrow2 = () => {
                console.log(this); // window ==> from surrounding scope ie. gunc() {}.
            };
            arrow2();
        }
        gunc();
    },
};
ob1.func();
```

## Where not to use arrow functions :-

1. `Object methods` : bcz, this will always point to surrounding and here it will be (window). [arrow_function_inside_object_as_object_methods](#arrow_bookmark)
2. `Prototypes`
3. `Constructors / Constructor functions`
4. `Event handlers`

### Never use arrow functions inside prototype of Constructor functions.

```js
function Person(n) {
    this.name = n;
}
Person.prototype.talk = function () {
    return this;
};
Person.prototype.arrowTalk = function () {
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
            console.log('func', this); // func Func {age: 21}
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

### Event handlers.

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
    in setTimeout() we don't see such behavoiur as the setTimeout function does not have the ability to bind to anything as it does have anything to bind it to.

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
