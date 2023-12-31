## `new` Keyword :

-   The new keyword executes a 4 step process :-

    1. It creates a brand new empty JS object.
    2. It does a process of Linking.
        - It links the JS object to the `unnamed object` pointed by the `function's prototype property`.
    3. It calls the function with the this property assigned to the empty object it created before.
    4. The function execution starts. (the this keyword will point to the empty object created at the calling site. ).
    5. At last, if the function doesn't return any specific object, then it automatically returns `this`. Otherwise it returns the object returned by us. NOTE : w/o new keyword function returns 'undefined' by default.

-   ![Internal_JS_protypal_chaining](../../Images/protypal_chaining_internal_js.png)

```js
function fun() {
    this.name = 'nikhil';
}
// 1.
// a new object is created and linked to the unnamed object that is pointed by the
// `prototype` property of `ƒ fun() {}`. |
// in simple terms we can say that it points to the prototype of fun().
const obj = new fun();
// to verify the above statement.
console.log(obj.constructor); // it will point to the function fun() here.

// 2.
// it will point to the unnamed object, that is created when we write the function fun.
console.log(obj.constructor.prototype);
console.log(obj.__proto__); // using `DUNDER PROTO` we can access the prototypal chain of `fun()`.
console.log(fun.prototype);

// 3.
// to access the protypal chain of `function Object() { ... }`
console.log(obj.__proto__.__proto__); // will point to the unnamed object pointed by `Object.prototype`.
console.log(Object.prototype);

// 4.
console.log(obj.prototype); // ERROR : as there is no such property in obj.

// 5.
// below statement looks for display() property in the object and then it looks for the same in the
// `obj.constructor` then further up in the `function Object()`'s prototype.
// this is called `prototypal chaining`.
console.log(obj.display()); // will throw error as there no such property.

// 6.
fun.prototype.display = function () {
    console.log(' I am a function in prototype of fun', this.name);
};
console.log(obj.display()); // this will call the `display()` function.
// OUTPUT :
// "I am a function in prototype of fun nikhil"
console.log(obj.__proto__.display());
// OUTPUT :
// "I am a function in prototype of fun undefined"
// REASON : the 'name' property is defined in the 'obj' object's this. and not in the prototype of 'fun()'.
console.log(fun.prototype.name); // undefined

// EQUALITY check :-
// 1.
console.log(obj.__proto__ === fun.prototype); // true.
// 2.
console.log(obj.__proto__.__proto__ === Object.prototype); // true.
// 3.
console.log(obj.__proto__.__proto__ === fun.__proto__); // false : `fun()` doesn't have such linkage. fun()'s proto has.
// 4.
console.log(obj.__proto__.__proto__ === fun.prototype.__proto__); // true.
```

-   It creates a new object of the constructor functions or simply functions and then binds that object to the this keyword.
-   Any different object we create of the same function will all inherit from the same object that we call as `[function].prototype = { ... }`
-   All static members are put inside of the `[function].prototype = { ... }` object.
-   If we want any property to be specific to a particular instance, we use `this` keyword.
