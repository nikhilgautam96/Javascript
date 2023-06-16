function mapper(arr, fn) {
    /**
     * arr --> an array elements.
     * fn --> callback function which accepts two arguments (value, index).
     */
    let result = [];
    for (let i = 0; i<arr.length; i++) {
        let res = fn(arr[i], i);
        result.push(res);
    }
    return result;
}
let arr = [1, 2, 3, 4, 5];
let x = mapper(arr, function cuber(v, i) {
    console.log(v, v * v * v, i);
    return v*v*v;
});
console.log(x, arr);
// OUTPUT :
// 1 1 0
// 2 8 1
// 3 27 2
// 4 64 3
// 5 125 4
// [ 1, 8, 27, 64, 125 ] [ 1, 2, 3, 4, 5 ]