"use strict";
//3 access specifiers: public, private and protected. 
class Person {
    constructor(name, adr, age) {
        this.name = name;
        this.aadharNo = adr;
        this.age = age;
    }
    getDetails() {
        return `${this.name} has aadhar no ${this.aadharNo} and his age is ${this.age} `;
    }
    getAadharDetails() {
        return this.aadharNo;
    }
}
const rec = new Person("Phaniraj", 234322343451, 49);
console.log(rec.name);
console.log(rec.getAadharDetails()); //it is private. we are accessing it using public method 
