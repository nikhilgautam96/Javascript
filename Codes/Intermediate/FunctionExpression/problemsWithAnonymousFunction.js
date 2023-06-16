// arguments.callee
// Deprecated: This feature is no longer recommended. Though some browsers might still support it, 
// it may have already been removed from the relevant web standards, may be in the process of 
// being dropped, or may only be kept for compatibility purposes. Avoid using it, and update 
// existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

// Note: Accessing arguments.callee in strict mode will throw a TypeError. 
// If a function must reference itself, either give the function expression a name or use a 
// function declaration.

// The arguments.callee property contains the currently executing function that the arguments 
// belong to.

// For example, this syntax worked:

function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1) * n;
}
[1, 2, 3, 4, 5].map(factorial);

// but:

[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : /* what goes here? */ (n - 1) * n;
});
// did not. To get around this "arguments.callee" was added so you could do

[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : arguments.callee(n - 1) * n;
});

// However, the design of arguments.callee has multiple issues. 
// The first problem is that the recursive call will get a different this value.
// For example:

const global = this;
const sillyFunction = function (recursed) {
  if (this !== global) {
    console.log("This is:", this);
  } else {
    console.log("This is the global");
  }

  if (!recursed) {
    return arguments.callee(true);
  }
};

sillyFunction();
// OUTPUT :
// This is the global
// This is: [object Arguments]

// In addition, references to arguments.callee make inlining and tail recursion impossible in the 
// general case. 
// (You can achieve it in select cases through tracing, etc., but even the best code is suboptimal 
// due to checks that would not otherwise be necessary.)

// ECMAScript 3 resolved these issues by allowing named function expressions. 
// For example:
[1, 2, 3, 4, 5].map(function factorial(n) {
    return n <= 1 ? 1 : factorial(n - 1) * n;
});

// This has numerous benefits:
// 1. the function can be called like any other from inside your code
// 2. it does not create a variable in the outer scope (except for IE 8 and below)
// 3. it has better performance than accessing the arguments object

// Recursion of anonymous functions with a Y-combinator
// Although function expressions can now be named, arrow functions always remain anonymous, 
// which means they cannot reference themselves without being assigned to a variable first. 
// Fortunately, in Lambda calculus there's a very good solution which allows a function to 
// both be anonymous and self-referential. The technique is called a Y-combinator. 
// Here we will not explain how it works, only that it works.

// The Y-combinator: a utility function!
const Y = (hof) => ((x) => x(x))((x) => hof((y) => x(x)(y)));

console.log(
  [1, 2, 3, 4, 5].map(
    // Wrap the higher-order function in the Y-combinator
    // "factorial" is not a function's name: it's introduced as a parameter
    Y((factorial) => (n) => (n <= 1 ? 1 : factorial(n - 1) * n)),
  ),
);
// [ 1, 2, 6, 24, 120 ]

// Note: This method allocates a new closure for every iteration, which may significantly 
    // increase memory usage. It's only here to demonstrate the possibility, 
    // but should be avoided in production. Use a temporary variable or a named function expression 
    // instead.