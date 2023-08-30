let ironMan = {
    name: 'Tony Stark',
    org: 'Shield',
    money: 'bilionaire',
};

// Accessing Object properties
console.log(ironMan);
console.log(ironMan.money);
const key1 = 'org';
console.log(ironMan[key1]);
console.log(ironMan['name']);

// Add/update properties
ironMan.friends = ['Captain America', 'Hulk', 'Thor'];
console.log(ironMan);
ironMan['Asset'] = 'Stark Tower';
console.log(ironMan);
const key2 = 'wife';
ironMan[key2] = 'Pepper Pots';
console.log(ironMan);

// Creating Objects
// 1
/*
    Object.Create() :
        The Object.create() static method creates a new object, using an existing object as the prototype 
        of the newly created object.
*/
const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};
const me = Object.create(person);
me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten
me.printIntroduction(); // "My name is Matthew. Am I human? true"
person.printIntroduction(); // "My name is undefined. Am I human? false"

// Object literal
let obj2 = {
    key: 'I am an object literal.',
};
console.log(obj2);

// using 'new' keyword --> constructor functions.
function Product(name, price) {
    this.name = name;
    this.price = price;
}
const obj3 = new Product('iPhone', 10000);
console.log(obj3);

// using factory functions
function func(name, price) {
    return {
        name,
        price,
    };
}
const obj4 = func('Samsung', 20000);
console.log(obj4);
