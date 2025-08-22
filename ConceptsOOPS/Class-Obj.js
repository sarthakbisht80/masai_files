var car = /** @class */ (function () {
    //constructor to initialize the object of the class
    function car(brandName, model, year) {
        this.brand = brandName;
        this.model = model;
        this.year = year;
    }
    car.prototype.display = function () {
        console.log("Brand name is ".concat(this.brand, " model ").concat(this.model, " manufactured in ").concat(this.year));
    };
    return car;
}());
//creating object of vlass
var myCar = new car('Toyota', 'Camry', 2023);
myCar.display();
