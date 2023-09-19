# Currying :-

-   Currying in JS is a way of consuming a function that returns closure functions that can take any number of arguments and in turn again return closure functions. It finally returns the result that we expect until we reach the last argument in curry chain.

-   Currying is conversion of functions from callable as `func(a, b)` to `func(a)(b)`
-   Currying in JS is a technique where we write a function in such a way that it accepts one set of arguments and in turn returns a function that accepts next set of arguments until the last set set is passed, when finally the expected cumulative result of all function calls is returned.

-   `Number of nested functions that a curried function has depends on number of arguments it receives.

# Why do we use currying :-

-   Following are the reasons why currying is good :

✅ It makes a function pure which makes it expose to less errors and side effects.

✅ It helps in avoiding the same variable again and again.

✅ It is a checking method that checks if you have all the things before you proceed.

✅ It divides one function into multiple functions so that one handles one set of responsibility.

# Currying vs Partial Application :-

-   `Partial Application` :
    -   It is a function that transforms a function into another function with small `arity (the no. of operands/arguments a function receives)`.

# Real world scenario for using currying :-
