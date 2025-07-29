// nterface Segregation Principle
// "Clients should not be forced to depend on interfaces they do not use."

interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}

interface Fax {
  fax(): void;
}
//old printer can only print so it doesnt need scam  or fax

class OldPrinter implements Printer {
  print(): void {
    console.log("Printing with old printer...");
  }

}

class SmartPrinter implements Printer,Scanner ,Fax{
  print(): void {
    console.log("Printing with smart printer...");
  }

  scan(): void {
    console.log("Scanning document...");
  }

  fax(): void {
    console.log("Sending fax...");
  }
}



const oldPrinter = new OldPrinter();
oldPrinter.print(); //can only print

const smartPrinter = new SmartPrinter();
smartPrinter.print();
smartPrinter.scan();
smartPrinter.fax();

