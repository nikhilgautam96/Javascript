const person = {
    name: 'nikhil',
    age: 21,
    accessToAge: false,
};

const personProxy = new Proxy(person, {
    get: function (target, property) {
        // we can add validations using proxy layer.
        if (property === 'age' && !target['accessToName']) {
            return "you don't have access.";
        }
        console.log(`Getting ${property}`);
        return target[property];
    },
    set: function (target, property, value) {
        console.log(`Setting ${property} to ${value}`);
        target[property] = value;
    },
});

console.log(personProxy.name);
// Getting name
// nikhil
console.log(personProxy.age); // you don't have access.

personProxy.name = 'Gautam';
console.log(personProxy.name);
// Getting name
// Gautam
