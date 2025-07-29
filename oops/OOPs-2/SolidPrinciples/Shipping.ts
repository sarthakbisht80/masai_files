
//if we want tp add a new shiping type without modification to existing
// Step 1: Create a common interface
interface ShippingStrategy {
  calculate(): number;
}

// Step 2: Implement each shipping type separately
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

// You can now add more without changing existing code
class OvernightShipping implements ShippingStrategy {
  calculate(): number {
    return 150;
  }
}

class Shipping {
  constructor(private strategy: ShippingStrategy) {}

  calculate(): number {
    return this.strategy.calculate();
  }
}


const standard = new Shipping(new StandardShipping());
console.log(standard.calculate()); 

const express = new Shipping(new ExpressShipping());
console.log(express.calculate()); 

const overnight = new Shipping(new OvernightShipping());
console.log(overnight.calculate()); 
