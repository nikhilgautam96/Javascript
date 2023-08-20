// 1.
const player1 = {
    fname: 'Virat',
    lname: 'kohli',
    numberToBat: 3,
    canBowl: false,
    getDetails: function () {
        console.log(this.fname, this.lname, 'comes at No.', this.numberToBat);
    },
};

const obj = function () {
    console.log(this.getDetails());
};
// obj();
let x = obj.bind(player1);
x();

// 2.
const module = {
    x: 42,
    getX: function () {
        return this.x;
    },
};
const unboundGetX = module.getX;
console.log(unboundGetX()); // the function get invoked at global scope.
// OUTPUT : undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); // the function gets invoked at global scope but has the object 'module' binded to it.
// OUTPUT : 42
