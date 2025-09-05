var OldPrinter = /** @class */ (function () {
    function OldPrinter() {
    }
    OldPrinter.prototype.print = function () {
        console.log("Printing document...");
    };
    return OldPrinter;
}());
var SmartPrinter = /** @class */ (function () {
    function SmartPrinter() {
    }
    SmartPrinter.prototype.print = function () {
        console.log("Printing document...");
    };
    SmartPrinter.prototype.scan = function () {
        console.log("Scanning document...");
    };
    SmartPrinter.prototype.fax = function () {
        console.log("Faxing document...");
    };
    return SmartPrinter;
}());
// Usage
var oldPrinter = new OldPrinter();
oldPrinter.print();
var smartPrinter = new SmartPrinter();
smartPrinter.print();
smartPrinter.scan();
smartPrinter.fax();
