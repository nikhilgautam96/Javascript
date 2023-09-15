Function.prototype.myCall = function (context, ...args) {
    if (typeof this !== 'function')
        throw new Error(this + 'It is not callable.');

    // we will add the 'this' function as a property to 'context' object.
    // but before, we will add it using a '[random]' property name,
    // if the [random] name does not already exists in object.
    let currContext = context !== null ? context : globalThis; // if the context object is empty we use 'globalThis/window' object.
    let randomProperty = Math.random();
    while (currContext[randomProperty] !== undefined) {
        randomProperty = Math.random();
    }
    currContext[randomProperty] = this;
    const res = currContext[randomProperty](...args);
    delete currContext[randomProperty];
    return res;
};
const myName = {
    fname: 'Nikhil',
    lname: 'Gautam',
};
function printName(city, country) {
    console.log(`${this.fname}, ${this.lname}, ${city}, ${country}`);
}

printName.myCall(myName, 'JAMSHEDPUR', 'BHARAT'); // Nikhil, Gautam, JAMSHEDPUR, BHARAT
printName.call(myName, 'JAMSHEDPUR', 'BHARAT'); // Nikhil, Gautam, JAMSHEDPUR, BHARAT

printName.myCall(null, 'JAMSHEDPUR', 'BHARAT'); // undefined, undefined, JAMSHEDPUR, BHARAT
printName.call(null, 'JAMSHEDPUR', 'BHARAT'); // undefined, undefined, JAMSHEDPUR, BHARAT
