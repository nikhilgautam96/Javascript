function test_1() {
    for(let i = 0; i<3; i++) {
        setTimeout(function exec() {
            console.log(`i : ${i}`);
        }, i*1000);
    }
}
// test_1();
// OUTPUT :
// i : 0
// i : 1
// i : 2

// Reason : here closure remembers the block scope of variable 'i' bcz of 'let'. 
//          every time a new block is created. everytime the loop runs a new block is created
//          and the value of 'i' is different in each block.
// above code is same as :-
function test_2() {
    for(var i = 0; i<3; i++) {
        let j = i;
        setTimeout(function exec() {
            console.log(`j : ${j} ---- i : ${i}`);
        }, i*1000);
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