/*
1. Create a class, that creates an object with a property 'value: 0',
2. create methods to add(x), subtract(y), multiply(z), divide(a) to perform respective operations on the object.
3. create a getter method to return the value of 'value: '
*/
class Calculator {
    constructor(value) {
        this.obj = {
            value,
        };
    }
    add(x) {
        this.obj.value += x;
        return this;
    }
    subtract(x) {
        this.obj.value -= x;
        return this;
    }
    multiply(x) {
        this.obj.value *= x;
        return this;
    }
    divide(x) {
        this.obj.value /= x;
        return this;
    }
    get getValue() {
        return this.obj.value;
    }
}
const c = new Calculator(0);
console.log(c.add(5).getValue);
console.log(c.subtract(2).getValue);
// Below statement is : currying
console.log(c.multiply(4).divide(2).getValue);
