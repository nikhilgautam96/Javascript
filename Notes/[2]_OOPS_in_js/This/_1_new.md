## `new` Keyword :

-   It creates a new object of the constructor functions or simply functions and then binds that object to the this keyword.
-   Any different object we create of the same function will all inherit from the same object that we call as `[function].prototype = { ... }`
-   All static members are put inside of the `[function].prototype = { ... }` object.
-   If we want any property to be specific to a particular instance, we use `this` keyword.
