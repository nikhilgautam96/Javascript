function fetchNextElement(array) {
    let idx = 0;
    function next() {
        if (idx === array.length) {
            return { value: undefined, done: true };
        }
        const nextElement = array[idx];
        idx++;
        return { value: nextElement, done: false };
    }
    return { next };
}

const automaticFetcher = fetchNextElement([99, 11, 12, 13, 0, 1, 2, 3, 4]);
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
/*

    LOGS:
    { value: 99, done: false }
    { value: 11, done: false }
    { value: 12, done: false }
    { value: 13, done: false }
    { value: 0, done: false }
    { value: 1, done: false }
    { value: 2, done: false }
    { value: 3, done: false }
    { value: 4, done: false }
    { value: undefined, done: true }

*/
