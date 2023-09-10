# Symbol :-

-   It is a Primitive type in JS, represented by `Symbol()` function.
-   Symbols are unique.
-   It is used to avoid `naming collision`.
-   Object symbols allows `unique property keys` on an object.
-   Objects accept (`strings` & `symbols`) as the only 2 data type for key.
-   `Symbol properties are not "ennumerable".` ie: Object.keys() will not show symbol properties.
-   Symbols are used tomcreate private properties in an object.

## How to use symbols as property keys :-

-   eg:-

```js
const sym1 = Symbol();
const sym2 = Symbol();

console.log(sym1 === sym2); // false
const foo = 'I am foo';
const sym3 = Symbol(foo);
console.log(sym1, sym2, sym3); // Symbol() Symbol() Symbol(I am foo)

const obj = {
    [sym1]: 'value',
    [sym2]: 'another value',
    name: 'ankush',
};
console.log(obj); // { name: 'ankush', [Symbol()]: 'value', [Symbol()]: 'another value' }
console.log(Object.keys(obj)); // [ 'name' ]

obj[sym1] = 'changed value';
console.log(obj[sym1]); // changed value

// Create a symbol property on an object.
const obj2 = {};
Object.defineProperty(obj2, sym1, {
    value: 'value of symbol',
});
console.log(obj2); // {Symbol(): 'value of symbol'}
```

## Object.getOwnPropertySymbols() :

-   It retrieves an array of all symbol properties of an object.
-   eg :

```js
const sym1 = Symbol();
const sym2 = Symbol();

console.log(sym1, sym2); // Symbol() Symbol()
const obj = {
    [sym1]: 'value',
    [sym2]: 'another value',
    name: 'ankush',
};
console.log(obj); // { name: 'ankush', [Symbol()]: 'value', [Symbol()]: 'another value' }

console.log(Object.keys(obj)); // [ 'name' ]

console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(), Symbol() ]
```

## `[Symbol.toStringTag]` property :-

-   It is an inbuilt JS property of an object.
-   We can override it.
-   eg :

```js
const person = {
    name: 'John',
    age: 30,

    [Symbol.toStringTag]: 'Person',
};
console.log(person.toString());
// without overriding : [object Object]
// with overriding : [object Person]
```

## Symbol methods in class :-

-   eg:

```js
const _empDetails = Symbol('_empDetails');
class Employee {
    constructor(name, age, empId) {
        this.name = name;
        this.age = age;
        this.empId = empId;
    }
    getDetails() {
        return this[_empDetails]();
    }

    [_empDetails]() {
        return `Name: ${this.name}, Age: ${this.age}, EmployeeId: ${this.empId}`;
    }
}

const emp1 = new Employee('Nikhil', 21, 1771549);

console.log(emp1.getDetails());
```
