function Calculator() {
  this.total = 0;

  this.add = function (x) {
    this.total += x;
    // capture "this" using a variable or use arrow functions
    const self = this;

    return function (y) {
      self.total += y;
      return function (z) {
        self.total += z;
        return self.total;
      };
    };
  };
}

const calc = new Calculator();
console.log(calc.add(5)(10)(15)); // 30
