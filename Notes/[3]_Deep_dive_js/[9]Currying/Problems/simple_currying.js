// Example f(a, b) into f(a)(b).

function f(a) {
    return function (b) {
        return `a + b  ${a + b}`;
    };
}
console.log(f(5)(7)); // 12
console.log(f(2)(4)); // 6

// In ES6 :
const f2 = (a) => (b) => `a + b  ${a + b}`;

console.log(f2(5)(7)); // 12
console.log(f2(2)(4)); // 6
