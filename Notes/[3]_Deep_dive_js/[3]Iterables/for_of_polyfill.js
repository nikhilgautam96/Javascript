function createIterator(array) {
    let index = 0;

    /*
        --> Every time, "for of" loop looks for [Symbol.iterator] function.
        --> The  [Symbol.iterator] function returns "this" (context of the current object).
        --> The returned context contains the "next()" method so "this" is used to call the next method of
        current object/context.
    */
    return {
        [Symbol.iterator]: function () {
            return this;
        },
        next: function () {
            return index < array.length
                ? { value: array[index++], done: false }
                : { value: undefined, done: true };
        },
    };
}

const myArray = [1, 2, 3];

let iterator = createIterator(myArray);

for (const x of iterator) {
    console.log(x);
}
/*
    1
    2
    3
*/
/* 
    --> once we have iterated over the Iterable the iterator can't re iterate from start, 
        so we need to initialize a new iterator.
 */
iterator = createIterator(myArray);
for (const x of iterator) {
    console.log(x);
}
/*
    1
    2
    3
*/
