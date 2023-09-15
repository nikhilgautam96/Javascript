// filter(callbackFn)
// filter(callbackFn, initialValue)
// callbackFn(accumulator, currentValue, currentIndex, array)
Array.prototype.myReduce = function (fn, initialValue) {
    let accumulator;
    if (initialValue) {
        accumulator = initialValue;
        for (let i = 0; i < this.length; i++) {
            accumulator = fn(accumulator, this[i], i, this);
        }
    } else {
        accumulator = this[0];
        for (let i = 1; i < this.length; i++) {
            accumulator = fn(accumulator, this[i], i, this);
        }
    }
    return accumulator;
};
const arr = [1, 2, 3, 4, 5];
console.log(arr.myReduce((acc, curr) => acc * curr));
// 120
console.log(arr.myReduce((acc, curr) => acc + curr, 0));
// 15
