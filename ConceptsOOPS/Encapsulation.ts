//Encapsulation -. Encapsulation involves bundling data (properties) and the methods that operate
//  on that data into a single unit, which is the class. 
// It also controls access to that data, protecting it from outside manipulation.

class Bank{
    private balance:number;   //balcne of account
    ///constructor
    constructor(initialBalance:number){
    this.balance=initialBalance;

}

    getBalance():void{
        console.log(this.balance);
        //return balance

    }

    public Deposit(amount:number):void{
        this.balance+=amount;
        console.log(` amount deposited is ${amount} ,New balance ${this.balance}`);
    }

    public Withdraw(amount:number){
        if(amount<=this.balance){
            this.balance-=amount;
            console.log(`Wirhdrawn amount ${amount} curent balance is ${this.balance}`);
        }
        else{
            console.log("DOnt have suffiecnet balance ..");
        }
    }
}


const acc= new Bank(12000);
// acc.balance= 120;//cannot do like this cause it is private hidden 
acc.Deposit(120);
acc.Withdraw(1300);
acc.getBalance();

