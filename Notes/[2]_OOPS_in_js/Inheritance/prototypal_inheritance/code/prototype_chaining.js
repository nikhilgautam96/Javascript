const obj1 = {
    getName() {
        return this.name;
    },
};
const obj2 = {
    name: 'Nikhil',
    rollNumber: 11,
    getRollNum() {
        return this.rollNumber;
    },
    __proto__: obj1,
};
console.log(obj2.getName()); // Nikhil
/*
`this` will always point to the object being used to call the method, as it gets binded internally
*/

const obj3 = {
    name: 'Gautam',
    rollNumber: 3,
    __proto__: obj2,
};
console.log(obj3.getRollNum()); // Gautam
console.log(obj3.getName()); // 3
