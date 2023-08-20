# Class :-

-   In JavaScript, `a class is a syntactical sugar over the prototypal inheritance model, which is based on functions and prototypes. When you define a class using the class keyword, you are essentially defining a constructor function and attaching methods to its prototype. Hence they both are "function objects".`

-

```js
class Product {
    age = 11;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    // member functions
    displayProduct() {}
}
let iphone = new Product('Iphone 14 pro', 114000);
console.log('type is : ', typeof Product); // function
```

-   `classes and functions reside in the same type of memory, which is the "heap memory".`
-   It is the blueprint(of real life entities) using which objects are created.
-   The class keyword was introduced in JavaScript with the ECMAScript 2015 (ES6) specification.
-   Inside a class we have :-
    1. `Properties or Data members`.
        - inside a class data members can be accessed using only `this` keyword.
    2. `Behaviour or Member functions`.
-

```js
class Product {
    age = 11;
    constructor(name, price) {
        // Constructor is used to create new real life instances of a class called an object.
        // When we create an object the constructor is the first function that gets called.
        this.name = name;
        this.price = price;
        this.brand = 'Nike';
    }
    // member functions
    displayProduct() {
        console.log(this.name, this.age, this.brand, this.price);
    }
    buyProduct() {}
}

let iphone = new Product('Iphone 14 pro', 114000);
let macbook = new Product('Macbook pro', 154000);

console.log(iphone, macbook);
// Product { age: 11, name: 'Iphone 14 pro', price: 114000, brand: 'Nike' }
// Product { age: 11, name: 'Macbook pro', price: 154000, brand: 'Nike' }

iphone.displayProduct();
```

# Objects :-

-   These are the real instances of class(of real life entities).
-   Attempting to access a non-existent property in an object will result in undefined. The object itself remains unchanged.

# Constructor :-

-   These are special functions that doesn't qualify as a member function.
-   Constructors are called to create new objects.
-   We can define/declare data members inside the constructor.
-   Constructors are not mandatory in JavaScript. If a class does not have a constructor defined, JavaScript automatically provides a default constructor.The default constructor, if not explicitly defined, initializes the object with no arguments and performs no additional actions.

-

```js
class Person {
    // No explicit constructor defined
    // JavaScript provides a default constructor

    greet() {
        console.log('Hello!');
    }
}
const person = new Person();
person.greet(); // Output: Hello!
```

-   **_ Data members defined inside constructor vs outside constructor in js :- _**

1. `Inside Constructor` :

    - Data members defined inside the constructor are typically used for instance-specific properties.
    - These data members are accessible only within the instance of the class.
    - Each instance of the class will have its own separate copy of these data members.
    - They are commonly used to initialize instance-specific values based on constructor arguments or perform other initialization logic.

2. `Outside Constructor` :
    - Data members defined outside the constructor are typically used for shared properties among all instances of the class.
    - These data members are shared across all instances of the class.
    - They are accessible by all instances of the class, as well as the class itself.
    - Changes made to these data members will reflect in all instances of the class.
    - **_`Static members are associated with the class itself, rather than individual instances of the class. When we try to access a static data member using an instance variable JavaScript looks for the property on the instance itself. Since static members are not part of the instance, but rather the class, the property is not found on the instance and returns undefined.`_**
