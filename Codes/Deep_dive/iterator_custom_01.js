function fetchNextElement(array) {
    let idx = 0;
    function next() {
        if(idx === array.length) {
            return {value: undefined, done: true};
        }
        const nextElement = array[idx];
        idx++;
        return {value: nextElement, done: false};
    }
    return {next};
}

const automaticFetcher = fetchNextElement([99, 11, 12, 13, 0, 1, 2, 3, 4]);
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());