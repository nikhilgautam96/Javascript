const arr = [1, 2, 3, 4, 5];
const res = arr.map(() => {
    console.log(this); // {}
    // since its parent is a map() function,
    // so map() itself points to `{}`
});
console.log();
