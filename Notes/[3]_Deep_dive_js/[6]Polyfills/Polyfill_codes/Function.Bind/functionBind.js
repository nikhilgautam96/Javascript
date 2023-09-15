Function.prototype.myBind = function (...args) {
    if (typeof this !== 'function')
        throw new Error(this + 'It cannot be Binded.');
    if (!Array.isArray(args))
        throw new Error(
            args + 'TypeError: CreateListFromArrayLike called on non-object'
        );

    // we will add the 'this' function as a property to 'context' object.
    // but before, we will add it using a '[random]' property name,
    // if the [random] name does not already exists in object.
    let currContext = args[0] !== null ? args[0] : globalThis; // if the context object is empty we use 'globalThis/window' object.
    let callback = this;
    return function (...newArgs) {
        callback.apply(currContext, [...args.slice(1), ...newArgs]);
    };
};
const myName = {
    fname: 'Nikhil',
    lname: 'Gautam',
};
function printName(city, country) {
    console.log(`${this.fname}, ${this.lname}, ${city}, ${country}`);
}

let func_1 = printName.myBind(myName, 'JAMSHEDPUR', 'BHARAT'); // Nikhil, Gautam, JAMSHEDPUR, BHARAT
func_1('football', '10 million $');
let func_2 = printName.bind(myName, 'JAMSHEDPUR', 'BHARAT'); // Nikhil, Gautam, JAMSHEDPUR, BHARAT
func_2('football', '10 million $');

func_1 = printName.myBind(null, 'JAMSHEDPUR', 'BHARAT'); // undefined, undefined, JAMSHEDPUR, BHARAT
func_1('football', '10 million $');
func_2 = printName.bind(null, 'JAMSHEDPUR', 'BHARAT'); // undefined, undefined, JAMSHEDPUR, BHARAT
func_2('football', '10 million $');
