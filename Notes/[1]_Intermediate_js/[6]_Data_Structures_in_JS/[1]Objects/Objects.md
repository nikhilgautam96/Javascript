# Objects in JS :-

-   Everything in JS is an object except the primitives.

# Enumerability and ownership of properties :-

-   `Enumerable` : `that can be counted`.
-   Every property in JavaScript objects can be classified by 3 factors:
    1. `Enumerable or non-enumerable`.
    2. `String or symbol`.
    3. `Own property or inherited property from the prototype chain`.
-   Enumerable properties are those properties whose internal enumerable flag is set to true.
    -   default for properties created via simple assignment or via a property initializer.

## Accessing object properties :-

```js
let ironMan = {
    name: 'Tony Stark',
    org: 'Shield',
    money: 'bilionaire',
};
console.log(ironMan);
console.log(ironMan.money);
const key = 'org';
console.log(ironMan[key]);
console.log(ironMan['name']);
```

## Object creation :-

```js
// Creating Objects
// 1
/*
    Object.Create() :
        The Object.create() static method creates a new object, using an existing object as the prototype 
        of the newly created object.
*/
const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};
const me = Object.create(person);
me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten
me.printIntroduction(); // "My name is Matthew. Am I human? true"
person.printIntroduction(); // "My name is undefined. Am I human? false"

// 2. Object literal
let obj2 = {
    key: 'I am an object literal.',
};
console.log(obj2);

// 3. using 'new' keyword --> constructor functions.
function Product(name, price) {
    this.name = name;
    this.price = price;
}
const obj3 = new Product('iPhone', 10000);
console.log(obj3);

// 4. using factory functions
function func(name, price) {
    return {
        name,
        price,
    };
}
const obj4 = func('Samsung', 20000);
console.log(obj4);
```

## Object Methods :-

```js
let ironMan = {
    name: 'Tony Stark',
    org: 'Shield',
    money: 'bilionaire',
};
let captainAmerica = {
    name: 'Steve Rogers',
    org: 'America',
    money: 'nil',
};

/*
 Object.entries(obj) --> returns an array. [[key, value], [key, value]]
*/
const allEntries = Object.entries(ironMan);
/*
 Object.values(obj) --> returns an array. [value1, value2]
*/
const allValues = Object.values(ironMan);
/*
 Object.keys(obj) --> returns an array. [key1, key2]
*/
const allKeys = Object.keys(ironMan);
console.log(allEntries);
console.log(allKeys);
console.log(allValues);

/*
 Object.assign(target, source1, source2, ...)
    --> copies all enumerable own properties from one or more source objects to a target object. 
    --> It returns the modified target object.
    --> property with same names are overridden with latest values.
*/
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target); // Expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target);
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };
const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed.

/*
 Object.defineProperty()
    --> The Object.defineProperty() static method defines a new property directly on an object, 
        or modifies an existing property on an object, and returns the object.

 SYNTAX :
    --> " Object.defineProperty(obj, prop, descriptor) "
*/
const object1 = {};
Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false,
});
object1.property1 = 77; // Throws an error in strict mode
console.log(object1.property1); // 42
console.log(object1);

/*
 Object.seal()
    --> seals an object prevents adding new / deleting existing properties.
    --> we can still modify existing properties.
    --> Make properties :
        1. Non-writable       = No
        2. Non-enumerable     = Yes
        3. Non-Configurable   = No
    --> Make object immutable = No
*/
Object.seal(ironMan);
ironMan.friends = ['HULK', 'THOR'];
delete ironMan.name;
ironMan.money = 'Trillionaire';
console.log(ironMan); // { name: 'Tony Stark', org: 'Shield', money: 'Trillionaire' }

/*
 Object.freeze()
    --> freezes an object and prevents any form of modification.
    --> Make properties :
        1. Non-writable       = Yes
        2. Non-enumerable     = Yes
        3. Non-Configurable   = Yes
    --> Make object immutable = Yes
*/
Object.freeze(captainAmerica);
captainAmerica.friends = ['HULK', 'THOR'];
delete captainAmerica.name;
captainAmerica.money = 'Not Intrested';
console.log(captainAmerica); // { name: 'Steve Rogers', org: 'America', money: 'nil' }

/*
 Object.preventExtension()
    --> Make properties :
        1. Non-writable       = No
        2. Non-enumerable     = No
        3. Non-Configurable   = No
    --> Make object immutable = No
*/
```

## getter & setter methods :-

```js
const myObj = {
    property1: 'Value 1',
    property2: 'Value 2',
    method1: function () {
        console.log('Hello, World!');
    },
    get getProperty1() {
        return this.property1;
    },
    set setProperty1(val) {
        this.property1 = val;
    },
    get getProperty2() {
        return this.property1;
    },
    set setProperty2(val) {
        this.property2 = val;
    },
};
myObj.setProperty1 = 101;
console.log(myObj.getProperty1);
```
