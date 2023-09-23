function add(args) {
    return args[0] + args[1];
}
function square(a) {
    return a * a;
}
function cube(a) {
    return a * a * a;
}

function composition(fn1, fn2, fn3) {
    return function (a, b) {
        return fn3(fn2(fn1(a, b)));
    };
}

const composedFunc = composition(add, square, cube);
console.log(composedFunc([1, 2])); // 729

// Suppose if we had infinite functions to compose;
function composition2(...fn) {
    return function (...args) {
        return fn.reduce((acc, curFunc) => curFunc(acc), args);
    };
}

const composedFunc2 = composition2(add, square, cube);
console.log(composedFunc2(1, 2)); // 729
