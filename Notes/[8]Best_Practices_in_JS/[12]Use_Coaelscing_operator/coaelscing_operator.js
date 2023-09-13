/*
    1. Nullish Operator : Introduced in ES2020
    2. Checks for `Nullish` values rather than `falsy` values.
    3. Nullish values are :  ( null, undefined )
    4. This helps in avoiding unexpected behaviour.
    5. value followed by `??` operator is called `fallback value`
*/
const foo = null ?? 'Hello';
const bar = undefined ?? 'World';
console.log(foo + ' ' + bar); // Hello World

const fname = false ?? 'Nikhil';
const lname = true ?? 'Gautam';
console.log(fname + ' ' + lname); // false true
