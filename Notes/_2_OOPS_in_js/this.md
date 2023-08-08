# this :-
- `this` in JS is different than java and c++:
- In JS, `this keyword references to the calling site.` ie. from where the function or class is called.

# new :-
- It looks like `new` keyword only calls constructor but actually it does a lot more than that.
- `new keyword can be associated or used with both class and functions.`
- The new keyword executes a 4 step process :-
1. It creates a brand new empty JS object.
2. It does a process of Linking.
3. It calls the function with the `this` property assigned to the empty object it created before.
4. The function execution starts. ( `And we know that this keyword belongs to calling site so here the this keyword will point to the empty object created at the calling site.` ).
5. At last if the function doesn't return any specific object, then it automatically returns `this`. Otherwise it returns the object returned by us.
- eg 1:-
```js
function Product(n, p) {
    console.log(this);
    this.name = n;
    this.price = p;
    this.display = function() {
        console.log(this.name, this.price);
    }
    // return this;
    // return Symbol(10);
}

const p1 = new Product("iphone", 100000);
console.log(p1);
p1.display();
// eventhough we are not returning 'this' we still will get 'this' returned by default as 
// no other object is being returned. even if we return a non-object value it still returns 'this'.
// if we do --> [return 10;   or   return 'Nikhil';   or   return Symbol(10);] it still returns 'this'
// LOGS :
// Product {
//   name: 'iphone',
//   price: 100000,
//   display: [Function (anonymous)]
// }
// iphone 100000

const p2 = Product("samsung", 50000);
console.log(p2);        // undefined
// bcz, here without the 'new' keyword it will act as a normal function and 
// since a normal func by default returns 'undefined'.

const p3 = new Product("mac", 150000);
p3.display();       // mac 150000
```

# Prototypes :-
- Objects are created by constructor calls using new keyword.