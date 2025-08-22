//Encapsulation -. Encapsulation involves bundling data (properties) and the methods that operate
//  on that data into a single unit, which is the class. 
// It also controls access to that data, protecting it from outside manipulation.
var Bank = /** @class */ (function () {
    ///constructor
    function Bank(initialBalance) {
        this.balance = initialBalance;
    }
    Bank.prototype.getBalance = function () {
        console.log(this.balance);
        //return balance
    };
    Bank.prototype.Deposit = function (amount) {
        this.balance += amount;
        console.log(" amount deposited is ".concat(amount, " ,New balance ").concat(this.balance));
    };
    Bank.prototype.Withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Wirhdrawn amount ".concat(amount, " curent balance is ").concat(this.balance));
        }
        else {
            console.log("DOnt have suffiecnet balance ..");
        }
    };
    return Bank;
}());
var acc = new Bank(12000);
// acc.balance= 120;//cannot do like this cause it is private hidden 
acc.Deposit(120);
acc.Withdraw(1300);
acc.getBalance();
