class BankAccount{
  public accountHolder : string; //name of the accout holder
  private balance : number; //current available amount
  protected accountNumber : number; //unique no to id the accound. 
  public readonly bankName : string = "Axis Bank";
  //readonly can be set only once either while declaring it or at the constructor level. const is set once and only once during the time of declaration. 
  public static totalAccounts : number = 0;
  //static member belong to the class, not to the object. If U want to share the data among all the objects then we mark those members as static. static members are invoked using classname. 

  /**
   *
   */
  constructor(holder: string, no : number, initBal : number) {
    this.accountHolder = holder;
    this.accountNumber = no;
    this.balance = initBal;
    BankAccount.totalAccounts++;//increments by 1.
  }

  public credit(amount : number) : void{
    this.balance += amount;
  }

  public debit(amount : number) : void{
    if(amount <= this.balance){
        this.balance -= amount;
    }else{
        throw "Insufficient funds"
    }
  }

  public getBalance() : number{
    return this.balance;
  }
}

const acc1 : BankAccount = new BankAccount("Phaniraj", 232343, 5000);
acc1.credit(2000);
acc1.debit(100)

const acc2 : BankAccount = new BankAccount("Akshay", 432433, 3000);
acc2.credit(2000);
acc2.debit(400)

console.log(`The Current balance of Mr.${acc1.accountHolder} is ${acc1.getBalance()}`)
console.log(`The Current balance of Mr.${acc2.accountHolder} is ${acc2.getBalance()}`)
console.log("The totalno of accs is " + BankAccount.totalAccounts)

//- public → lets us interact with accounts (deposit, withdraw).
//- private → keeps sensitive data (balance) hidden.
//- protected → allows subclasses (like SavingsAccount) to extend functionality safely.
//- readonly → ensures constants like bankName can’t be changed after initialization.
//- static → tracks global data (totalAccounts) across all instances.

//Inheritance in TS. Inheritance is required for extending pre created classes and add new members to them without breaking. Follows Open-Closed Principle.  
class SavingsAccount extends BankAccount{
    private interestRate : number;

    /**
     *
     */
    constructor(holder: string, no : number, initBal : number, interestRate : number) {
        super(holder, no, initBal);//Calling the immediate base class constructor 
        this.interestRate = interestRate;
    }

    public applyInterest() : void{
        console.log(`Applying interest for account ${this.accountNumber}`)//protected...
        const interestAmount = this.getBalance() * this.interestRate/100  * 0.25
        this.credit(interestAmount);
    }
}

const acc3 : SavingsAccount = new SavingsAccount("Phaniraj", 234343, 4000, 7.5);
acc3.credit(4000);
acc3.debit(50);
acc3.applyInterest();
console.log(`The Account holder ${acc3.accountHolder} has the balance of Rs.${acc3.getBalance()}`)
