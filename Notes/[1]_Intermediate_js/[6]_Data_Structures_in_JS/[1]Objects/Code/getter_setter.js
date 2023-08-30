const myObj = {
    property1: 'Value 1',
    property2: 'Value 2',
    method1: function () {
        console.log('Hello, World!');
    },
    get getProperty1() {
        return this.property1;
    },
    set setProperty1(val) {
        this.property1 = val;
    },
    get getProperty2() {
        return this.property1;
    },
    set setProperty2(val) {
        this.property2 = val;
    },
};
myObj.setProperty1 = 101;
console.log(myObj.getProperty1);
