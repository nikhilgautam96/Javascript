class Avengers {
    static teamName = "Earth's Mightiest Heroes";
    constructor(name, power, team) {
        this.name = name;
        this.power = power;
        this.team = team;
    }
    characterDesciption() {
        return `${this.name} is a member of ${this.team} and has ${this.power}.`;
    }
    get avengerName() {
        return this.name;
    }
    set avengerName(newName) {
        this.name = newName;
    }
}
console.log(Avengers.teamName); // Earth's Mightiest Heroes
const ironMan = new Avengers('Tony Stark', 'Armor Suit', 'Shield');
console.log(ironMan.avengerName); // Avengers { name: 'Tony Stark', power: 'Armor Suit', team: 'Shield' }
ironMan.avengerName = 'Iron Man';
console.log(ironMan); // Avengers { name: 'Iron Man', power: 'Armor Suit', team: 'Shield' }

console.log(ironMan.characterDesciption()); // Iron Man is a member of Shield and has Armor Suit.
console.log(ironMan.avengerName); // Iron Man
