class Person {
    talk() {
        return 'Talking';
    }
}
class SuperHuman extends Person {
    fly() {
        return 'Flyingggg';
    }
}
const me = new Person();
const you = new SuperHuman();
console.log(me.talk()); // Talking
console.log(me.fly); // undefined
console.log(you.talk()); // Talking
console.log(you.fly()); // Flyingggg
