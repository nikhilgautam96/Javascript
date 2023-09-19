// Question - sum(1)(2, 3) ... (n) or sum(1, 2)(3)...(n)

function sum(a) {
    return function (b, c) {
        return a + b + c;
    };
}

const x = sum(10);
console.log(x(5, 6)); // 21
console.log(x(3, 2)); // 15
console.log(sum(20)(1, 4)); // 25
