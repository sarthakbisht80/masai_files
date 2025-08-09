interface ATMState {
    insertCard(machine: ATM): void;
    enterPin(machine: ATM, pin: number): void;
    withdrawCash(machine: ATM, amount: number): void;
}

// ----- Concrete States -----
class IdleState implements ATMState {
    insertCard(machine: ATM): void {
        console.log("Card inserted. Please enter your PIN.");
        machine.setState(new CardInsertedState());
    }

    enterPin(): void {
        console.log("Insert card first.");
    }

    withdrawCash(): void {
        console.log("Insert card and authenticate first.");
    }
}

class CardInsertedState implements ATMState {
    insertCard(): void {
        console.log("Card already inserted.");
    }

    enterPin(machine: ATM, pin: number): void {
        if (pin === 1234) {
            console.log("PIN correct. You are authenticated.");
            machine.setState(new AuthenticatedState());
        } else {
            console.log("Incorrect PIN. Ejecting card.");
            machine.setState(new IdleState());
        }
    }

    withdrawCash(): void {
        console.log("Enter PIN before withdrawing cash.");
    }
}

class AuthenticatedState implements ATMState {
    insertCard(): void {
        console.log("Card already inserted and authenticated.");
    }

    enterPin(): void {
        console.log("Already authenticated.");
    }

    withdrawCash(machine: ATM, amount: number): void {
        console.log(`Withdrawing ₹${amount}...`);
        machine.setState(new DispensingCashState());
    }
}

class DispensingCashState implements ATMState {
    insertCard(): void {
        console.log("Please wait, dispensing in progress.");
    }

    enterPin(): void {
        console.log("Please wait, dispensing in progress.");
    }

    withdrawCash(machine: ATM): void {
        console.log("Cash dispensed. Returning to idle state.");
        machine.setState(new IdleState());
    }
}

// ----- Context -----
class ATM {
    private state: ATMState;

    constructor() {
        this.state = new IdleState(); // initial state
    }

    setState(state: ATMState): void {
        this.state = state;
    }

    insertCard(): void {
        this.state.insertCard(this);
    }

    enterPin(pin: number): void {
        this.state.enterPin(this, pin);
    }

    withdrawCash(amount: number): void {
        this.state.withdrawCash(this, amount);
    }
}

// ----- Usage Example -----
const atm = new ATM();

// Correct Flow
atm.insertCard();    
atm.enterPin(1234);  
atm.withdrawCash(500); 
atm.withdrawCash(0); 