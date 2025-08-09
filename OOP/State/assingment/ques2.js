// ----- Concrete States -----
var RedState = /** @class */ (function () {
    function RedState() {
    }
    RedState.prototype.change = function (light) {
        console.log("Changing from RED to GREEN.");
        light.setState(new GreenState());
    };
    RedState.prototype.showSignal = function () {
        console.log("🔴 Red Light - Vehicles must STOP.");
    };
    return RedState;
}());
var GreenState = /** @class */ (function () {
    function GreenState() {
    }
    GreenState.prototype.change = function (light) {
        console.log("Changing from GREEN to YELLOW.");
        light.setState(new YellowState());
    };
    GreenState.prototype.showSignal = function () {
        console.log("🟢 Green Light - Vehicles can MOVE.");
    };
    return GreenState;
}());
var YellowState = /** @class */ (function () {
    function YellowState() {
    }
    YellowState.prototype.change = function (light) {
        console.log("Changing from YELLOW to RED.");
        light.setState(new RedState());
    };
    YellowState.prototype.showSignal = function () {
        console.log("🟡 Yellow Light - Vehicles should SLOW DOWN.");
    };
    return YellowState;
}());
// ----- Context -----
var TrafficLight = /** @class */ (function () {
    function TrafficLight() {
        this.state = new RedState();
    }
    TrafficLight.prototype.setState = function (state) {
        this.state = state;
    };
    TrafficLight.prototype.change = function () {
        this.state.change(this);
    };
    TrafficLight.prototype.showSignal = function () {
        this.state.showSignal();
    };
    return TrafficLight;
}());
// ----- Usage Example -----
var trafficLight = new TrafficLight();
trafficLight.showSignal(); // Red
trafficLight.change();
trafficLight.showSignal(); // Green
trafficLight.change();
trafficLight.showSignal(); // Yellow
trafficLight.change();
trafficLight.showSignal(); // Red a
