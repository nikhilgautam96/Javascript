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

console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(), Symbol() ]

// Create a symbol property on an object.
const obj2 = {};
Object.defineProperty(obj2, sym1, {
    value: 'value of symbol',
});
console.log(obj2); // {Symbol(): 'value of symbol'}

// "[Symbol.toStringTag]" property :

const person = {
    name: 'John',
    age: 30,

    [Symbol.toStringTag]: 'Person',
};
console.log(person.toString());
// without overriding : [object Object]
// with overriding : [object Person]
