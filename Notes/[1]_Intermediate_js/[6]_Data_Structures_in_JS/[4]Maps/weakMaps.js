/*
    1. `Keys must be Objects` in a weakMap and the values can be of any type.
    2. The key `object references are weakly held` :
            - which means that if the key object is no longer referenced anywhere else, 
            it can be garbage collected, along with its associated value in weakMap.
*/

const myWeakMap = new WeakMap();
const key = {};
myWeakMap.set(key, 'value1');
const value = myWeakMap.get(key);
console.log(value); // value1

console.log(myWeakMap);
myWeakMap.delete(key);
console.log(myWeakMap);
