function Avenger(name, power) {
    this.name = name;
    this.power = power;
}
Avenger.prototype.usePower = function () {
    console.log(this.name + ' uses ' + this.power + '!');
};

var ironMan = new Avenger('Iron Man', 'replusor beams');
ironMan.usePower(); // Iron Man uses replusor beams!
console.log(ironMan.__proto__ === Avenger.prototype); // true

/*
    What if we change the prototype completely.
        -->  Although the prototype is changed completely, the old prototype object is still 
            being pointed by the 'ironMan' instance.
        --> Therefore, they are not colleted by Garbage Collection.
*/
Avenger.prototype = {
    attack: function () {
        console.log(this.name + ' attacks with ' + this.power);
    },
};
var thor = new Avenger('Thor', 'Mjolnir');

thor.attack(); // 'Thor attacks with Mjolnir'
// thor.usePower(); --> there is no such 'usePower()' method in prototype of 'Avenger'.

ironMan.usePower(); // It is still attached to the old prototype object.
// 'Iron Man uses replusor beams!'
console.log(ironMan.__proto__ === Avenger.prototype); // false
