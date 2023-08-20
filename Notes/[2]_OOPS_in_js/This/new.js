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
