"use strict";
//////////////////////////Class in TS/////////////////////////
class Employee {
    /**
     *
     */
    constructor(id, name, address, salary) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.salary = salary;
    }
    displayDetails() {
        console.log(`ID : ${this.id}, Name : ${this.name}, Address : ${this.address}, Salary: ${this.salary}`);
    }
}
const person = new Employee(123, "Phaniraj", "Bangalore", 56000);
person.displayDetails();
