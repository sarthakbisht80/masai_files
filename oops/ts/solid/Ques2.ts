
interface ShippingStrategy {
  calculate(): number;
}


class StandardShipping implements ShippingStrategy {
  calculate(): number {
    return 50;
  }
}

class ExpressShipping implements ShippingStrategy {
  calculate(): number {
    return 100;
  }
}

class OvernightShipping implements ShippingStrategy {
  calculate(): number {
    return 200;
  }
}

// Context
class Shipping {
  private strategy: ShippingStrategy;

  constructor(strategy: ShippingStrategy) {
    this.strategy = strategy;
  }

  calculate(): number {
    return this.strategy.calculate();
  }
}

// Usage
const standard = new Shipping(new StandardShipping());
console.log("Standard:", standard.calculate()); // 50

const express = new Shipping(new ExpressShipping());
console.log("Express:", express.calculate()); // 100

const overnight = new Shipping(new OvernightShipping());
console.log("Overnight:", overnight.calculate()); // 200
