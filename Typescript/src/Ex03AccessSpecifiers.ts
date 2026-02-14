//3 access specifiers: public, private and protected. 

class Person{
    public name : string //accessible anywhere
    private aadharNo : number //accessible only inside the class
    protected age: number //accessible inside as well as sub classes. 

    constructor(name : string, adr : number, age : number) {
        this.name = name; this.aadharNo = adr; this.age = age
    }
    
    public getDetails() : string{
        return `${this.name} has aadhar no ${this.aadharNo} and his age is ${this.age} `
    }
    public getAadharDetails() : number{
        return this.aadharNo
    }
}
const rec : Person = new Person("Phaniraj", 234322343451, 49);
console.log(rec.name)
console.log(rec.getAadharDetails())//it is private. we are accessing it using public method 