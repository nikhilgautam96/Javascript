/*
    Makes it easier to work with complex data structures.
    Reduce code duplications.
*/
// arrays
var original = [1, 2, 3];
var copy = [...original];
console.log(copy); // [ 1, 2, 3 ]
console.log(copy === original); // false

var first = [1, 2];
var second = [2, 3, 4];
var merged = [...first, ...second];
console.log(merged); // [ 1, 2, 2, 3, 4 ]

// objects
const ob1 = {
    fname: 'Nikhil',
    age: 21,
    gender: 'male',
};
const ob2 = {
    lname: 'Gautam',
    age: 22,
    gender: 'male',
};

// keys with same name get overriden.
const ob3 = { ...ob1, ...ob2, status: 'merged object' };
console.log(ob3);
/*
{
  fname: 'Nikhil',
  age: 22,
  gender: 'male',
  lname: 'Gautam',
  status: 'merged object'
}
*/
