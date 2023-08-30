function talk(lang, isPolite) {
    if (isPolite) {
        if (lang === 'en') {
            return `Hello, I am ${this.name}.`;
        } else if (lang === 'it') {
            return `Ciao  bella, sono ${this.name}.`;
        }
    } else {
        if (lang === 'en') {
            return `${this.name}, 😡 what do you want??`;
        } else if (lang === 'it') {
            return `Sono ${this.name}, 🤌🏻.`;
        }
    }
}
const me = {
    name: 'Nikhil',
};

console.log(talk.call(me, 'en', true)); // Hello, I am Nikhil.
console.log(talk.call(me, 'it', true)); // Ciao  bella, sono Nikhil.
console.log(talk.call(me, 'en', false)); // Nikhil, 😡 what do you want??
console.log(talk.call(me, 'it', false)); // Sono Nikhil, 🤌🏻.

// Transforming methods to utility functions :-
const obj = {
    length: 3,
    0: 'nikhil',
    1: 'gautam',
    2: 'nikku',
    3: 'Aditya',
    4: 'gautam',
};
console.log(
    Array.prototype.map.call(obj, (elem, idx) => {
        console.log(elem, idx);
        // nikhil 0
        // gautam 1
        // nikku 2
        return elem + '😎';
    })
);
// [ 'nikhil😎', 'gautam😎', 'nikku😎' ]
/*
1. An object named obj is defined with properties that resemble an array structure. 
    The properties include a length property and properties with numeric indices 0, 1, and 2, 
    each holding a string value.

2. The Array.prototype.map method is used on the obj object. The map method creates a new array by 
    iterating through each element of the original array-like object and applying a provided callback function 
    to each element.

3. The call method is used to invoke the map method on obj, treating it as an array-like object. 
    The call method sets the this value of the map method to obj, allowing you to use array methods 
    on non-array objects.

4. The provided callback function (elem) => elem + '😎' takes an element (elem) as a parameter and 
    appends the "😎" emoji to it.

5. The map method iterates through each element of the obj object and applies the callback function to each element.

6. The result of the map operation is an array containing the transformed elements. However, 
    in the provided code, this result is not assigned to any variable or logged, so it is not used or displayed.
*/
