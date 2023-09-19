/**
 * Question 2
 *  evaluate("sum")(4)(2)
 *  evaluate("multiply")(4)(2)
 *  evaluate("divide")(4)(2)
 *  evaluate("substract")(4)(2)
 */

function evaluate(operation) {
    return function (a) {
        return function (b) {
            switch (operation) {
                case 'sum':
                    return a + b;
                case 'multiply':
                    return a * b;
                case 'divide':
                    return a / b;
                case 'subtract':
                    return a - b;
            }
        };
    };
}

console.log(evaluate('sum')(25)(5)); // 30
console.log(evaluate('multiply')(25)(5)); // 125
console.log(evaluate('divide')(25)(5)); // 5
console.log(evaluate('subtract')(25)(5)); // 20

// In ES6 :
const evaluate2 = (operation) => (a) => (b) => {
    switch (operation) {
        case 'sum':
            return a + b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        case 'subtract':
            return a - b;
    }
};
console.log(evaluate2('sum')(25)(5)); // 30
console.log(evaluate2('multiply')(25)(5)); // 125
console.log(evaluate2('divide')(25)(5)); // 5
console.log(evaluate2('subtract')(25)(5)); // 20
