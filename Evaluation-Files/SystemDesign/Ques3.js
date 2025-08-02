var FastestRoute = /** @class */ (function () {
    function FastestRoute() {
    }
    FastestRoute.prototype.calculateRoute = function (start, end) {
        console.log("Calculating fastest route from ".concat(start, " to ").concat(end, ".Recommended route: NH48 - 280 km - 4 hours"));
    };
    return FastestRoute;
}());
var ScenicRoute = /** @class */ (function () {
    function ScenicRoute() {
    }
    ScenicRoute.prototype.calculateRoute = function (start, end) {
        console.log("calculating scenic route from ".concat(start, "  to ").concat(end, " . Reccomende\n             route : 320km - 6 hours"));
    };
    return ScenicRoute;
}());
var ShortestDistanceRoute = /** @class */ (function () {
    function ShortestDistanceRoute() {
    }
    ShortestDistanceRoute.prototype.calculateRoute = function (start, end) {
        console.log("calculating shortest route from ".concat(start, " to ").concat(end, " . Recommended Route \n            : local roads 270km -5.5hours"));
    };
    return ShortestDistanceRoute;
}());
//router planner 
var RouterPlanner = /** @class */ (function () {
    function RouterPlanner(strategy) {
        this.strategy = strategy;
    }
    return RouterPlanner;
}());
// const plan = new RouterPlanner();
