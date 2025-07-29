// nterface Segregation Principle
// "Clients should not be forced to depend on interfaces they do not use."
//old printer can only print so it doesnt need scam  or fax
var OldPrinter = /** @class */ (function () {
    function OldPrinter() {
    }
    OldPrinter.prototype.print = function () {
        console.log("Printing with old printer...");
    };
    return OldPrinter;
}());
var SmartPrinter = /** @class */ (function () {
    function SmartPrinter() {
    }
    SmartPrinter.prototype.print = function () {
        console.log("Printing with smart printer...");
    };
    SmartPrinter.prototype.scan = function () {
        console.log("Scanning document...");
    };
    SmartPrinter.prototype.fax = function () {
        console.log("Sending fax...");
    };
    return SmartPrinter;
}());
var oldPrinter = new OldPrinter();
oldPrinter.print(); //can only print
var smartPrinter = new SmartPrinter();
smartPrinter.print();
smartPrinter.scan();
smartPrinter.fax();
