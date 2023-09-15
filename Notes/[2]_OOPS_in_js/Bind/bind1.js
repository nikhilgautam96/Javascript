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

const func = function () {
    console.log(this.getDetails());
};
// obj();
let x = func.bind(player1); // bind returns a function.
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

// 3.
function fun() {
    console.log(`I am ${this.name}.`);
}
function Batman() {
    let name = 'Batman';
    console.log('I am gun function.');
    fun();
}
let y = fun.bind(Batman);
y(); // I am Batman.  : bcz, this.name will give the name of `function Batman`.
