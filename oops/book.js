class Book{
    constructor(title, author,price){
        this.title=title;
        this.author=author;
        this.price=price;
    }
   displayprop() {
        console.log(`title: ${this.title}, author :${this.author }, price:${this.price} `);

    }

}
const book1= new Book("SOng of Ice & Fire", "George RR Martin",2000);
book1.displayprop();