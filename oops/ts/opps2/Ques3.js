var ToyDuck = /** @class */ (function () {
    function ToyDuck() {
    }
    ToyDuck.prototype.fly = function () {
        console.log("Cannot fly");
    };
    ToyDuck.prototype.sound = function () {
        console.log("Cannot sound");
    };
    ToyDuck.prototype.swim = function () {
        console.log("Can float on water");
    };
    return ToyDuck;
}());
var toy = new ToyDuck();
toy.fly(); // Output: Cannot fly
toy.sound(); // Output: Cannot sound
toy.swim(); // Output: Can float on water
