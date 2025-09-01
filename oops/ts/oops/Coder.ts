class Person {
    walk(): void {
        console.log("Walking...");
    }
}


interface Coder {
    code(): void;
}


class Developer extends Person implements Coder {
 
    walk(): void {
        console.log("Developer walking...");
    }

    code(): void {
        console.log("Developer coding...");
    }
}

const dev = new Developer();

dev.walk();  // Developer walking...
dev.code();  // Developer coding...
