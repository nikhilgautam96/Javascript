// map(callbackFn)
// map(callbackFn, thisArg)
// callbackFn(element, index, array)
Array.prototype.myMap = function (fn) {
    const resultArray = [];
    for (let i = 0; i < this.length; i++) {
        resultArray.push(fn(this[i], i, this));
    }
    return resultArray;
};
const arr = [1, 2, 3, 4, 5];
console.log(arr.myMap((elem, idx) => elem * elem)); // [ 1, 4, 9, 16, 25 ]
