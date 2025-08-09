var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 1] = "UP";
    Direction[Direction["DOWN"] = -1] = "DOWN";
    Direction[Direction["IDLE"] = 0] = "IDLE";
})(Direction || (Direction = {}));
var DoorState;
(function (DoorState) {
    DoorState["OPEN"] = "OPEN";
    DoorState["CLOSED"] = "CLOSED";
    DoorState["OPENING"] = "OPENING";
    DoorState["CLOSING"] = "CLOSING";
})(DoorState || (DoorState = {}));
var ElevatorState;
(function (ElevatorState) {
    ElevatorState["MOVING"] = "MOVING";
    ElevatorState["IDLE"] = "IDLE";
    ElevatorState["DOOR_OPEN"] = "DOOR_OPEN";
    ElevatorState["MAINTENANCE"] = "MAINTENANCE";
})(ElevatorState || (ElevatorState = {}));
var FloorRequest = /** @class */ (function () {
    function FloorRequest(floor, direction, numPeople) {
        if (numPeople === void 0) { numPeople = 1; }
        this.floor = floor;
        this.direction = direction;
        this.numPeople = numPeople;
    }
    return FloorRequest;
}());
var Elevator = /** @class */ (function () {
    function Elevator(id, currentFloor, capacity) {
        if (currentFloor === void 0) { currentFloor = 1; }
        if (capacity === void 0) { capacity = 10; }
        this.id = id;
        this.currentFloor = currentFloor;
        this.capacity = capacity;
        this.currentLoad = 0;
        this.targetFloors = [];
        this.targetSet = new Set();
        this.state = ElevatorState.IDLE;
        this.doorState = DoorState.CLOSED;
        this.direction = Direction.IDLE;
        this.doorTimer = 0;
        this.moveTimer = 0;
    }
    Elevator.prototype.isFull = function (additional) {
        if (additional === void 0) { additional = 0; }
        return this.currentLoad + additional > this.capacity;
    };
    Elevator.prototype.addStop = function (floor) {
        if (!this.targetSet.has(floor)) {
            this.targetFloors.push(floor);
            this.targetSet.add(floor);
            this.updateDirection();
        }
    };
    Elevator.prototype.updateDirection = function () {
        var _this = this;
        if (this.state === ElevatorState.MAINTENANCE) {
            this.direction = Direction.IDLE;
            return;
        }
        if (this.targetFloors.length === 0) {
            this.direction = Direction.IDLE;
            return;
        }
        // closest target floor
        var closest = this.targetFloors.reduce(function (best, f) {
            return Math.abs(f - _this.currentFloor) < Math.abs(best - _this.currentFloor) ? f : best;
        }, this.targetFloors[0]);
        if (closest > this.currentFloor)
            this.direction = Direction.UP;
        else if (closest < this.currentFloor)
            this.direction = Direction.DOWN;
        else
            this.direction = Direction.IDLE;
    };
    Elevator.prototype.step = function () {
        if (this.state === ElevatorState.MAINTENANCE)
            return;
        if (this.doorTimer > 0) {
            this.doorTimer -= 1;
            if (this.doorTimer === 0) {
                if (this.doorState === DoorState.OPENING) {
                    this.doorState = DoorState.OPEN;
                    this.state = ElevatorState.DOOR_OPEN;
                }
                else if (this.doorState === DoorState.CLOSING) {
                    this.doorState = DoorState.CLOSED;
                    if (this.targetFloors.length > 0) {
                        this.state = ElevatorState.MOVING;
                        this.updateDirection();
                        this.moveTimer = 1;
                    }
                    else {
                        this.state = ElevatorState.IDLE;
                        this.direction = Direction.IDLE;
                    }
                }
            }
            return;
        }
        if (this.doorState === DoorState.OPEN && this.state === ElevatorState.DOOR_OPEN) {
            this.doorState = DoorState.CLOSING;
            this.doorTimer = 1;
            return;
        }
        if (this.state === ElevatorState.MOVING) {
            if (this.moveTimer > 0)
                this.moveTimer -= 1;
            if (this.moveTimer === 0) {
                if (this.direction === Direction.UP)
                    this.currentFloor += 1;
                else if (this.direction === Direction.DOWN)
                    this.currentFloor -= 1;
                if (this.targetSet.has(this.currentFloor)) {
                    this.removeTarget(this.currentFloor);
                    this.state = ElevatorState.DOOR_OPEN;
                    this.doorState = DoorState.OPENING;
                    this.doorTimer = 1;
                }
                else {
                    if (this.targetFloors.length > 0)
                        this.moveTimer = 1;
                    else {
                        this.state = ElevatorState.IDLE;
                        this.direction = Direction.IDLE;
                    }
                }
            }
            return;
        }
        if (this.state === ElevatorState.IDLE && this.targetFloors.length > 0) {
            this.state = ElevatorState.MOVING;
            this.updateDirection();
            this.moveTimer = 1;
        }
    };
    Elevator.prototype.removeTarget = function (floor) {
        if (this.targetSet.has(floor)) {
            this.targetSet.delete(floor);
            this.targetFloors = this.targetFloors.filter(function (f) { return f !== floor; });
        }
    };
    Elevator.prototype.toString = function () {
        return "Elevator(id=".concat(this.id, ", floor=").concat(this.currentFloor, ", load=").concat(this.currentLoad, "/").concat(this.capacity, ", state=").concat(this.state, ", dir=").concat(this.direction, ", targets=[").concat(this.targetFloors.join(','), "])");
    };
    return Elevator;
}());
var ElevatorSystem = /** @class */ (function () {
    function ElevatorSystem(numElevators, numFloors) {
        if (numElevators === void 0) { numElevators = 3; }
        if (numFloors === void 0) { numFloors = 15; }
        this.numFloors = numFloors;
        this.elevators = [];
        for (var i = 0; i < numElevators; i++)
            this.elevators.push(new Elevator(i + 1));
        this.pendingRequests = [];
        this.time = 0;
    }
    ElevatorSystem.prototype.requestElevator = function (floor, direction, numPeople) {
        if (numPeople === void 0) { numPeople = 1; }
        var req = new FloorRequest(floor, direction, numPeople);
        console.log("[t=".concat(this.time, "] Request added: floor=").concat(floor, ", dir=").concat(direction === Direction.UP ? 'UP' : 'DOWN', ", people=").concat(numPeople));
        this.pendingRequests.push(req);
        this.dispatch();
    };
    ElevatorSystem.prototype.dispatch = function () {
        var remaining = [];
        for (var _i = 0, _a = this.pendingRequests; _i < _a.length; _i++) {
            var req = _a[_i];
            var best = this.selectBestElevator(req);
            if (!best) {
                remaining.push(req);
            }
            else {
                if (best.isFull(req.numPeople)) {
                    console.log("  -> Elevator ".concat(best.id, " cannot accept ").concat(req.numPeople, " people (would exceed capacity)"));
                    remaining.push(req);
                }
                else {
                    console.log("  -> Dispatched Elevator ".concat(best.id, " to floor ").concat(req.floor, " for ").concat(req.numPeople, " people"));
                    best.addStop(req.floor);
                }
            }
        }
        this.pendingRequests = remaining;
    };
    ElevatorSystem.prototype.selectBestElevator = function (req) {
        var candidates = [];
        for (var _i = 0, _a = this.elevators; _i < _a.length; _i++) {
            var el = _a[_i];
            if (el.state === ElevatorState.MAINTENANCE)
                continue;
            if (el.isFull(req.numPeople))
                continue;
            var distance = Math.abs(el.currentFloor - req.floor);
            var dirPenalty = 0;
            if (el.direction !== Direction.IDLE && el.direction !== req.direction)
                dirPenalty = 2;
            var occupancyPenalty = el.currentLoad / el.capacity;
            var score = distance + dirPenalty + occupancyPenalty;
            candidates.push({ score: score, el: el });
        }
        if (candidates.length === 0)
            return null;
        candidates.sort(function (a, b) { return a.score - b.score; });
        return candidates[0].el;
    };
    ElevatorSystem.prototype.simulatePickupAndDropoff = function () {
        var _loop_1 = function (el) {
            if (el.state === ElevatorState.DOOR_OPEN && el.doorState === DoorState.OPEN) {
                var pickups = this_1.pendingRequests.filter(function (r) { return r.floor === el.currentFloor; });
                for (var _b = 0, _c = pickups.slice(); _b < _c.length; _b++) {
                    var p = _c[_b];
                    var canTake = Math.min(p.numPeople, el.capacity - el.currentLoad);
                    if (canTake <= 0) {
                        console.log("Elevator ".concat(el.id, " at floor ").concat(el.currentFloor, " full, can't take more"));
                        continue;
                    }
                    el.currentLoad += canTake;
                    p.numPeople -= canTake;
                    console.log("Elevator ".concat(el.id, " picked up ").concat(canTake, " people at floor ").concat(el.currentFloor, " (load now ").concat(el.currentLoad, "/").concat(el.capacity, ")"));
                    if (p.numPeople === 0) {
                        var idx = this_1.pendingRequests.indexOf(p);
                        if (idx >= 0)
                            this_1.pendingRequests.splice(idx, 1);
                    }
                }
                var leaving = Math.floor(el.currentLoad * 0.2);
                if (leaving > 0) {
                    el.currentLoad -= leaving;
                    console.log("Elevator ".concat(el.id, " ").concat(leaving, " passengers left at floor ").concat(el.currentFloor, " (load now ").concat(el.currentLoad, ")"));
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.elevators; _i < _a.length; _i++) {
            var el = _a[_i];
            _loop_1(el);
        }
    };
    ElevatorSystem.prototype.step = function () {
        this.time += 1;
        for (var _i = 0, _a = this.elevators; _i < _a.length; _i++) {
            var el = _a[_i];
            el.step();
        }
        this.simulatePickupAndDropoff();
        this.dispatch();
    };
    ElevatorSystem.prototype.status = function () {
        console.log("--- System status at t=".concat(this.time, " ---"));
        for (var _i = 0, _a = this.elevators; _i < _a.length; _i++) {
            var el = _a[_i];
            console.log(el.toString());
        }
        if (this.pendingRequests.length > 0) {
            console.log('Pending requests:');
            for (var _b = 0, _c = this.pendingRequests; _b < _c.length; _b++) {
                var r = _c[_b];
                console.log("  floor=".concat(r.floor, ", dir=").concat(r.direction === Direction.UP ? 'UP' : 'DOWN', ", people=").concat(r.numPeople));
            }
        }
        else {
            console.log('No pending requests');
        }
        console.log('-------------------------------');
    };
    return ElevatorSystem;
}());
// Example usage:
if (require.main === module) {
    var sys_1 = new ElevatorSystem(3, 15);
    sys_1.elevators[0].capacity = 8;
    sys_1.elevators[1].capacity = 12;
    sys_1.elevators[2].capacity = 6;
    sys_1.requestElevator(5, Direction.UP, 3);
    sys_1.requestElevator(10, Direction.DOWN, 4);
    sys_1.requestElevator(2, Direction.UP, 2);
    var ticks_1 = 0;
    var maxTicks_1 = 30;
    var interval_1 = setInterval(function () {
        sys_1.status();
        sys_1.step();
        ticks_1 += 1;
        if (ticks_1 >= maxTicks_1) {
            clearInterval(interval_1);
            console.log('Simulation finished');
        }
    }, 100);
}
