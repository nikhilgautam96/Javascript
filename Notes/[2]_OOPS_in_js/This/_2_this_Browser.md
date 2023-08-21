# This in JS :

# In brower :-

## 1. In global code :

-   points to --> `Window {object}`.
-   doesn't matter if it is inside of any block or not.

```js
// SET 1 :
console.log(this); // {} | Window' object
this.a = 20;
console.log(this, this.a); // {a: 20}, 20 | Window' object, 20
if (true) {
    console.log(this, this.a); //Window' object, 20
}
```

## 2. Inside a `function ( annonymous | named | IIFE | arrow )` with no parent :

-   `this` will point to --> `Window {object}`.
-   named --> `Window`
-   anonymous --> `Window`
-   arrow --> `Window`
-   IIFE --> `Window`
-   REASON : when we call a function from global scope say `fun()`, it actually is like `window.fun()`.

```js
// SET 2 :
function fun() {
    console.log('fun', this); // Window' object
    // if we add anything to this here, we can see it in global code window object.
    this.name = 'nikhil';
}
fun();
console.log(this.name, '--', name); // nikhil

const gun = () => {
    console.log('gun', this); // Window' object
};
gun();

(function () {
    console.log('IIFE', this); // Window' object
})();

const anonymous = function () {
    console.log('anonymous', this); // Window' object
};
anonymous();
```

## 3. Inside a `function ( annonymous | named | IIFE | arrow )` with parent as `Object` :

-   **_Object itself takes value of `this` from surrounding scope._**
-   named --> `Parent object`
-   anonymous --> `Parent object`
-   arrow --> `Window` (`this` inside arrow func takes its value from `surrounding/Lexical scope`.)
-   IIFE --> `Window`

```js
let obj = {
    name: 'nikhil',
    fun() {
        console.log('fun', this); // obj {...}
    },
    gun: function () {
        console.log('gun', this); // obj {...}
    },
    arrow: () => {
        console.log('arrow', this); // Window
    },
    IIFE: (function () {
        console.log('IIFE', this); // Window
    })(),
};
obj.fun();
obj.gun();
obj.arrow();
```

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

## 4. Inside a `function ( annonymous | named | IIFE | arrow )` with parent as `function (any)` :

-   named --> `Window object`
-   anonymous --> `Window object`
-   arrow --> `Parent function's this`
-   IIFE --> `Window object`

```js
let obj = {
    name: 'nikhil',
    fun() {
        console.log('fun', this); // obj {...}
        function fun() {
            console.log('fun-nested', this); // Window
        }
        const gun = function () {
            console.log('gun-nested', this); // Window
        };
        const arrow = () => {
            console.log('arrow-nested', this); // Parent function's this == obj {...}
        };
        const IIFE = (function () {
            console.log('IIFE-nested', this); // Window
        })();

        fun();
        gun();
        arrow();
    },
};
obj.fun();
```

## 5. Inside a callback function :-

-   Since callback functions run in an entirely different context, so the `this` inside of a callback function will not point to the parent function's `this`. but if we explicitly bind it to the parent's this the it will.
-   Or, we can use arrow function, which by default points to the immediate parent's this.

```js
function fun() {
    this.name = 'nikhil';
    console.log(this);
    setTimeout(function () {
        console.log(this);
    }, 1000);
}
fun();
const obj = new fun();
// OUTPUT :
// window
// fun {name: 'nikhil'}
// 1 sec later
// window
// window

function gun() {
    this.name = 'nikhil';
    console.log(this);
    setTimeout(
        function () {
            console.log(this);
        }.bind(this),
        1000
    );
}
gun();
const obj = new gun();
// OUTPUT :
// window
// gun {name: 'nikhil'}
// 1 sec later
// window
// gun {name: 'nikhil'}

function run() {
    this.name = 'nikhil';
    console.log(this);
    setTimeout(() => {
        console.log(this);
    }, 1000);
}
run();
const obj = new run();
// OUTPUT :
// window
// run {name: 'nikhil'}
// 1 sec later
// window
// run {name: 'nikhil'}
```

## 6. Inside an `Object` directly :

-   Points to --> `Window`,
-   bcz, the object declaration jus creates a block but anyways it is still in the global scope.

```js
let obj = {
    name: 'nikhil',
    prop: this,
    nestedObj: {
        nestedProp: this,
    },
};
console.log(obj.prop); // Window
console.log(obj.nestedObj.nestedProp); // Window
```

## 7. Using `new` Keyword :

-   Points to --> object of constructor being instantiated.
-   We can't use `new` keyword with arrow functions :
    -   REASON : `Arrow functions do not have their own prototype property`, making them unsuitable for use as constructors(constructor functions) for creating instances.

```js
function fun() {
    this.a = 10;
    this.b = 20;
    console.log(this); // fun { a: 10, b: 20 }
}
const funObj = new fun();

const gun = function () {
    this.a = 10;
    this.b = 20;
    console.log(this); // gun { a: 10, b: 20 }
};
const gunObj = new gun();

const func = () => {
    return 'hey';
};
func.prototype; // undefined
```

## 8. Inside of a class :

-   points to the Object being referenced.

```js
class User {
    static hobby = 'football';
    constructor(n) {
        this.name = n;
        this.age = 21;
    }
    getUserDetails() {
        console.log(this); // User { name: 'Nikhil', age: 21 }
    }
}
const userObj = new User('Nikhil');
userObj.getUserDetails();
console.log(userObj.hobby, ' ', User.hobby); // undefined   football
```
