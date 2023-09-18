/**
 * 1941. Check if All Characters Have Equal Number of Occurrences
 *
 * @param {string} s
 * @return {boolean}
 *
 */
var areOccurrencesEqual = function (s) {
    const hm = new Map();
    for (ch of s) {
        if (!hm.has(ch)) {
            hm.set(ch, 1);
        } else {
            hm.set(ch, hm.get(ch) + 1);
        }
    }
    let previousValue = -1;
    for ([key, val] of hm) {
        if (previousValue === -1) {
            previousValue = val;
        } else if (previousValue !== val) {
            return false;
        }
    }
    return true;
};
