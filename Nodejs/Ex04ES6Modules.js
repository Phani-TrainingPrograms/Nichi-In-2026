export function greet(name){
    return `Hello, ${name}! Welcome to our store.`;
}

export function farewell(name){
    return `Goodbye, ${name}! Thank you for visiting our store.`;
}

export class Customer{
    constructor(name, phone, bill){
        this.name = name;
        this.phone = phone;
        this.bill = bill;
    }
}

//create a Employee class and Employee Repository Module and test it on a separate file that consumes the Repository.
