const person = {
    name: 'John Doe',
    age: 30,
};
const jsonString = JSON.stringify(person);
console.log(jsonString); // {"name":"John Doe","age":30}

const personBack = JSON.parse(jsonString);
console.log(personBack); // { name: 'John Doe', age: 30 }
console.log(personBack.name); // John Doe
