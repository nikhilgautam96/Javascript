function* fetchNextElement() {
    console.log('I am inside the generator function.');
    yield 1;
    yield 2;
    console.log('Somewhere in the middle.');
    yield 3;
    yield 4;
}

// it will return a return a special type of iterator, called a Generator,
// and it won't execute the function.
const itr = fetchNextElement();
console.log('1st', itr.next());
console.log('2nd', itr.next());
console.log('3rd', itr.next());
console.log('4th', itr.next());
console.log('5th', itr.next());
console.log('6th', itr.next());

// LOGS :
// I am inside the generator function.
// 1st { value: 1, done: false }
// 2nd { value: 2, done: false }
// Somewhere in the middle.
// 3rd { value: 3, done: false }
// 4th { value: 4, done: false }
// 5th { value: undefined, done: true }
// 6th { value: undefined, done: true }
