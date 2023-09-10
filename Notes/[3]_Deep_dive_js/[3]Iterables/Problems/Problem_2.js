// WAP to build an iterable function which take(L, R) and gives {L^2, ... R^2}
function createIteratorRange(L, R) {
    let i = L - 1;

    return {
        [Symbol.iterator]: function () {
            return this;
        },
        next: function () {
            return ++i <= R
                ? { value: i * i, done: false }
                : { value: undefined, done: true };
        },
    };
}
const iterator = createIteratorRange(11, 15);
for (x of iterator) {
    console.log(x);
}
/*
    121
    144
    169
    196
    225
*/
