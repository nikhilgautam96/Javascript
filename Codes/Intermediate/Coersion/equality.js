// Truthy Values
if ('0' && '-0' && [] && {} && function () {} && (() => {}) && true) {
    // all the above are falsy values.
    console.log('true');
}

// Falsy Values
if (null || undefined || NaN || '' || `` || 0 || -0 || 0n || -0n || false) {
    // all the above are falsy values.
    const n = NaN;
    console.log('false', n);
}

// Abstract Equality
console.log(null == undefined); // true
console.log(null == null); // true
console.log(undefined == null); // true
console.log(undefined == undefined); // true
console.log(undefined == 0); // false
console.log(null == 0); // false

console.log(10 == '10'); // ToNumber('10') => 10, 10 == 10 -> true
console.log(10 == '12'); // ToNumber('12') => 12, 10 == 12 -> false
console.log('99' == 99); // ToNumber('99') => 99, 99 == 99 -> true

console.log(0 == -0); // true
console.log(false == 0); // ToNumber(false) => 0, 0 == 0 -> true
console.log(false == -0); // ToNumber(false) => 0, 0 == -0 -> true
console.log(true == 10); // ToNumber(true) => 1, 1 == 10 -> false

console.log(
    10 ==
        {
            valueOf() {
                return 10;
            },
        }
); // ToPrimitive({valueOf() {return 10}}) -> hint:number, 10 == 10 -> true

console.log('---------------------------------');

// Strict Equality :-
// Strict Equality :-
console.log(NaN === 23); // false
console.log(NaN === NaN); // false

console.log(33 === 33); // true
console.log(33 === 23); // false
console.log(0 === -0); // true
console.log(-0 === 0); // true
console.log(undefined === undefined); // true
console.log(null === null); // true

console.log('sanket' === 'sanket'); // true

console.log({} === {}); // false --> both are referring to different object in memory.
let x = {};
let z = x;
console.log(x === x && x === z); // true

console.log(Symbol('sanket') === Symbol('sanket')); // false --> both are referring to different symbol in memory.
let m = Symbol('sanket');
let n = m;
console.log(m === m && m === n); // true | both referring to same memory location.

let a = { name: 'nikhil' };
let b = { name: 'nikhil' };
console.log(a === b); // false --> here to check for same value we need to do "Deep Comparison", same is the case for symbols.
