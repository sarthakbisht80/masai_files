// ----- Concrete States -----
var OffState = /** @class */ (function () {
    function OffState() {
    }
    OffState.prototype.turnOn = function (light) {
        console.log("Light turned ON manually.");
        light.setState(new OnState());
    };
    OffState.prototype.turnOff = function () {
        console.log("Light is already OFF.");
    };
    OffState.prototype.detectMotion = function (light) {
        console.log("Motion detected. Turning ON light automatically.");
        light.setState(new MotionDetectionState());
    };
    OffState.prototype.adjustBrightness = function () {
        console.log("Cannot adjust brightness. Light is OFF.");
    };
    return OffState;
}());
var OnState = /** @class */ (function () {
    function OnState() {
    }
    OnState.prototype.turnOn = function () {
        console.log("Light is already ON.");
    };
    OnState.prototype.turnOff = function (light) {
        console.log("Light turned OFF manually.");
        light.setState(new OffState());
    };
    OnState.prototype.detectMotion = function () {
        console.log("Motion detected, but light is already ON.");
    };
    OnState.prototype.adjustBrightness = function (light, isDaytime) {
        console.log("Adjusting brightness based on time of day...");
        light.setState(new BrightnessAdjustmentState());
        light.adjustBrightness(isDaytime); // Delegate adjustment
    };
    return OnState;
}());
var MotionDetectionState = /** @class */ (function () {
    function MotionDetectionState() {
    }
    MotionDetectionState.prototype.turnOn = function () {
        console.log("Light is ON due to motion detection.");
    };
    MotionDetectionState.prototype.turnOff = function (light) {
        console.log("Light turned OFF manually.");
        light.setState(new OffState());
    };
    MotionDetectionState.prototype.detectMotion = function () {
        console.log("Motion already detected.");
    };
    MotionDetectionState.prototype.adjustBrightness = function (light, isDaytime) {
        console.log("Adjusting brightness due to motion and time of day...");
        light.setState(new BrightnessAdjustmentState());
        light.adjustBrightness(isDaytime);
    };
    return MotionDetectionState;
}());
var BrightnessAdjustmentState = /** @class */ (function () {
    function BrightnessAdjustmentState() {
    }
    BrightnessAdjustmentState.prototype.turnOn = function () {
        console.log("Light is ON with adjusted brightness.");
    };
    BrightnessAdjustmentState.prototype.turnOff = function (light) {
        console.log("Light turned OFF.");
        light.setState(new OffState());
    };
    BrightnessAdjustmentState.prototype.detectMotion = function () {
        console.log("Already adjusting brightness, motion ignored.");
    };
    BrightnessAdjustmentState.prototype.adjustBrightness = function (light, isDaytime) {
        if (isDaytime) {
            console.log("It's daytime. Brightness reduced to 50%.");
        }
        else {
            console.log("It's nighttime. Brightness increased to 100%.");
        }
        light.setState(new OnState()); // Back to normal ON state after adjusting
    };
    return BrightnessAdjustmentState;
}());
// ----- Context -----
var SmartLight = /** @class */ (function () {
    function SmartLight() {
        this.state = new OffState(); // Initial state
    }
    SmartLight.prototype.setState = function (state) {
        this.state = state;
    };
    SmartLight.prototype.turnOn = function () {
        this.state.turnOn(this);
    };
    SmartLight.prototype.turnOff = function () {
        this.state.turnOff(this);
    };
    SmartLight.prototype.detectMotion = function () {
        this.state.detectMotion(this);
    };
    SmartLight.prototype.adjustBrightness = function (isDaytime) {
        this.state.adjustBrightness(this, isDaytime);
    };
    return SmartLight;
}());
// ----- Usage Example -----
var light = new SmartLight();
light.detectMotion();
light.adjustBrightness(true);
light.turnOff();
light.turnOn();
light.adjustBrightness(false);
