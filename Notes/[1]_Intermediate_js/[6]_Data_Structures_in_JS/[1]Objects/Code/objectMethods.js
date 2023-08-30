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
 Object.entries(obj) --> returns an array.
*/
const allEntries = Object.entries(ironMan);
/*
 Object.values(obj) --> returns an array.
*/
const allValues = Object.values(ironMan);
/*
 Object.keys(obj) --> returns an array.
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
