
interface FlyStrategy {
    fly(): void;
}

class FastFly implements FlyStrategy {
    fly(): void {
        console.log("Flying fast like a rocket!");
    }
}

class NoFly implements FlyStrategy {
    fly(): void {
        console.log("I cannot fly");
    }
}

class Duck {
    private flyStrategy: FlyStrategy;

    constructor(flyStrategy: FlyStrategy) {
        this.flyStrategy = flyStrategy;
    }

    performFly(): void {
        this.flyStrategy.fly();
    }

    setFlyStrategy(strategy: FlyStrategy): void {
        this.flyStrategy = strategy;
    }
}


const duck = new Duck(new FastFly());
duck.performFly(); 

duck.setFlyStrategy(new NoFly());
duck.performFly(); 
