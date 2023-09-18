/*
    1. Map is class defined in JS.
    2. Datatype of 'Map' is = 'function'. ( datatype of class in JS is function ).
    3. Holds "key-value" pairs where the "keys can be of any datatype", 
            unlike in Objects where keys can be either String or Symbol.
    4. Map remembers the original insertion order of the keys.
    5. Has a property that remembers the "size" of the map.
    6. Maps are "Iterable" unlike objects that are not inherently iterable.
*/

const myMap = new Map();
myMap.set('key1', 'value1');
const value = myMap.get('key1');
console.log(value); // value1

myMap.set(101, 'emergency number');
console.log(myMap.get(101)); // emergency number
console.log(myMap); // Map(2) { 'key1' => 'value1', 101 => 'emergency number' }

myMap.set({ empId: 1771549 }, 'TCS employee ID');
console.log(myMap.get({ empId: 1771549 })); // undefined
// REASON : as reference type can be compared directly but using reference variable,
//          as both represent different memory location.

console.log(myMap.entries());
console.log(myMap.keys());
console.log(myMap.values());
/*
    [Map Entries] {
        [ 'key1', 'value1' ],
        [ 101, 'emergency number' ],
        [ { empId: 1771549 }, 'TCS employee ID' ]
    }
    [Map Iterator] { 'key1', 101, { empId: 1771549 } }
    [Map Iterator] { 'value1', 'emergency number', 'TCS employee ID' }
*/

myMap.set(null, 'I am null');
console.log(myMap.get(null)); // I am null
console.log(myMap.has(null)); // true

// Size of Map
console.log(myMap.size); // 4
