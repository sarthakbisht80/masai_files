var Book = /** @class */ (function () {
    function Book(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    return Book;
}());
// Creating an instance
var myBook = new Book("The Alchemist", "Paulo Coelho", 299);
// Logging all properties
console.log("Title:", myBook.title);
console.log("Author:", myBook.author);
console.log("Price:", myBook.price);
