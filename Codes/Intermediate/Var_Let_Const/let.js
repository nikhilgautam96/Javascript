{
    let x = 10;
    console.log(x);
}
// console.log(x);     // ReferenceError: x is not defined

function fun() {
    // console.log(y);     // ReferenceError: y is not defined
    let y = 20;
    console.log(y);
}
fun();
// console.log(y);     // ReferenceError: y is not defined

// ----------------------------------XXXXXXXXXX------------------------------------------ //

let a = 15;
// let a = 25;      // let does not allow redeclaration.
//        - "SyntaxError: Identifier 'a' has already been declared"

// ----------------------------------XXXXXXXXXX------------------------------------------ //

// `let` will not give complete global scope if declared outside any block, unlike `var`.
// console.log(d);     // ReferenceError: Cannot access 'd' before initialization
let d = 'nikhil';

// ----------------------------------XXXXXXXXXX------------------------------------------ //

// without using let :-
function test_3() {
    for (var i = 0; i < 3; i++) {
        function wrap(x) {
            setTimeout(() => {
                console.log(x, i);
            }, i * 1000);
        }
        wrap(i);
    }
}
test_3();
// 0 3
// 1 3
// 2 3

// ----------------------------------XXXXXXXXXX------------------------------------------ //

// ----------------------------------XXXXXXXXXX------------------------------------------ //

// ----------------------------------XXXXXXXXXX------------------------------------------ //

// ----------------------------------XXXXXXXXXX------------------------------------------ //

// ----------------------------------XXXXXXXXXX------------------------------------------ //
