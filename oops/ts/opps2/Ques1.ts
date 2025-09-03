// Parent class
class Duck {
    swim() {
        console.log("I know swimming");
    }
}

// Child class inheriting Duck
class MallardDuck extends Duck {}

// Test
const duck = new MallardDuck();
duck.swim(); // Output: I know swimming
