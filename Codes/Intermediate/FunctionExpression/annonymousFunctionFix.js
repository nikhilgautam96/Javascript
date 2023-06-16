// console.log(f(5));      // TypeError: f is not a function
var f = function(n) {
    //--> this annonymous function in a function expression will work with recursion
    if(n <= 1) return n;
    return n * f(n-1);
}

console.log(f(5));      // 120 

// but this will fail if we try to call function using the variable name 'f' before assigning 
// the annonymous function to that variable 'f'.
