# Factory functions :-

-   `In JavaScript, any function can return an object. When it does so without the new keyword, it’s a factory function.`
-   In JavaScript, a factory function is a design pattern used to create and return objects.
-   It's a way to encapsulate and abstract the process of object creation, making it more flexible and reusable compared to using constructors directly.
-   Factory functions are particularly useful when you need to create multiple objects with similar properties and behaviors.
-   Promotes `Data Privacy` by default bcz of closures.

```js
// Data Privacy
function createPerson(name) {
    return {
        talk() {
            return `${name} talks`;
        },
    };
}
const me = createPerson('Nikhil');
me.talk(); // Nikhil talks
me.name; // undefined --> hidden
```

```js
function personFactory(name) {
    return {
        talk() {
            return `Hello I am ${name}`;
        },
    };
}
const me = personFactory('Nikhil');
console.log(me); // { talk: [Function: talk] }
const you = personFactory('Gautam');
console.log(you); // { talk: [Function: talk] }
```

## Disadvantage :-

-   `No Inheritance`: Factory functions don't provide built-in inheritance mechanisms like constructor functions and prototypes do. This can make it more challenging to create a hierarchy of objects with shared methods and properties.

-   The objects returned are instances of `Object` and not of the function returning the object.
-   Thus, the protype of function is not connected to the object.
-   There is no way to add a new property to all the objects of the factory function. If we do using `obj.__proto__` it will add the property to the `Object.prototype` and this means if we create another factory function with some other blueprint then it will also get this newly added property as it inherits the `Object` function's prototype.
-   to solve the above issue we can do is;

```js
// Below is another way of Factory functions,
// but it is not an recommended practise.(actually a bad one)
const myCoolProto = {
    talk() {
        return `Hello, I am ${this.name}`;
    },
};
function createPerson(name) {
    return Object.create(myCoolProto, {
        name: { value: name },
    });
}
const me = createPerson('Nikhil');
const you = createPerson('Gautam');
console.log(me, you);
console.log(me.__proto__ === myCoolProto); // true
// So,
myCoolProto.walk = function () {
    return `Hey ${this.name} is walking.`;
};
console.log(me.walk()); // Hey Nikhil is walking.
console.log(you.walk()); // Hey Gautam is walking.
```
