"use strict";
//Abstract classes are classes that contain one or more abstract methods in them.
//An abstract method is one that does not contain implementation, only declaration. 
//Abstract means not clear. 
class Account {
    constructor(no, bal) {
        this.accNo = no;
        this.bal = bal;
    }
    credit(amount) {
        this.bal += amount;
    }
    debit(amount) {
        if (amount > this.bal)
            throw "Insufficien funds";
        this.bal -= amount;
    }
    getBalance() {
        return this.bal;
    }
}
class SbAccount extends Account {
    constructor(no, bal, interest) {
        super(no, bal);
        this.interest = interest;
    }
    //When U implement an abstract method, U cannot change the signature of the method. 
    calculateInterest() {
        const bal = this.getBalance();
        const interestAmount = bal * 0.25 * this.interest / 100;
        this.credit(interestAmount);
    }
}
//todo: provide similar classes for RD and FD. 
