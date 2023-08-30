function Avenger(name, power, weapon) {
    this.name = name;
    this.power = power;
    this.weapon = weapon;
}
Avenger.prototype.attack = function () {
    console.log(this.name + ' attacks with ' + this.weapon);
};
// Inherit Properties
function SuperHero(name, power, weapon, superPower) {
    Avenger.call(this, name, power, weapon);
    this.superPower = superPower;
}
// Inherit methods with proto chaining
SuperHero.prototype = Object.create(Avenger.prototype);
console.log(SuperHero.prototype === Avenger.prototype); // false
SuperHero.prototype.constructor = SuperHero;

// Modify attack function to exhibit polymorphism
/*
 If we comment out below line,
    --> captainAmerica.attack() : will call the attack() function of Avenger.prototype().
*/
SuperHero.prototype.attack = function () {
    console.log(this.name + ' uses ' + this.superPower + ' to fight.');
};

var ironMan = new Avenger('Iron Man', 'Armor Suit', 'Repulsor rays', 'Rich');
var captainAmerica = new SuperHero(
    'Captain Americs',
    'Super strength',
    'Vibranium Shield',
    'Leadership'
);
ironMan.attack(); // Iron Man attacks with Repulsor rays
captainAmerica.attack(); // Captain Americs uses Leadership to fight.
