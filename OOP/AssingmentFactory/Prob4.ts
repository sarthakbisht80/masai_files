class Book {
  title: string;
  author: string;
  reviews: string[];

  constructor(title: string, author: string, reviews: string[]) {
    this.title = title;
    this.author = author;
    this.reviews = reviews;
  }

  clone(): Book {
    // Deep copy the reviews array
    const reviewsCopy = [...this.reviews];
    return new Book(this.title, this.author, reviewsCopy);
  }
}


const original = new Book("1984", "George Orwell", ["Great read", "A classic"]);
const cloned = original.clone();

cloned.reviews.push("Loved the dystopia");

console.log("Original reviews:", original.reviews); // ["Great read", "A classic"]
console.log("Cloned reviews:", cloned.reviews);     // ["Great read", "A classic", "Loved the dystopia"]
