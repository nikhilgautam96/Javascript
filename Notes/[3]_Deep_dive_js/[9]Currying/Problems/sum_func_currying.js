// Question - sum(1)(2)(3)

function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(2, 5, 7)); // 14

// using currying :
function sum1(a) {
    return function sum2(b) {
        return function sum3(c) {
            return a + b + c;
        };
    };
}
console.log(sum1(2)(5)(7)); // 14

// using ES6 :
const sum2 = (a) => (b) => (c) => a + b + c;

console.log(sum2(2)(5)(7)); // 14
