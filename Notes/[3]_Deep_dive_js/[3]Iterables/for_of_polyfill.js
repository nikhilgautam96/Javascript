function createIterator(array) {
    let index = 0;

    /*
        --> The [Symbol.iterator] method is called only once when you initialize the for...of loop, 
            and it returns an iterator object. 

        --> The [Symbol.iterator] function is expected to return an iterable object, 
            not the this context itself. 
            --> In our code, it returns an object that has both a [Symbol.iterator] method and 
                a next() method.
            --> The [Symbol.iterator] method returns this, which is a reference to the object itself, 
                "effectively making the object iterable".

        --> The iterator object is then used for the duration of the loop, and the next() method 
            of the iterator is called each time the loop iterates to retrieve the next value.
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
console.log(iterator);
for (const x of iterator) {
    console.log(x);
}
/*
    1
    2
    3
*/
/* 
    --> once we have iterated over the Iterable the iterator can't re-iterate from start, 
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
