function Product(n, p, c) {
    this.name = n;
    this.price = p;
    Category.call(this, c);
}

function Category(c) {
    this.categoryName = c;
    this.getCategoryName = function () {
        console.log(this.categoryName);
    };
}

// let p = new Product('Iphone', 100000, 'Electronics');
// console.log(p);
// p.getCategoryName();

console.log(Product.prototype);
console.log(Category.prototype);
Product.prototype = Object.create(Category.prototype);
console.log(Product.prototype);
