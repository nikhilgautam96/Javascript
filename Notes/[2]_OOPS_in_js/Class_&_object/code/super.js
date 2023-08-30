class Avenger {
    constructor(name, age, superPower) {
        this.name = name;
        this.age = age;
        this.superPower = superPower;
    }
    fight() {
        console.log(`${this.name} is fighiting !`);
    }
}
class IronMan extends Avenger {
    constructor(name, age, superPower, suitColor) {
        super(name, age, superPower);
        this.suitColor = suitColor;
    }
    fight() {
        console.log(`${this.name} is fighiting in a ${this.suitColor} suit !`);
        super.fight(); // calling parent class's method fight().
    }
}
const superHero = new IronMan('Tony Stark', 21, 'Armor Suit', 'Red');
console.log(superHero);
// IronMan {
//     name: 'Tony Stark',
//     age: 21,
//     superPower: 'Armor Suit',
//     suitColor: 'Red'
// }
superHero.fight();
// Tony Stark is fighiting in a Red suit !
// Tony Stark is fighiting !
