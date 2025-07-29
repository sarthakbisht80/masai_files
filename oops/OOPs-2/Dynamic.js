var FastFly = /** @class */ (function () {
    function FastFly() {
    }
    FastFly.prototype.fly = function () {
        console.log("Flying fast like a rocket!");
    };
    return FastFly;
}());
var NoFly = /** @class */ (function () {
    function NoFly() {
    }
    NoFly.prototype.fly = function () {
        console.log("I cannot fly");
    };
    return NoFly;
}());
var Duck = /** @class */ (function () {
    function Duck(flyStrategy) {
        this.flyStrategy = flyStrategy;
    }
    Duck.prototype.performFly = function () {
        this.flyStrategy.fly();
    };
    Duck.prototype.setFlyStrategy = function (strategy) {
        this.flyStrategy = strategy;
    };
    return Duck;
}());
var duck = new Duck(new FastFly());
duck.performFly();
duck.setFlyStrategy(new NoFly());
duck.performFly();
