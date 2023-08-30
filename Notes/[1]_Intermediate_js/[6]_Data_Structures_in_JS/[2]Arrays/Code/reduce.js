/*

    Reduce method : returns a single value by executing a reducer callback function on each element of the array.
    SYNTAX :
        reduce(callbackFn, initialValue)    --->   'Iterative methods'
            --> callback(accumulator, currentValue, currentIndex, array)
            --> initialValue : 
                        1. A value to which accumulator is initialized the first time the callback is called.
                        2. If initialValue is not specified, accumulator is initialized to the first value in the array,
                             and callbackFn starts executing with the second value in the array as currentValue. 
                        3. In this case, if the array is empty (so that there's no first value to return as accumulator),
                         an error is thrown.
*/
// 1
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
console.log(sumWithInitial); // 10

// 2
const array2 = [15, 16, 17, 18, 19, 20];
function reducer(acc, curr, index) {
    const returns = acc + curr;
    console.log(
        `acc: ${acc}, curr: ${curr}, index: ${index}, returns: ${returns}`
    );
    return returns;
}
console.log(array2.reduce(reducer)); // 105
// Callback is invoked 5 times only, w/o initial value.
// acc: 15, curr: 16, index: 1, returns: 31
// acc: 31, curr: 17, index: 2, returns: 48
// acc: 48, curr: 18, index: 3, returns: 66
// acc: 66, curr: 19, index: 4, returns: 85
// acc: 85, curr: 20, index: 5, returns: 105

// 3
/*
Using reduce() with sparse arrays :
    --> reduce() skips missing elements in sparse arrays, but it does not skip undefined values.
*/
console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN

// 4
/*
Function sequential piping :
 --> The pipe function takes a sequence of functions and returns a new function. 
    When the new function is called with an argument, the sequence of functions are called in order, 
    with each one receiving the return value of the previous function.
*/
const pipe = (...functions) => {
    console.log('...functions :', functions);
    return (initialValue) => {
        console.log('initialiValue :', initialValue);
        return functions.reduce((acc, fn) => fn(acc), initialValue);
    };
    // here,
    // acc = initialValue (6 | 9 | 16 | 10)
    // fn = ...function [double, triple] | [triple, triple] | [double, triple, quadruple]
    // when we call 'reduce()' on '...functions', each function is called sequentially on the 'accumulator'.
};
// Building blocks to use for composition
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;
console.log(double, triple, quadruple);
// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);
console.log(multiply6);
console.log(multiply9);
console.log(multiply16);
// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240

// 5
/*
Sum of values in an object array :
    --> To sum up the values contained in an array of objects, you must supply an initialValue, 
    so that each item passes through your function.
*/
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce((acc, curr) => acc + curr.x, 0);
console.log(sum); // 6

// 6
/*
Running promises in sequence :
 --> Promise sequencing is essentially function piping demonstrated in the previous section, 
    except done asynchronously.
*/
const asyncPipe = (...functions) => {
    console.log('...function :', functions);
    return (initialValue) => {
        console.log('initialValue :', initialValue);
        return functions.reduce(
            (acc, curr) => acc.then(curr),
            Promise.resolve(initialValue)
        );
    };
};
const p1 = async (a) => a * 2;
const p2 = async (a) => a * 5;
const func = (a) => a * 3;
const p3 = async (a) => a * 4;
asyncPipe(p1, p2, func, p3)(10).then(console.log); // 1200
