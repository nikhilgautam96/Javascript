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