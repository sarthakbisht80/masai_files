interface State {
    insertCoin(machine: VendingMachine): void;
    selectItem(machine: VendingMachine): void;
    dispense(machine: VendingMachine): void;
}

// ----- Concrete States -----
class IdleState implements State {
    insertCoin(machine: VendingMachine): void {
        console.log("Coin inserted. Moving to Processing state.");
        machine.setState(new ProcessingState());
    }

    selectItem(): void {
        console.log("You need to insert a coin first.");
    }

    dispense(): void {
        console.log("Cannot dispense. No item selected.");
    }
}

class ProcessingState implements State {
    insertCoin(): void {
        console.log("Coin already inserted.");
    }

    selectItem(machine: VendingMachine): void {
        console.log("Item selected. Moving to Dispensing state.");
        machine.setState(new DispensingState());
    }

    dispense(): void {
        console.log("Please select an item first.");
    }
}

class DispensingState implements State {
    insertCoin(): void {
        console.log("Currently dispensing. Please wait.");
    }

    selectItem(): void {
        console.log("Already dispensing the selected item.");
    }

    dispense(machine: VendingMachine): void {
        console.log("Dispensing item...");
        machine.setState(new IdleState());
    }
}

// ----- Context -----
class VendingMachine {
    private state: State;

    constructor() {
        this.state = new IdleState(); // Initial state
    }

    setState(state: State): void {
        this.state = state;
    }

    insertCoin(): void {
        this.state.insertCoin(this);
    }

    selectItem(): void {
        this.state.selectItem(this);
    }

    dispense(): void {
        this.state.dispense(this);
    }
}

const vm = new VendingMachine();
vm.selectItem(); 
vm.insertCoin(); 
vm.selectItem(); 
vm.dispense();   