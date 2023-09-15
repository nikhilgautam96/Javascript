Function.prototype.myApply = function (context, args) {
    if (typeof this !== 'function')
        throw new Error(this + 'It cannot be applied.');
    if (!Array.isArray(args))
        throw new Error(
            args + 'TypeError: CreateListFromArrayLike called on non-object'
        );

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
printName.myApply(myName, ['JAMSHEDPUR', 'BHARAT']); // Nikhil, Gautam, JAMSHEDPUR, BHARAT
printName.apply(myName, ['JAMSHEDPUR', 'BHARAT']); // Nikhil, Gautam, JAMSHEDPUR, BHARAT

printName.myApply(null, ['JAMSHEDPUR', 'BHARAT']); // undefined, undefined, JAMSHEDPUR, BHARAT
printName.apply(null, ['JAMSHEDPUR', 'BHARAT']); // undefined, undefined, JAMSHEDPUR, BHARAT
