let arr = [11, 2, 3, 4, undefined, 5, 'Nik', true, 8, 99, 'gtm'];
itr = arr[Symbol.iterator]();

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
/*
    LOGS:
    { value: 11, done: false }
    { value: 2, done: false }
    { value: 3, done: false }
    { value: 4, done: false }
    { value: undefined, done: false }
    { value: 5, done: false }
    { value: 'Nik', done: false }
    { value: true, done: false }
    { value: 8, done: false }
    { value: 99, done: false }
    { value: 'gtm', done: false }
    { value: undefined, done: true }
*/
