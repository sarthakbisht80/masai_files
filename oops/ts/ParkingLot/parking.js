"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingLot = exports.EVPriorityStrategy = exports.FirstAvailableStrategy = exports.Ticket = exports.ParkingSlot = exports.Vehicle = exports.RATES = exports.VehicleType = void 0;
// parkingLot.ts
var uuid_1 = require("uuid");
// ---------------------------
// Enums / Constants
// ---------------------------
var VehicleType;
(function (VehicleType) {
    VehicleType["BIKE"] = "BIKE";
    VehicleType["CAR"] = "CAR";
    VehicleType["EV_CAR"] = "EV_CAR";
    VehicleType["TRUCK"] = "TRUCK";
})(VehicleType || (exports.VehicleType = VehicleType = {}));
exports.RATES = (_a = {},
    _a[VehicleType.CAR] = 20,
    _a[VehicleType.BIKE] = 10,
    _a[VehicleType.TRUCK] = 30,
    _a[VehicleType.EV_CAR] = 25,
    _a);
// ---------------------------
// Domain Models
// ---------------------------
var Vehicle = /** @class */ (function () {
    function Vehicle(registrationNumber, type) {
        this.registrationNumber = registrationNumber;
        this.type = type;
    }
    return Vehicle;
}());
exports.Vehicle = Vehicle;
var ParkingSlot = /** @class */ (function () {
    function ParkingSlot(id, floorNumber, slotNumber, allowedTypes, reservedForEV) {
        if (reservedForEV === void 0) { reservedForEV = false; }
        this.id = id;
        this.floorNumber = floorNumber;
        this.slotNumber = slotNumber;
        this.allowedTypes = allowedTypes;
        this.reservedForEV = reservedForEV;
        this.occupiedBy = null;
    }
    ParkingSlot.prototype.isFreeFor = function (vehicle) {
        if (this.occupiedBy)
            return false;
        if (this.reservedForEV && vehicle.type !== VehicleType.EV_CAR) {
            return false;
        }
        return this.allowedTypes.includes(vehicle.type);
    };
    return ParkingSlot;
}());
exports.ParkingSlot = ParkingSlot;
var Ticket = /** @class */ (function () {
    function Ticket(id, vehicle, slot, entryTime) {
        if (entryTime === void 0) { entryTime = new Date(); }
        this.id = id;
        this.vehicle = vehicle;
        this.slot = slot;
        this.entryTime = entryTime;
        this.exitTime = null;
        this.totalFee = null;
    }
    Ticket.prototype.close = function (exitTime) {
        if (exitTime === void 0) { exitTime = new Date(); }
        this.exitTime = exitTime;
        var seconds = (this.exitTime.getTime() - this.entryTime.getTime()) / 1000;
        var hours = Math.ceil(seconds / 3600);
        var rate = exports.RATES[this.vehicle.type] || 0;
        this.totalFee = hours * rate;
        return { fee: this.totalFee, hours: hours, rate: rate };
    };
    return Ticket;
}());
exports.Ticket = Ticket;
var FirstAvailableStrategy = /** @class */ (function () {
    function FirstAvailableStrategy() {
    }
    FirstAvailableStrategy.prototype.findSlot = function (floors, vehicle) {
        for (var _i = 0, floors_1 = floors; _i < floors_1.length; _i++) {
            var floor = floors_1[_i];
            for (var _a = 0, floor_1 = floor; _a < floor_1.length; _a++) {
                var slot = floor_1[_a];
                if (slot.isFreeFor(vehicle) && !slot.reservedForEV) {
                    return slot;
                }
            }
        }
        return null;
    };
    return FirstAvailableStrategy;
}());
exports.FirstAvailableStrategy = FirstAvailableStrategy;
// ---------------------------
// New EV Priority Strategy
// ---------------------------
var EVPriorityStrategy = /** @class */ (function () {
    function EVPriorityStrategy() {
    }
    EVPriorityStrategy.prototype.findSlot = function (floors, vehicle) {
        if (vehicle.type === VehicleType.EV_CAR) {
            // try reserved first
            for (var _i = 0, floors_2 = floors; _i < floors_2.length; _i++) {
                var floor = floors_2[_i];
                for (var _a = 0, floor_2 = floor; _a < floor_2.length; _a++) {
                    var slot = floor_2[_a];
                    if (slot.reservedForEV && slot.isFreeFor(vehicle)) {
                        return slot;
                    }
                }
            }
            // fallback normal slots
            for (var _b = 0, floors_3 = floors; _b < floors_3.length; _b++) {
                var floor = floors_3[_b];
                for (var _c = 0, floor_3 = floor; _c < floor_3.length; _c++) {
                    var slot = floor_3[_c];
                    if (!slot.reservedForEV && slot.isFreeFor(vehicle)) {
                        return slot;
                    }
                }
            }
            return null;
        }
        // Non-EV vehicles → skip reserved
        for (var _d = 0, floors_4 = floors; _d < floors_4.length; _d++) {
            var floor = floors_4[_d];
            for (var _e = 0, floor_4 = floor; _e < floor_4.length; _e++) {
                var slot = floor_4[_e];
                if (!slot.reservedForEV && slot.isFreeFor(vehicle)) {
                    return slot;
                }
            }
        }
        return null;
    };
    return EVPriorityStrategy;
}());
exports.EVPriorityStrategy = EVPriorityStrategy;
// ---------------------------
// ParkingLot Class
// ---------------------------
var ParkingLot = /** @class */ (function () {
    function ParkingLot(floorsCount, slotsPerFloor, strategy) {
        if (strategy === void 0) { strategy = new FirstAvailableStrategy(); }
        this.floorsCount = floorsCount;
        this.slotsPerFloor = slotsPerFloor;
        this.strategy = strategy;
        this.floors = [];
        this.tickets = new Map();
        this.buildFloors();
    }
    ParkingLot.prototype.buildFloors = function () {
        for (var f = 1; f <= this.floorsCount; f++) {
            var floorSlots = [];
            for (var s = 1; s <= this.slotsPerFloor; s++) {
                var reserved = s === 1; // reserve first slot per floor for EV
                var slot = new ParkingSlot("".concat(f, "-").concat(s), f, s, [VehicleType.CAR, VehicleType.EV_CAR, VehicleType.BIKE, VehicleType.TRUCK], reserved);
                floorSlots.push(slot);
            }
            this.floors.push(floorSlots);
        }
    };
    ParkingLot.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    ParkingLot.prototype.parkVehicle = function (vehicle) {
        var slot = this.strategy.findSlot(this.floors, vehicle);
        if (!slot) {
            return { success: false, message: "No available slot for vehicle" };
        }
        slot.occupiedBy = vehicle;
        var ticket = new Ticket((0, uuid_1.v4)(), vehicle, slot);
        this.tickets.set(ticket.id, ticket);
        return {
            success: true,
            ticket: ticket,
            message: "Parked at floor ".concat(slot.floorNumber, ", slot ").concat(slot.slotNumber),
        };
    };
    ParkingLot.prototype.unparkVehicle = function (ticketId) {
        var ticket = this.tickets.get(ticketId);
        if (!ticket) {
            return { success: false, message: "Invalid ticket ID" };
        }
        if (ticket.exitTime) {
            return { success: false, ticket: ticket, message: "Ticket already closed" };
        }
        var _a = ticket.close(), fee = _a.fee, hours = _a.hours, rate = _a.rate;
        ticket.slot.occupiedBy = null;
        return {
            success: true,
            ticket: ticket,
            message: "Unparked ".concat(ticket.vehicle.registrationNumber, " from floor ").concat(ticket.slot.floorNumber, ", slot ").concat(ticket.slot.slotNumber, ". Duration: ").concat(hours, "h, Rate: ").concat(rate, "/hr, Fee: ").concat(fee),
        };
    };
    ParkingLot.prototype.getStatus = function () {
        var lines = [];
        for (var _i = 0, _a = this.floors; _i < _a.length; _i++) {
            var floor = _a[_i];
            for (var _b = 0, floor_5 = floor; _b < floor_5.length; _b++) {
                var slot = floor_5[_b];
                var occ = slot.occupiedBy ? slot.occupiedBy.registrationNumber : "FREE";
                var reserved = slot.reservedForEV ? " (EV Reserved)" : "";
                lines.push("Floor ".concat(slot.floorNumber, " Slot ").concat(slot.slotNumber).concat(reserved, ": ").concat(occ));
            }
        }
        return lines.join("\n");
    };
    return ParkingLot;
}());
exports.ParkingLot = ParkingLot;
