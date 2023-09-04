const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Without functional programming approach.
let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        sum1 += numbers[i];
    }
}
console.log(sum1); // 20

// Using functional Programming approach.
const sum2 = numbers
    .filter((x) => x % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);
console.log(sum2); // 20
