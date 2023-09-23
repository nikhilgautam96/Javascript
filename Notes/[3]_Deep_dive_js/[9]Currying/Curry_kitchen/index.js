/**
 *  Can be asked in Senior Interviews.
 *
 * A curry Kitchen is actually a function () say ('curry()') that
 *      --> takes a function f(a, b, c) and then converts it into f(a)(b)(c).
 *      --> the number of nested functions in curry fuinction is always equal to the
 *          number of arguments in original function.
 * We can call tghe curried function in any fashion we want a long as we provide the exact number of arguments,
 *      we will still get the same results.
 */

const curry = (func) =>
    function curriedFunc(...args) {
        if (args.length >= func.length) {
            // we have matched the no. of nested functions and no. of arguments in original fuction ie to be curried.
            return func(...args);
        } else {
            return (...nextArgs) => curriedFunc(...args, ...nextArgs);
        }
    };

const sum = (a, b, c, d) => a + b + c + d;
const totalSum = curry(sum); // getting the curriedFunc() function.
console.log(totalSum(1)(2)(3)(4)); // 10
console.log(totalSum(1, 2)(3)(4)); // 10
console.log(totalSum(1)(2, 3, 4)); // 10
