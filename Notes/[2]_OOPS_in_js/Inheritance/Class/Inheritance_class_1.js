class Category {
    constructor(c) {
        this.categoryName = c;
    }
    getCategoryName() {
        console.log('category is :', this.categoryName);
    }
}
class Product extends Category {
    constructor(n, p, c) {
        super(c);
        this.name = n;
        this.price = p;
    }
    display() {
        console.log('Details of the product are');
        console.log('Name', this.name);
        console.log('Price', this.price);
        this.getCategoryName();
    }
}

let p = new Product('Iphone', 50000, 'Electronics');
p.display();
