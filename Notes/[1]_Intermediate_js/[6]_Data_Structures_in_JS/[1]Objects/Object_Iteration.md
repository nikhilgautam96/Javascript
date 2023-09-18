# Iterating over Objects in JS :-

1. Using `for...in loop` :

```js
const population = {
    male: 4,
    female: 93,
    others: 10,
};

// Iterate through the object
for (const key in population) {
    if (population.hasOwnProperty(key)) {
        console.log(`${key}: ${population[key]}`);
    }
}
```

2. We have three object static methods that can be used to iterate using loop, which are:

    1. `Object.keys()`

    ```js
    const population = {
        male: 4,
        female: 93,
        others: 10,
    };

    let genders = Object.keys(population);

    console.log(genders); // ["male","female","others"]
    let genders = Object.keys(population);

    genders.forEach((gender) => console.log(gender));
    ```

    2. `Object.values()`

    ```js
    const population = {
        male: 4,
        female: 93,
        others: 10,
    };
    let numbers = Object.values(population);

    console.log(numbers); // [4,93,10]
    let numbers = Object.values(population);

    numbers.forEach((number) => console.log(number));
    ```

    3. `Object.entries()`

    ```js
    const population = {
        male: 4,
        female: 93,
        others: 10,
    };

    let populationArr = Object.entries(population);

    console.log(populationArr);
    for ([key, value] of populationArr) {
        console.log(key);
    }
    ```
