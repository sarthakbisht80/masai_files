
class Bird {
    fly() {
        console.log("I can fly");
    }
}

// Child class overriding fly()
class Penguin extends Bird {
    fly() {
        console.log("I cannot fly");
    }
}


const bird = new Bird();
const penguin = new Penguin();

bird.fly();     // Output: I can fly
penguin.fly();  // Output: I cannot fly
