# This in JS :

# In brower :-

## 1. In global code :

-   points to --> `Window {object}`.

```js
// SET 1 :
console.log(this); // {} | Window' object
this.a = 20;
console.log(this, this.a); // {a: 20}, 20 | Window' object, 20
```

## 2. Inside a `function ( annonymous | named | IIFE | arrow )` with no parent :

-   `this` will point to --> `Window {object}`.
-   named --> `Window`
-   anonymous --> `Window`
-   arrow --> `Window`
-   IIFE --> `Window`

```js
// SET 2 :
function fun() {
    console.log('fun', this); // Window' object
}
fun();

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

-   named --> `Parent object`
-   anonymous --> `Parent object`
-   arrow --> `Window`
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

## 5. Inside an `Object` directly :

-   Points to --> `Window`

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

## 6. Using `new` Keyword :

-   Points to --> object of constructor being instantiated.
-   We can't use `new` keyword with arrow functions :
    -   REASON : Arrow functions do not have their own prototype property, making them unsuitable for use as constructors for creating instances.

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
```

## 7. Inside of a class :

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
