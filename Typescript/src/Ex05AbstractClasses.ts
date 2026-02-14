//Abstract classes are classes that contain one or more abstract methods in them.
//An abstract method is one that does not contain implementation, only declaration. 
//Abstract means not clear. 
abstract class Account{
    public accNo : number
    public bal : number

    constructor(no: number, bal : number) {
        this.accNo = no;
        this.bal = bal;  
    }
    public credit(amount : number) : void{
        this.bal += amount
    }

    public debit(amount : number) : void{
        if(amount > this.bal)
            throw "Insufficien funds";
        this.bal -= amount
    }

    public getBalance() : number {
        return this.bal
    }

    public abstract calculateInterest () : void 
}

class SbAccount extends Account{
    private interest : number
    constructor(no: number, bal : number, interest: number) {
        super(no, bal);
        this.interest = interest 
    }
    //When U implement an abstract method, U cannot change the signature of the method. 
    public calculateInterest(): void {
        const bal = this.getBalance();
        const interestAmount = bal * 0.25 * this.interest/100;
        this.credit(interestAmount) 
    }
}
//todo: provide similar classes for RD and FD. 