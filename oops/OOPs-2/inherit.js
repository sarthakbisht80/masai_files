//Question 1-
var ToyDuck = /** @class */ (function () {
    function ToyDuck() {
    }
    ToyDuck.prototype.swim = function () {
        console.log("cannot float on water..");
    };
    ToyDuck.prototype.fly = function () {
        console.log("cannot fly");
    };
    ToyDuck.prototype.sound = function () {
        console.log("cannot sound");
    };
    return ToyDuck;
}());
var toy = new ToyDuck();
toy.fly();
toy.sound();
toy.swim();
