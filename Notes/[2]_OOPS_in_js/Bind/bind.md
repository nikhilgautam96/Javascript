# bind() in JS :-

-   ![call_apply_bind](../../Images/call_apply_bind.png)
-   SYNTAX :

```js
bind(thisArg);
bind(thisArg, arg1);
bind(thisArg, arg1, arg2);
bind(thisArg, arg1, arg2, /* …, */ argN);
// [function_name].bind(thisArgument, ...arrayOfArguments)
```

-   Return Value : `A function`;
-   `IMPORTANT` : function returned from bind() does not have its own prototype, just like arrow functions.

```js
const ob1 = {
    name: 'nik',
    age: 22,
    gender: 'male',
};
function Gun() {
    console.log(this.name, this.age, this.gender);
}
const gun1 = Gun.bind(ob1);
console.log(gun1.prototype); // undefined
console.log(gun1.__proto__); // ƒ () { [native code] }
console.log(Gun.prototype); // {constructor: ƒ}
console.log(Gun.__proto__); // ƒ () { [native code] }
console.log(gun1.__proto__ === Gun.__proto__); // true

Gun.prototype.newFunc = function () {
    console.log('hey');
};

Gun.prototype.newFunc(); // 'hey'

const ob2 = new Gun(); // undefined undefined undefined
ob2.newFunc(); // 'hey'

gun1.newFunc(); // TypeError: gun1.newFunc is not a function

const ob3 = new gun1(); // undefined undefined undefined
ob3.newFunc(); // 'hey'
```

-   `thisArgument` : whichever object we pass as thisArgument will be used as `this` .
