// ----- Concrete States -----
var IdleState = /** @class */ (function () {
    function IdleState() {
    }
    IdleState.prototype.insertCoin = function (machine) {
        console.log("Coin inserted. Moving to Processing state.");
        machine.setState(new ProcessingState());
    };
    IdleState.prototype.selectItem = function () {
        console.log("You need to insert a coin first.");
    };
    IdleState.prototype.dispense = function () {
        console.log("Cannot dispense. No item selected.");
    };
    return IdleState;
}());
var ProcessingState = /** @class */ (function () {
    function ProcessingState() {
    }
    ProcessingState.prototype.insertCoin = function () {
        console.log("Coin already inserted.");
    };
    ProcessingState.prototype.selectItem = function (machine) {
        console.log("Item selected. Moving to Dispensing state.");
        machine.setState(new DispensingState());
    };
    ProcessingState.prototype.dispense = function () {
        console.log("Please select an item first.");
    };
    return ProcessingState;
}());
var DispensingState = /** @class */ (function () {
    function DispensingState() {
    }
    DispensingState.prototype.insertCoin = function () {
        console.log("Currently dispensing. Please wait.");
    };
    DispensingState.prototype.selectItem = function () {
        console.log("Already dispensing the selected item.");
    };
    DispensingState.prototype.dispense = function (machine) {
        console.log("Dispensing item...");
        machine.setState(new IdleState());
    };
    return DispensingState;
}());
// ----- Context -----
var VendingMachine = /** @class */ (function () {
    function VendingMachine() {
        this.state = new IdleState(); // Initial state
    }
    VendingMachine.prototype.setState = function (state) {
        this.state = state;
    };
    VendingMachine.prototype.insertCoin = function () {
        this.state.insertCoin(this);
    };
    VendingMachine.prototype.selectItem = function () {
        this.state.selectItem(this);
    };
    VendingMachine.prototype.dispense = function () {
        this.state.dispense(this);
    };
    return VendingMachine;
}());
var vm = new VendingMachine();
vm.selectItem();
vm.insertCoin();
vm.selectItem();
vm.dispense();
