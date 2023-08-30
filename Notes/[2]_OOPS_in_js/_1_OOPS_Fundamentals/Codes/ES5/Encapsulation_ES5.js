function Avenger(name, power, weapon) {
    let secretPower = 'Secret Power'; // Private variable.
    this.name = name;
    this.power = power;
    this.weapon = weapon;

    this.getSecretPower = function () {
        return secretPower;
    };
}

var ironMan = new Avenger('Iron Man', 'Armor, Suit', 'Repulsar rays');
console.log(ironMan.secretPower); // undefined
console.log(ironMan.getSecretPower()); // Secret Power

console.log(Avenger.prototype);
