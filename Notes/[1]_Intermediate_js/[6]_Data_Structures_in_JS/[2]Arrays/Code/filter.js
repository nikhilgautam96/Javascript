/*

    Filter method : returns a `shallow copy` of a portion of a given array, filtered down to just the elements
                    from the given array that pass the test implemented by the provided function.
    SYNTAX :
        filter(callback, thisArg)    --->   'Iterative methods'
            --> callback(element, index, array)

*/
// 1
const words1 = [
    'spray',
    'limit',
    'elite',
    'exuberant',
    'destruction',
    'present',
];
const result = words1.filter((word) => word.length > 6);
console.log(result); // [ 'exuberant', 'destruction', 'present' ]

// 2
const arrayLike = {
    length: 3,
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'a', // ignored by filter() since length is 3
};
console.log(Array.prototype.filter.call(arrayLike, (x) => x <= 'b')); // [ 'a', 'b' ]

// 3
console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]

// 4
// Modifying each word
let words2 = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
const modifiedWords = words2.filter((word, index, arr) => {
    arr[index + 1] += ' extra';
    return word.length < 6;
});
console.log(modifiedWords);
// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]

// 5
// Appending new words
words2 = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
const appendedWords = words2.filter((word, index, arr) => {
    arr.push('new');
    return word.length < 6;
});
console.log(appendedWords);
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// ["spray" ,"limit" ,"elite"]

// 6
// Deleting words
words2 = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
const deleteWords = words2.filter((word, index, arr) => {
    arr.pop();
    return word.length < 6;
});
console.log(deleteWords);
// Notice 'elite' is not even obtained as it's been popped off 'words' before filter can even get there
// ["spray" ,"limit"]
