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