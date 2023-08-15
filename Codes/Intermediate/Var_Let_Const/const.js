// -   Hoisted but stays in TDZ unless initialised.
console.log(a); // ReferenceError: Cannot access 'a' before initialization
const a = 10; 
// -   Block-scoped just like let.
function fun() {
    for (var i = 0; i < 3; i++) {
        const j = i;
        setTimeout(() => {
            console.log(j);
        }, i * 1000);
    }
}
fun();
// 0
// 1
// 2

// -   need to initialize at time of declaration.
const b; // SyntaxError: Missing initializer in const declaration
b = 20;


// -   cannot be reassigned any value.
const c = 10;
c = 20; // TypeError: Assignment to constant variable.


// -   cannot be redeclared.
const d = 25;
const d = 15; // SyntaxError: Identifier 'd' has already been declared


// -   However, if a constant is an object or array its properties or items can be updated or removed.
const obj = {
    fname: 'nikhil',
    lname: 'gautam'
}
console.log('before', obj); // before { fname: 'nikhil', lname: 'gautam' }
obj.fname = 'aditya';
console.log('after', obj); // after { fname: 'aditya', lname: 'gautam' }