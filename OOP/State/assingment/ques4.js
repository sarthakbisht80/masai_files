// ----- Concrete States -----
var IdleState = /** @class */ (function () {
    function IdleState() {
    }
    IdleState.prototype.insertCard = function (machine) {
        console.log("Card inserted. Please enter your PIN.");
        machine.setState(new CardInsertedState());
    };
    IdleState.prototype.enterPin = function () {
        console.log("Insert card first.");
    };
    IdleState.prototype.withdrawCash = function () {
        console.log("Insert card and authenticate first.");
    };
    return IdleState;
}());
var CardInsertedState = /** @class */ (function () {
    function CardInsertedState() {
    }
    CardInsertedState.prototype.insertCard = function () {
        console.log("Card already inserted.");
    };
    CardInsertedState.prototype.enterPin = function (machine, pin) {
        if (pin === 1234) {
            console.log("PIN correct. You are authenticated.");
            machine.setState(new AuthenticatedState());
        }
        else {
            console.log("Incorrect PIN. Ejecting card.");
            machine.setState(new IdleState());
        }
    };
    CardInsertedState.prototype.withdrawCash = function () {
        console.log("Enter PIN before withdrawing cash.");
    };
    return CardInsertedState;
}());
var AuthenticatedState = /** @class */ (function () {
    function AuthenticatedState() {
    }
    AuthenticatedState.prototype.insertCard = function () {
        console.log("Card already inserted and authenticated.");
    };
    AuthenticatedState.prototype.enterPin = function () {
        console.log("Already authenticated.");
    };
    AuthenticatedState.prototype.withdrawCash = function (machine, amount) {
        console.log("Withdrawing \u20B9".concat(amount, "..."));
        machine.setState(new DispensingCashState());
    };
    return AuthenticatedState;
}());
var DispensingCashState = /** @class */ (function () {
    function DispensingCashState() {
    }
    DispensingCashState.prototype.insertCard = function () {
        console.log("Please wait, dispensing in progress.");
    };
    DispensingCashState.prototype.enterPin = function () {
        console.log("Please wait, dispensing in progress.");
    };
    DispensingCashState.prototype.withdrawCash = function (machine) {
        console.log("Cash dispensed. Returning to idle state.");
        machine.setState(new IdleState());
    };
    return DispensingCashState;
}());
// ----- Context -----
var ATM = /** @class */ (function () {
    function ATM() {
        this.state = new IdleState(); // initial state
    }
    ATM.prototype.setState = function (state) {
        this.state = state;
    };
    ATM.prototype.insertCard = function () {
        this.state.insertCard(this);
    };
    ATM.prototype.enterPin = function (pin) {
        this.state.enterPin(this, pin);
    };
    ATM.prototype.withdrawCash = function (amount) {
        this.state.withdrawCash(this, amount);
    };
    return ATM;
}());
// ----- Usage Example -----
var atm = new ATM();
// Correct Flow
atm.insertCard();
atm.enterPin(1234);
atm.withdrawCash(500);
atm.withdrawCash(0);
