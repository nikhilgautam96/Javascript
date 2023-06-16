function test() {
    for(var i = 0; i<3; i++) {
        setTimeout(function exec() {
            console.log(`i : ${i}`);
        }, i*1000);
    }
}
test();
// OUTPUT :
// i : 3
// i : 3
// i : 3

// Reason : here closure remembers the function scope of variable 'i' bcz of 'var'. 
//          every time a new block is created.