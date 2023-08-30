# Prototypal Inheritance :-

-   eg 1 :-

```js
// class Person {
//     talk() {
//         return 'Talking.';
//     }
// }
// const me = new Person();
// const you = new Person();
// console.log(me);
// console.log(you);
// me.age = 12;
// console.log(me);
// console.log(me.age, me.talk, me.__proto__.talk);
// console.log(you.age, you.talk, you.__proto__.talk);
// console.log(Person.prototype === me.__proto__);

// Person.prototype.talk = function () {
//     return 'new and improved Talking.';
// };
// console.log(me.talk(), you.talk());
// console.log(Person.prototype);

// What Happens Underneath :-
function Person() {}
Person.prototype.talk = function () {
    return 'Talking';
};
const me = new Person();
console.log(me.talk()); // "Talking"
console.log(me);
```

-

```js
// If we do this way :-
function Person1() {
    this.talk = function () {
        return 'Talking';
    };
}
const me2 = new Person1();
console.log(me2);

// When we attach anything using `this` keyword, it no longer is considered as a method, it becomes a property.
// The property gets copied to all the instances of that function.
// Thus, making changes in one instance won't affect the others. So fixing bugs is difficult.
// bcz,
// Using `.prototype` we attach the property to the prototype of that function. and it then is called a `method`.
// when we make a change in the `.prototype.property` it gets reflected in all instances of that function.
```

-   The most common convention is to add all the `properties` to the `this` object and all the methods to the `prototype` object. eg :-

```js
function Person(age, name, gender) {
    this.age = age;
    this.name = name;
    this.gender = gender;
}
Person.prototype.run = function {
    return 'Person runs';
}
Person.prototype.talk = function {
    return 'Person talks';
}
Person.prototype.walk = function {
    return 'Person walks';
}
Person.prototype.smile = function {
    return 'Person smiles';
}
```

-   eg 3:-

```js

```
