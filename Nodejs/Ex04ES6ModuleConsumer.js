//this example consumes the ES6 module defined in Ex04ES6Module.js
import { greet, farewell, Customer } from './Ex04ES6Modules.js';
console.log(greet("Phaniraj"))
console.log(farewell("Phaniraj"))

const cst = new Customer("Phaniraj", "9876543210", 2500);
console.log(`Customer Details: Name - ${cst.name}, Phone - ${cst.phone}, Bill - ${cst.bill}`);