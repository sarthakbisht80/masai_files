class Book {
    title: string;
    author: string;
    price: number;

    constructor(title: string, author: string, price: number) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

// Creating an instance
const myBook = new Book("The Alchemist", "Paulo Coelho", 299);

// Logging all properties
console.log("Title:", myBook.title);
console.log("Author:", myBook.author);
console.log("Price:", myBook.price);
