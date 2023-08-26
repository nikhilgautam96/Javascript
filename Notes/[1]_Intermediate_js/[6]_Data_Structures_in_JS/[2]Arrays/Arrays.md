# Arrays in JS :-

-   They are simply objects.
-   Stores collections of multiple items within single variable name.
-   Features :
    1. Resizable/dynamic
    2. Not associative : `accessed using nonnegative integers as keys / index (starting with 0).`
    3. Array copy operations creates shallow copies.
-   Array Constructor :

    -   `new Array() // length 0 array.`
    -   `new Array(length) // // length = "length" array.`
    -   `new Array(elem1, elem2, /* ... */, elemN) // array with 'n' elements.`
    -   eg :-

    ```js
    const arrayEmpty = new Array(2);
    console.log(arrayEmpty.length); // 2
    console.log(arrayEmpty[0]); // undefined; actually, it is an empty slot
    // `in` operator.
    console.log(0 in arrayEmpty); // false
    console.log(1 in arrayEmpty); // false
    ```

# Push method

# Unshift method

# Pop method

# Shift method

# IndexOf method

# lastIndexOf method

# Includes method

# Find method

# Concat method

# Slice method

# Spread operator

# For loop in Array

# For of loop in Arrays

# ForEach method

# Join method

# Split method

# Filter method

# Map method
