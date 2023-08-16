// Question 1 -  What is the output ??
const user = {
    firstName: 'Nikhil',
    getname() {
        const firstName = 'Nikhil gautam';
        return this.firstName;
    },
};
console.log(user.getname()); // 'Nikhil'

// Question 2 - What is the result of accessing 'ref' in below code and why ??
function makeUser() {
    return {
        name: 'John',
        ref: this, // this here points to Window object
    };
}
let x = makeUser();
console.log(x.ref.name); // undefined
// Follow up question - How can we fix the above code so that `this` points to the `name` property.
function makeUserFIX() {
    return {
        name: 'John',
        func() {
            return this;
        },
    };
}
let y = makeUserFIX();
console.log(y.func().name); // 'John'

// Question 3 - What is the output ?
const ob1 = {
    name: 'Nikhil Gautam!',
    logMessage() {
        console.log(this.name); // What is logged?
    },
};
setTimeout(ob1.logMessage, 1000);
// undefined --> as `logMessage` is being used as a callback here and thus will point to Window.
// Window does not have `name` property.

// Follow up question - How to make it point to `name` property in setTimeout().
setTimeout(function () {
    ob1.logMessage();
}, 1000); // 'Nikhil Gautam!'

// Question 4 - What is the output ?
const ob2 = {
    name: 'Nikhil',
    greet() {
        return `Hello, ${this.name}!`;
    },
    farewell: () => {
        return `Goodbye, ${this.name}!`;
    },
};
console.log(ob2.greet()); // Hello, Nikhil!
console.log(ob2.farewell()); // Goodbye, undefined!

// Question 5 - Create an object calculator
let calculator = {
    read() {
        this.a = Number(prompt('a = ', 0));
        this.b = Number(prompt('b = ', 0));
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// Question 6 - What is the output ?
var length = 4;
function callback() {
    console.log(this.length);
}
const ob3 = {
    length: 5,
    method(fn) {
        fn();
    },
};
ob3.method(callback); // 4 --> as this will point to Window object insode callback as its parent is a function.
// Follow up question - what if the code is modified to below.

const ob4 = {
    length: 5,
    method() {
        // arguments = [callback, 2, 3]
        arguments[0]();
    },
};
ob4.method(callback, 2, 3);
// 3 --> as the callback here is inside the `arguments` array and the array itself is an object so it points to
// the array object. Array object has a property named `length` which gives the length of the array
// and that is `3` here.

// Question 7 - Implement calc.
// ----> const result = calc.add(10).multiply(5).subtract(30).add(10);
// ----> console.log(result.total);
// Implementation
const calc = {
    total: 0,
    add(val) {
        this.total += val;
        return this;
    },
    multiply(val) {
        this.total *= val;
        return this;
    },
    subtract(val) {
        this.total -= val;
        return this;
    },
};
const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total); // 30
