// function personFactory(name) {
//     return {
//         talk() {
//             return `Hello I am ${name}`;
//         },
//     };
// }
// const me = personFactory('Nikhil');
// console.log(me); // { talk: [Function: talk] }
// const you = personFactory('Gautam');
// console.log(you); // { talk: [Function: talk] }

// Below is another way of Factory functions,
// but it is not an recommended practise.(actually a bad one)
const myCoolProto = {
    talk() {
        return `Hello, I am ${this.name}`;
    },
};
function createPerson(name) {
    return Object.create(myCoolProto, {
        name: { value: name },
    });
}
const me = createPerson('Nikhil');
const you = createPerson('Gautam');
console.log(me, you);
console.log(me.__proto__ === myCoolProto); // true
// So,
myCoolProto.walk = function () {
    return `Hey ${this.name} is walking.`;
};
console.log(me.walk()); // Hey Nikhil is walking.
console.log(you.walk()); // Hey Gautam is walking.
