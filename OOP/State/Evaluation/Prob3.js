//Concerte fns
var CreditCardPayment = /** @class */ (function () {
    function CreditCardPayment() {
    }
    CreditCardPayment.prototype.validateDetails = function (details) {
        return (typeof details.cardNumber === "string" && details.cardNumber.length === 16 &&
            typeof details.expiryDate === "string" &&
            details.expiryDate.length >= 4 && typeof details.cvv === "string" && details.cvv.length === 3);
    };
    CreditCardPayment.prototype.pay = function (amount) {
        var total = amount + amount * 0.015; //1.5%fee
        console.log("Paid 5 rupee via credit card wih 1.5% fee");
    };
    return CreditCardPayment;
}());
var PayPalPayment = /** @class */ (function () {
    function PayPalPayment() {
    }
    PayPalPayment.prototype.validateDetails = function (details) {
        return typeof details.email === "string" && details.email.includes("@");
    };
    PayPalPayment.prototype.pay = function (amount) {
        var total = amount + amount * 0.025;
        console.log("paid 5rupee via Paypal inc 2.5% fee");
    };
    return PayPalPayment;
}());
var CryptoPayement = /** @class */ (function () {
    function CryptoPayement() {
    }
    CryptoPayement.prototype.validateDetails = function (details) {
        return typeof details.walletAddress === "string" && details.walletAddress.length > 10;
    };
    CryptoPayement.prototype.pay = function (amount) {
        var total = amount + 50;
        console.log("Paid 5 rupees via crypto incl 50rupee feee");
    };
    return CryptoPayement;
}());
var PaymentProcesssor = /** @class */ (function () {
    function PaymentProcesssor() {
        this.strategy = null;
    }
    PaymentProcesssor.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    PaymentProcesssor.prototype.processPayement = function (details, amount) {
        if (!this.strategy) {
            console.log("no payment method selected");
            return;
        }
        if (this.strategy.validateDetails(details)) {
            this.strategy.pay(amount);
        }
        else {
            console.log("payment details validation failed");
        }
    };
    return PaymentProcesssor;
}());
var processor = new PaymentProcesssor();
//Pay with credit Card
processor.setStrategy(new CreditCardPayment());
processor.processPayement({ cardNumber: "123456789012345",
    expirydate: "12/26", cvv: "123"
}, 1000);
//switch to paypal
processor.setStrategy(new PayPalPayment());
processor.processPayement({
    email: "Invalid-email.com"
}, 1500);
//swict to crypto
processor.setStrategy(new CryptoPayement());
processor.processPayement({ walletAddress: "Dwrocno[p!6aasna#$" }, 2000);
