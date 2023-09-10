// WAP to build an iterable function which take(N) and gives {1, 4, 9, ... N^2}
function createIterator(N) {
    let i = 0;

    return {
        [Symbol.iterator]: function () {
            return this;
        },
        next: function () {
            return ++i <= N
                ? { value: i * i, done: false }
                : { value: undefined, done: true };
        },
    };
}
const iterator = createIterator(10);
for (x of iterator) {
    console.log(x);
}
/*
    1
    4
    9
    16
    25
    36
    49
    64
    81
    100
*/
