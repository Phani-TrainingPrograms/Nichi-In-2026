const flipKart = require('./Ex02Modules');
console.log(flipKart)//it must return an object with 3 methods..
flipKart.addItem({name: 'Laptop', price: 50000, brand: 'Dell'});
flipKart.addItem({name: 'Mobile', price: 20000, brand: 'Samsung'});
flipKart.addItem({name: 'Headphones', price: 2000, brand: 'Boat'});
console.log("All items in the cart:", flipKart.getAllItems());
console.log("Total Bill: ", flipKart.generateBill())