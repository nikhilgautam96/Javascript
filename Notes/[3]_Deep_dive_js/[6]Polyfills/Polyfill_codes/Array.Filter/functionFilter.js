// filter(callbackFn)
// filter(callbackFn, thisArg)
// callbackFn(element, index, array)
Array.prototype.myFilter = function (fn) {
    const resultArray = [];
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            resultArray.push(this[i]);
        }
    }
    return resultArray;
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.myFilter((elem, idx) => elem % 2 === 0));
// [ 2, 4, 6, 8 ]
