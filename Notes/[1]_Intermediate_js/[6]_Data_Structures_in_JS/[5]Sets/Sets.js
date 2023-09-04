/*
    1. Collection of unique values.
    2. Each value can occur only once.
    3. Can hold any value of any data type.
*/

const mySet = new Set();

mySet.add('Value1');
const hasValue = mySet.has('Value1'); // true

mySet.add({ x: 10 });
mySet.add({ x: 10 });

mySet.add([1, 2]);
mySet.add([1, 2]);

mySet.add('Nikhil');
mySet.add('Nikhil');

mySet.add(null);
mySet.add(null);

mySet.add(undefined);
mySet.add(undefined);

const size = mySet.size; // 8
console.log(mySet, hasValue, size);
/*
    Set(8) {
        'Value1',
        { x: 10 },
        { x: 10 },
        [ 1, 2 ],
        [ 1, 2 ],
        'Nikhil',
        null,
        undefined
    }
*/
