/*
    1. `Values must be Objects`.
    2. The `object references are weakly held` :
            - which means that if the value object is no longer referenced anywhere else, 
            it can be garbage collected.
*/
const myWeakSet = new WeakSet();
const value = {};
myWeakSet.add(value);

const hasValue = myWeakSet.has(value);
console.log(hasValue); // true
