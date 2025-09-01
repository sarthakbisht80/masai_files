// Class implementing Printable
var Document = /** @class */ (function () {
    function Document() {
    }
    Document.prototype.print = function () {
        console.log("Printing Document...");
    };
    return Document;
}());
// Another class implementing Printable
var Photo = /** @class */ (function () {
    function Photo() {
    }
    Photo.prototype.print = function () {
        console.log("Printing Photo...");
    };
    return Photo;
}());
var doc = new Document();
var photo = new Photo();
// Storing in an array of type Printable[]
var printables = [doc, photo];
// Calling print() on each
printables.forEach(function (item) { return item.print(); });
