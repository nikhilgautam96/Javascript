function Avenger(name, power, weapon) {
    this.name = name;
    this.power = power;
    this.weapon = weapon;
}
function SuperHero(name, power, weapon, superPower) {
    Avenger.call(this, name, power, weapon);
    this.superPower = superPower;
}
var captainAmerica = new SuperHero(
    'Captain America',
    'Super Strength',
    'Vibranium Shield',
    'Leadership'
);

console.log(captainAmerica.power); // Super Strength
console.log(captainAmerica.superPower); // Leadership
console.log(
    Avenger.prototype === SuperHero.prototype /* false */,
    captainAmerica.__proto__ === SuperHero.prototype /* true */
);
