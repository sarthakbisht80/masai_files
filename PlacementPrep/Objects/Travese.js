const library = {
  name: "City Central Library",
  location: "New York",
  books: [
    { title: "Atomic Habits", author: "James Clear", available: true },
    { title: "The Alchemist", author: "Paulo Coelho", available: false },
    { title: "Deep Work", author: "Cal Newport", available: true }
  ],


  findBook: function (bookTitle) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].title === bookTitle) {
        return this.books[i];
      }
    }
    return "Book not found";
  }
};


console.log("Available Books:");
for (let i = 0; i < library.books.length; i++) {
  if (library.books[i].available) {
    console.log(
      `Title: ${library.books[i].title}, Author: ${library.books[i].author}`
    );
  }
}

const result = library.findBook("Atomic Habits");
console.log("\nSearch Result:", result);
