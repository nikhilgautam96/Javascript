// Question - sum(1)(2)(3) ... (n)

function sum(a) {
    return function (b) {
        return b ? sum(a + b) : a;
    };
}

console.log(sum(1)()); // 1
console.log(sum(1)(2)(3)()); // 6
console.log(sum(1)(2)(3)(4)(5)()); // 15

// Using ES6:

const sum2 = (a) => (b) => b ? sum(a + b) : a;

console.log(sum2(1)()); // 1
console.log(sum2(1)(2)(3)()); // 6
console.log(sum2(1)(2)(3)(4)(5)()); // 15
