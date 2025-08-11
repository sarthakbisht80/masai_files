// Enum for pizza size
var Size;
(function (Size) {
    Size["SMALL"] = "small";
    Size["MEDIUM"] = "medium";
    Size["LARGE"] = "large";
})(Size || (Size = {}));
var Pizza = /** @class */ (function () {
    function Pizza(builder) {
        this.size = builder.size;
        this.cheese = builder.cheese;
        this.pepperoni = builder.pepperoni;
        this.mushrooms = builder.mushrooms;
    }
    Pizza.prototype.toString = function () {
        return "Pizza[size=".concat(this.size, ", cheese=").concat(this.cheese, ", pepperoni=").concat(this.pepperoni, ", mushrooms=").concat(this.mushrooms, "]");
    };
    return Pizza;
}());
// Builder class
var PizzaBuilder = /** @class */ (function () {
    function PizzaBuilder() {
        this.cheese = false;
        this.pepperoni = false;
        this.mushrooms = false;
    }
    PizzaBuilder.prototype.setSize = function (size) {
        this.size = size;
        return this;
    };
    PizzaBuilder.prototype.setCheese = function (cheese) {
        this.cheese = cheese;
        return this;
    };
    PizzaBuilder.prototype.setPepperoni = function (pepperoni) {
        this.pepperoni = pepperoni;
        return this;
    };
    PizzaBuilder.prototype.setMushrooms = function (mushrooms) {
        this.mushrooms = mushrooms;
        return this;
    };
    PizzaBuilder.prototype.build = function () {
        if (!this.size) {
            throw new Error("Size must be set before building the pizza.");
        }
        return new Pizza(this);
    };
    return PizzaBuilder;
}());
var myPizza = new PizzaBuilder()
    .setSize(Size.LARGE)
    .setCheese(true)
    .setMushrooms(true)
    .setPepperoni(false)
    .build();
console.log("Built pizza:");
console.log(myPizza.toString());
