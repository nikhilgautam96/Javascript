const human = {
    kind: 'Human',
};
const nik = Object.create(human);
console.log(nik);
nik.age = 21;

const ben = Object.create(nik);
console.log(ben);
ben.age = 12;
console.log('ben age', ben.age); // 12
console.log('ben proto age', ben.__proto__.age); // 21
ben.__proto__.age = 14;
console.log('ben age', ben.age); // 12
console.log('ben proto age', ben.__proto__.age); // 14
console.log('nik age', nik.age); // 14
