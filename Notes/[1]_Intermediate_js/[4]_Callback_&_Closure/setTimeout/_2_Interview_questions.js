// Question 1 - What is the output ??
function x() {
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 1000);
    console.log('Namaste Javascript');
}
x();
// OUTPUT :
// Namaste Javascript
// 1

// Question 2 - What is the output ??
function test() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function exec() {
            console.log(`i : ${i}`);
        }, i * 1000);
    }
}
test();
// OUTPUT :
// i : 3
// i : 3
// i : 3
// Reason : here closure remembers the function scope of variable 'i' bcz of 'var'.
//          every time a new block is created.

// Follow up -  can we make it print {1, 2, 3}
function test_1() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function exec() {
            console.log(`i : ${i + 1}`);
        }, i * 1000);
    }
}
test_1();
// OUTPUT :
// i : 1
// i : 2
// i : 3
// Reason : here closure remembers the block scope of variable 'i' bcz of 'let'.
//          every time a new block is created. everytime the loop runs a new block is created
//          and the value of 'i' is different in each block.

// above code is same as :-
function test_2() {
    for (var i = 0; i < 3; i++) {
        let j = i;
        setTimeout(function exec() {
            console.log(`j : ${j} ---- i : ${i}`);
        }, i * 1000);
    }
}
test_2();
// OUTPUT :
// j : 0 ---- i : 3
// j : 1 ---- i : 3
// j : 2 ---- i : 3
// Reason : here closure remembers the block scope of variable 'j' bcz of 'let'.
//          every time a new block is created. everytime the loop runs a new block is created
//          and the value of 'j' is different in each block. And 'i' is function scope.

// Follow up - Can we print {1, 2, 3} without using 'let, const' keyword.
function test_4() {
    for (var i = 0; i < 3; i++) {
        function wrap(x) {
            setTimeout(() => {
                console.log(x, i);
            }, i * 1000);
        }
        wrap(i);
    }
}
test_4();
