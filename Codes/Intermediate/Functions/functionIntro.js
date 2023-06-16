function func_1(x) {
    console.log(x + 10);
    return x * 10;
}
function func_2(x) {
    console.log(x + 10);
}
console.log("calling 1st function", func_1(2), "\ndone", func_2(11), func_1(5), func_2(3));
console.log("calling 2nd function", func_2(4));