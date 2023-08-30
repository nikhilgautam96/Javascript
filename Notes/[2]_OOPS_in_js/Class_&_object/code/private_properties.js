class Avenger {
    #maritalStatus;
    #kills;
    constructor(name, age, superPower, maritalStatus, kills) {
        this.name = name;
        this.age = age;
        this.superPower = superPower;
        this.#maritalStatus = maritalStatus;
        this.#kills = kills;
    }
    fight() {
        console.log(`${this.name} is fighiting !`);
        this.#getPrivateDetails();
    }
    #getPrivateDetails() {
        console.log(
            `marital Status is : ${this.#maritalStatus} and total kills are : ${
                this.#kills
            }.`
        );
    }
}
class IronMan extends Avenger {
    constructor(name, age, superPower, suitColor, maritalStatus, kills) {
        super(name, age, superPower, maritalStatus, kills);
        this.suitColor = suitColor;
    }
    fight() {
        console.log(`${this.name} is fighiting in a ${this.suitColor} suit !`);
        super.fight(); // calling parent class's method fight().
    }
}
const superHero = new IronMan(
    'Tony Stark',
    21,
    'Armor Suit',
    'Red',
    'Married',
    'none'
);
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
// marital Status is : Married and total kills are : none.
