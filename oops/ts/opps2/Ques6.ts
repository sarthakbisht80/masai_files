
class FlyStrategy {
    fly() {
        throw new Error("fly() method must be implemented");
    }
}

class FastFly extends FlyStrategy {
    fly() {
        console.log("Flying fast like a rocket!");
    }
}

class NoFly extends FlyStrategy {
    fly() {
        console.log("I cannot fly");
    }
}


class Duck {
    constructor(flyStrategy) {
        this.flyStrategy = flyStrategy;
    }

    performFly() {
        this.flyStrategy.fly();
    }

    setFlyStrategy(flyStrategy) {
        this.flyStrategy = flyStrategy;
    }
}

// Test
const duck = new Duck(new FastFly());
duck.performFly();               // Flying fast like a rocket!
duck.setFlyStrategy(new NoFly());
duck.performFly();               // I cannot fly
