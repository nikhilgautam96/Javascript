const myObj = {
    [Symbol.iterator]: function* () {
        yield 'one';
        yield 'two';
        yield 'three';
    },
};

/*
    --> for..of loop here calls the "[Symbol.iterator]: function* ()" function once.
    --> It returns an "iterable Object".
    --> The "next()" method is called implicitly over the iterable object everytime the loop runs.
*/
for (x of myObj) {
    console.log(x);
}
/*
    one
    two
    three
*/
