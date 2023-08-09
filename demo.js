debugger;
consumer = 'nikhil';
function p() {
    console.log(consumer);
    // undefined
    if (consumer == 'nikhil') {
        var consumer = 'gautam';
        console.log(consumer);
    }
    console.log(consumer);
    // undefined
}
p();

const users = [
    { fName: 'nikhil', lName: 'gautam', age: 25 },
    { fName: 'aditya', lName: 'gautam', age: 22 },
    { fName: 'Kushal', lName: 'gautam', age: 31 },
    { fName: 'Kapil', lName: 'gautam', age: 21 },
];
const output = users.reduce((acc, curr) => {
    if (curr.age < 30) {
        acc.push(curr.fName);
    }
    return acc;
}, []);
console.log(output);
