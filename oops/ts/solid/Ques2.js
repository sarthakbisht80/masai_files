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
var OvernightShipping = /** @class */ (function () {
    function OvernightShipping() {
    }
    OvernightShipping.prototype.calculate = function () {
        return 200;
    };
    return OvernightShipping;
}());
// Context
var Shipping = /** @class */ (function () {
    function Shipping(strategy) {
        this.strategy = strategy;
    }
    Shipping.prototype.calculate = function () {
        return this.strategy.calculate();
    };
    return Shipping;
}());
// Usage
var standard = new Shipping(new StandardShipping());
console.log("Standard:", standard.calculate()); // 50
var express = new Shipping(new ExpressShipping());
console.log("Express:", express.calculate()); // 100
var overnight = new Shipping(new OvernightShipping());
console.log("Overnight:", overnight.calculate()); // 200
