// Interface
interface Printable {
    print(): void;
}


class Document implements Printable {
    print(): void {
        console.log("Printing Document...");
    }
}

// Another class implementing Printable
class Photo implements Printable {
    print(): void {
        console.log("Printing Photo...");
    }
}

const doc = new Document();
const photo = new Photo();

// Storing in an array of type Printable[]
const printables: Printable[] = [doc, photo];

// Calling print() on each
printables.forEach(item => item.print());
