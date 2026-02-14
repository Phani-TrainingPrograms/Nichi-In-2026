//////////////////////////Class in TS/////////////////////////
class Employee{
    id: number
    name : string 
    address : string
    salary : number 

    /**
     *
     */
    constructor(id : number, name : string, address : string, salary : number) {
        this.id = id
        this.name = name
        this.address = address
        this.salary = salary      
    }

    displayDetails() : void{
        console.log(`ID : ${this.id}, Name : ${this.name}, Address : ${this.address}, Salary: ${this.salary}`);
    }
}

const person : Employee = new Employee(123, "Phaniraj", "Bangalore", 56000);
person.displayDetails();