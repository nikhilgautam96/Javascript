/*
    Memoization : It is a technique used to speed up function execution by caching its results.
        Instead of re-executing a function with the same arguments, we can return the cached result.
    Usage :
        --> A function that makes API calls with the same parameters multiple times, 
        How can we improve perfomance by reducing the number of requests to the remote server.
*/
// example - fibonacci series.

// Define a memoization function
function memoize(fn) {
    const cache = {};

    return function (args) {
        const key = JSON.stringify(args);
        console.log(key);
        if (!cache[key]) {
            cache[key] = fn(args);
            console.log(cache);
        } else {
            console.log('Already Exists in Cache.', cache);
        }
        return cache[args];
    };
}

// Memoize the fibonacci function.
const memoizedFibonacci = memoize(function (n) {
    if (n <= 1) return n;
    return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
});
// Calling the memoized function.
console.log(memoizedFibonacci(4)); // 13
console.log('------------');
console.log(memoizedFibonacci(7)); // 13
