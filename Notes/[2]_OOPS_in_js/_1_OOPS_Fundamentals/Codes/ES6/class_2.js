class Vehicle {
    #brand;
    #model;
    name = 'nik';
    constructor(brand, model) {
        this.age = 21;
        this.#brand = brand;
        this.#model = model;
    }
    // Public methods
    getBrand() {
        return this.#brand;
    }
    getModel() {
        return this.#model;
    }
    drive() {
        this.#startEngine();
        console.log(`Driving ${this.#brand} ${this.#model}`);
    }
    // Private methods
    #startEngine() {
        console.log(`Starting engine for ${this.#brand} ${this.#model}`);
    }
}
const car = new Vehicle('Ford', 'Mustang');
console.log(car.brand); // undefined
console.log(car.getBrand()); // Ford
console.log(car.getModel()); // Mustang
// console.log(car.#brand); // Property '#brand' is not accessible outside class 'Vehicle' because it has a private identifier.
car.drive();
// Starting engine for Ford Mustang
// Driving Ford Mustang
car.brand = 10;
console.log(car.brand); // 10
console.log(car.getBrand()); // Ford
console.log(car); // Vehicle { name: 'nik', age: 21, brand: 10 }
