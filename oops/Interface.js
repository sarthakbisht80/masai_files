var Doc = /** @class */ (function () {
    function Doc() {
    }
    Doc.prototype.print = function () {
        console.log("Printing Document...");
    };
    return Doc;
}());
var Photo = /** @class */ (function () {
    function Photo() {
    }
    Photo.prototype.print = function () {
        console.log("Printing Phots....");
    };
    return Photo;
}());
var doc = new Doc();
var pic = new Photo();
var Printables = [doc, pic];
Printables.forEach(function (item) { return item.print(); });
