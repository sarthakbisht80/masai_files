interface TrafficLightState {
    change(light: TrafficLight): void;
    showSignal(): void;
}

// ----- Concrete States -----
class RedState implements TrafficLightState {
    change(light: TrafficLight): void {
        console.log("Changing from RED to GREEN.");
        light.setState(new GreenState());
    }

    showSignal(): void {
        console.log("🔴 Red Light - Vehicles must STOP.");
    }
}

class GreenState implements TrafficLightState {
    change(light: TrafficLight): void {
        console.log("Changing from GREEN to YELLOW.");
        light.setState(new YellowState());
    }

    showSignal(): void {
        console.log("🟢 Green Light - Vehicles can MOVE.");
    }
}

class YellowState implements TrafficLightState {
    change(light: TrafficLight): void {
        console.log("Changing from YELLOW to RED.");
        light.setState(new RedState());
    }

    showSignal(): void {
        console.log("🟡 Yellow Light - Vehicles should SLOW DOWN.");
    }
}

// ----- Context -----
class TrafficLight {
    private state: TrafficLightState;

    constructor() {
        this.state = new RedState();
    }

    setState(state: TrafficLightState): void {
        this.state = state;
    }

    change(): void {
        this.state.change(this);
    }

    showSignal(): void {
        this.state.showSignal();
    }
}

// ----- Usage Example -----
const trafficLight = new TrafficLight();

trafficLight.showSignal(); // Red
trafficLight.change();

trafficLight.showSignal(); // Green
trafficLight.change();

trafficLight.showSignal(); // Yellow
trafficLight.change();

trafficLight.showSignal(); // Red a