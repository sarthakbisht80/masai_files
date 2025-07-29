// Step 2: Implement each shipping type separately
var StandardShipping = /** @class */ (function () {
    function StandardShipping() {
    }
    StandardShipping.prototype.calculate = function () {
        return 50;
    };
    return StandardShipping;
}());
var ExpressShipping = /** @class */ (function () {
    function ExpressShipping() {
    }
    ExpressShipping.prototype.calculate = function () {
        return 100;
    };
    return ExpressShipping;
}());
// You can now add more without changing existing code
var OvernightShipping = /** @class */ (function () {
    function OvernightShipping() {
    }
    OvernightShipping.prototype.calculate = function () {
        return 150;
    };
    return OvernightShipping;
}());
// Step 3: Shipping class now uses strategies
var Shipping = /** @class */ (function () {
    function Shipping(strategy) {
        this.strategy = strategy;
    }
    Shipping.prototype.calculate = function () {
        return this.strategy.calculate();
    };
    return Shipping;
}());
var standard = new Shipping(new StandardShipping());
console.log(standard.calculate());
var express = new Shipping(new ExpressShipping());
console.log(express.calculate());
var overnight = new Shipping(new OvernightShipping());
console.log(overnight.calculate());
