interface LightState {
    turnOn(light: SmartLight): void;
    turnOff(light: SmartLight): void;
    detectMotion(light: SmartLight): void;
    adjustBrightness(light: SmartLight, isDaytime: boolean): void;
}

// ----- Concrete States -----
class OffState implements LightState {
    turnOn(light: SmartLight): void {
        console.log("Light turned ON manually.");
        light.setState(new OnState());
    }

    turnOff(): void {
        console.log("Light is already OFF.");
    }

    detectMotion(light: SmartLight): void {
        console.log("Motion detected. Turning ON light automatically.");
        light.setState(new MotionDetectionState());
    }

    adjustBrightness(): void {
        console.log("Cannot adjust brightness. Light is OFF.");
    }
}

class OnState implements LightState {
    turnOn(): void {
        console.log("Light is already ON.");
    }

    turnOff(light: SmartLight): void {
        console.log("Light turned OFF manually.");
        light.setState(new OffState());
    }

    detectMotion(): void {
        console.log("Motion detected, but light is already ON.");
    }

    adjustBrightness(light: SmartLight, isDaytime: boolean): void {
        console.log("Adjusting brightness based on time of day...");
        light.setState(new BrightnessAdjustmentState());
        light.adjustBrightness(isDaytime); // Delegate adjustment
    }
}

class MotionDetectionState implements LightState {
    turnOn(): void {
        console.log("Light is ON due to motion detection.");
    }

    turnOff(light: SmartLight): void {
        console.log("Light turned OFF manually.");
        light.setState(new OffState());
    }

    detectMotion(): void {
        console.log("Motion already detected.");
    }

    adjustBrightness(light: SmartLight, isDaytime: boolean): void {
        console.log("Adjusting brightness due to motion and time of day...");
        light.setState(new BrightnessAdjustmentState());
        light.adjustBrightness(isDaytime);
    }
}

class BrightnessAdjustmentState implements LightState {
    turnOn(): void {
        console.log("Light is ON with adjusted brightness.");
    }

    turnOff(light: SmartLight): void {
        console.log("Light turned OFF.");
        light.setState(new OffState());
    }

    detectMotion(): void {
        console.log("Already adjusting brightness, motion ignored.");
    }

    adjustBrightness(light: SmartLight, isDaytime: boolean): void {
        if (isDaytime) {
            console.log("It's daytime. Brightness reduced to 50%.");
        } else {
            console.log("It's nighttime. Brightness increased to 100%.");
        }
        light.setState(new OnState()); // Back to normal ON state after adjusting
    }
}

// ----- Context -----
class SmartLight {
    private state: LightState;

    constructor() {
        this.state = new OffState(); // Initial state
    }

    setState(state: LightState): void {
        this.state = state;
    }

    turnOn(): void {
        this.state.turnOn(this);
    }

    turnOff(): void {
        this.state.turnOff(this);
    }

    detectMotion(): void {
        this.state.detectMotion(this);
    }

    adjustBrightness(isDaytime: boolean): void {
        this.state.adjustBrightness(this, isDaytime);
    }
}

// ----- Usage Example -----
const light = new SmartLight();

light.detectMotion();          
light.adjustBrightness(true);  
light.turnOff();                 
light.turnOn();                  
light.adjustBrightness(false);  