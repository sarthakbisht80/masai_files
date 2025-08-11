// Concrete Apple Devices
var AppleLaptop = /** @class */ (function () {
    function AppleLaptop() {
    }
    AppleLaptop.prototype.specifications = function () {
        console.log("Apple Laptop: MacBook Pro, M1 Chip, 16GB RAM");
    };
    return AppleLaptop;
}());
var ApplePhone = /** @class */ (function () {
    function ApplePhone() {
    }
    ApplePhone.prototype.specifications = function () {
        console.log("Apple Phone: iPhone 14, A15 Bionic, 128GB Storage");
    };
    return ApplePhone;
}());
// Concrete Samsung Devices
var SamsungLaptop = /** @class */ (function () {
    function SamsungLaptop() {
    }
    SamsungLaptop.prototype.specifications = function () {
        console.log("Samsung Laptop: Galaxy Book, Intel i7, 16GB RAM");
    };
    return SamsungLaptop;
}());
var SamsungPhone = /** @class */ (function () {
    function SamsungPhone() {
    }
    SamsungPhone.prototype.specifications = function () {
        console.log("Samsung Phone: Galaxy S22, Snapdragon 8 Gen 1, 256GB Storage");
    };
    return SamsungPhone;
}());
// Apple Factory
var AppleFactory = /** @class */ (function () {
    function AppleFactory() {
    }
    AppleFactory.prototype.createDevice = function (type) {
        if (type === "laptop") {
            return new AppleLaptop();
        }
        else {
            return new ApplePhone();
        }
    };
    return AppleFactory;
}());
// Samsung Factory
var SamsungFactory = /** @class */ (function () {
    function SamsungFactory() {
    }
    SamsungFactory.prototype.createDevice = function (type) {
        if (type === "laptop") {
            return new SamsungLaptop();
        }
        else {
            return new SamsungPhone();
        }
    };
    return SamsungFactory;
}());
// Demonstration
function main() {
    var appleFactory = new AppleFactory();
    var samsungFactory = new SamsungFactory();
    var appleLaptop = appleFactory.createDevice("laptop");
    var samsungPhone = samsungFactory.createDevice("phone");
    appleLaptop.specifications();
    samsungPhone.specifications();
}
main();
