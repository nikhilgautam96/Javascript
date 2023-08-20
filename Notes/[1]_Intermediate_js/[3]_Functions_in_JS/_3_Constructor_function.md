# Constructor functions :-

-   It gets the name from the constructors inside of the class.

```js
function Person(name) {
    // const this = {}; ---> underneath
    this.name = name;
    // return this; ---> underneath
}
const p1 = new Person('Nikhil');
console.log(p1); // Person { name: 'nikhil' }
const p2 = new Person('Gautam');
console.log(p2); // Person { name: 'Gautam' }
const p3 = new Person('Niku');
console.log(p3); // Person { name: 'Niku' }
Person.prototype.talk = function () {
    return `Hey, ${this.name} is talking.`;
};
// prototypal inheritance.
console.log(p1.talk());
console.log(p2.talk());
console.log(p3.talk());
```
