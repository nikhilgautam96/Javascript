function createIterator(array) {
    let index = 0;

    return {
        next: function () {
            return index < array.length
                ? { value: array[index++], done: false }
                : { value: undefined, done: true };
        },
    };
}

const myArray = [1, 2, 3];

const iterator = createIterator(myArray);

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
