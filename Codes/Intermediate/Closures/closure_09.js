const a = (function fun() {
    let counter = 0;
    return function gun() {
        counter += 1; // here it remembers its scope in fun() function block.
        // so it takes its value from that scope and adds 1 to it everytime.
        return counter;
    };
})();
console.log(a);
console.log(a());
console.log(a());
console.log(a());
// OUTPUT :
// [Function: gun]
// 1
// 2
// 3

console.log(0 === 0);
console.log(-0 === -0);
console.log(0 === -0);
console.log(-0 === 0);
