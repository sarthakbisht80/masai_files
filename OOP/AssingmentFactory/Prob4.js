var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Book = /** @class */ (function () {
    function Book(title, author, reviews) {
        this.title = title;
        this.author = author;
        this.reviews = reviews;
    }
    Book.prototype.clone = function () {
        // Deep copy the reviews array
        var reviewsCopy = __spreadArray([], this.reviews, true);
        return new Book(this.title, this.author, reviewsCopy);
    };
    return Book;
}());
var original = new Book("1984", "George Orwell", ["Great read", "A classic"]);
var cloned = original.clone();
cloned.reviews.push("Loved the dystopia");
console.log("Original reviews:", original.reviews); // ["Great read", "A classic"]
console.log("Cloned reviews:", cloned.reviews); // ["Great read", "A classic", "Loved the dystopia"]
