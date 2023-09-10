const _empDetails = Symbol('_empDetails');
class Employee {
    constructor(name, age, empId) {
        this.name = name;
        this.age = age;
        this.empId = empId;
    }
    getDetails() {
        return this[_empDetails]();
    }

    [_empDetails]() {
        return `Name: ${this.name}, Age: ${this.age}, EmployeeId: ${this.empId}`;
    }
}

const emp1 = new Employee('Nikhil', 21, 1771549);

console.log(emp1.getDetails()); // Name: Nikhil, Age: 21, EmployeeId: 1771549
console.log(emp1[_empDetails]()); // Name: Nikhil, Age: 21, EmployeeId: 1771549
