var CardPayment = /** @class */ (function () {
    function CardPayment() {
    }
    CardPayment.prototype.pay = function (amount) {
        console.log("Processing card payment of \u20B9".concat(amount));
    };
    return CardPayment;
}());
var UPIPayment = /** @class */ (function () {
    function UPIPayment() {
    }
    UPIPayment.prototype.pay = function (amount) {
        console.log("Processing UPI payment of \u20B9".concat(amount));
    };
    return UPIPayment;
}());
var BitcoinPayment = /** @class */ (function () {
    function BitcoinPayment() {
    }
    BitcoinPayment.prototype.pay = function (amount) {
        console.log("Processing Bitcoin payment of \u20B9".concat(amount));
    };
    return BitcoinPayment;
}());
var Payment = /** @class */ (function () {
    function Payment(strategy) {
        this.strategy = strategy;
    }
    Payment.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Payment.prototype.process = function (amount) {
        this.strategy.pay(amount);
    };
    return Payment;
}());
var payment = new Payment(new CardPayment());
payment.process(1000); // Processing card payment of ₹1000
payment.setStrategy(new BitcoinPayment());
payment.process(2000);
payment.setStrategy(new UPIPayment());
payment.process(500);
