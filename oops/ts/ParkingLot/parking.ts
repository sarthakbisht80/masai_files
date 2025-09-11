// parkingLot.ts
import { v4 as uuidv4 } from "uuid";

// ---------------------------
// Enums / Constants
// ---------------------------
export enum VehicleType {
  BIKE = "BIKE",
  CAR = "CAR",
  EV_CAR = "EV_CAR",
  TRUCK = "TRUCK",
}

export const RATES: Record<VehicleType, number> = {
  [VehicleType.CAR]: 20,
  [VehicleType.BIKE]: 10,
  [VehicleType.TRUCK]: 30,
  [VehicleType.EV_CAR]: 25,
};

// ---------------------------
// Domain Models
// ---------------------------
export class Vehicle {
  constructor(
    public registrationNumber: string,
    public type: VehicleType
  ) {}
}

export class ParkingSlot {
  public occupiedBy: Vehicle | null = null;

  constructor(
    public id: string,
    public floorNumber: number,
    public slotNumber: number,
    public allowedTypes: VehicleType[],
    public reservedForEV: boolean = false
  ) {}

  isFreeFor(vehicle: Vehicle): boolean {
    if (this.occupiedBy) return false;
    if (this.reservedForEV && vehicle.type !== VehicleType.EV_CAR) {
      return false;
    }
    return this.allowedTypes.includes(vehicle.type);
  }
}

export class Ticket {
  public exitTime: Date | null = null;
  public totalFee: number | null = null;

  constructor(
    public id: string,
    public vehicle: Vehicle,
    public slot: ParkingSlot,
    public entryTime: Date = new Date()
  ) {}

  close(exitTime: Date = new Date()): { fee: number; hours: number; rate: number } {
    this.exitTime = exitTime;
    const seconds = (this.exitTime.getTime() - this.entryTime.getTime()) / 1000;
    const hours = Math.ceil(seconds / 3600);
    const rate = RATES[this.vehicle.type] || 0;
    this.totalFee = hours * rate;
    return { fee: this.totalFee, hours, rate };
  }
}

// ---------------------------
// Strategy Interface
// ---------------------------
export interface ParkingStrategy {
  findSlot(floors: ParkingSlot[][], vehicle: Vehicle): ParkingSlot | null;
}

export class FirstAvailableStrategy implements ParkingStrategy {
  findSlot(floors: ParkingSlot[][], vehicle: Vehicle): ParkingSlot | null {
    for (const floor of floors) {
      for (const slot of floor) {
        if (slot.isFreeFor(vehicle) && !slot.reservedForEV) {
          return slot;
        }
      }
    }
    return null;
  }
}

// ---------------------------
// New EV Priority Strategy
// ---------------------------
export class EVPriorityStrategy implements ParkingStrategy {
  findSlot(floors: ParkingSlot[][], vehicle: Vehicle): ParkingSlot | null {
    if (vehicle.type === VehicleType.EV_CAR) {
      // try reserved first
      for (const floor of floors) {
        for (const slot of floor) {
          if (slot.reservedForEV && slot.isFreeFor(vehicle)) {
            return slot;
          }
        }
      }
      // fallback normal slots
      for (const floor of floors) {
        for (const slot of floor) {
          if (!slot.reservedForEV && slot.isFreeFor(vehicle)) {
            return slot;
          }
        }
      }
      return null;
    }

    // Non-EV vehicles → skip reserved
    for (const floor of floors) {
      for (const slot of floor) {
        if (!slot.reservedForEV && slot.isFreeFor(vehicle)) {
          return slot;
        }
      }
    }
    return null;
  }
}

// ---------------------------
// ParkingLot Class
// ---------------------------
export class ParkingLot {
  private floors: ParkingSlot[][] = [];
  private tickets: Map<string, Ticket> = new Map();

  constructor(
    private floorsCount: number,
    private slotsPerFloor: number,
    private strategy: ParkingStrategy = new FirstAvailableStrategy()
  ) {
    this.buildFloors();
  }

  private buildFloors() {
    for (let f = 1; f <= this.floorsCount; f++) {
      const floorSlots: ParkingSlot[] = [];
      for (let s = 1; s <= this.slotsPerFloor; s++) {
        const reserved = s === 1; // reserve first slot per floor for EV
        const slot = new ParkingSlot(
          `${f}-${s}`,
          f,
          s,
          [VehicleType.CAR, VehicleType.EV_CAR, VehicleType.BIKE, VehicleType.TRUCK],
          reserved
        );
        floorSlots.push(slot);
      }
      this.floors.push(floorSlots);
    }
  }

  setStrategy(strategy: ParkingStrategy) {
    this.strategy = strategy;
  }

  parkVehicle(vehicle: Vehicle): { success: boolean; ticket?: Ticket; message: string } {
    const slot = this.strategy.findSlot(this.floors, vehicle);
    if (!slot) {
      return { success: false, message: "No available slot for vehicle" };
    }
    slot.occupiedBy = vehicle;
    const ticket = new Ticket(uuidv4(), vehicle, slot);
    this.tickets.set(ticket.id, ticket);
    return {
      success: true,
      ticket,
      message: `Parked at floor ${slot.floorNumber}, slot ${slot.slotNumber}`,
    };
  }

  unparkVehicle(ticketId: string): { success: boolean; ticket?: Ticket; message: string } {
    const ticket = this.tickets.get(ticketId);
    if (!ticket) {
      return { success: false, message: "Invalid ticket ID" };
    }
    if (ticket.exitTime) {
      return { success: false, ticket, message: "Ticket already closed" };
    }

    const { fee, hours, rate } = ticket.close();
    ticket.slot.occupiedBy = null;
    return {
      success: true,
      ticket,
      message: `Unparked ${ticket.vehicle.registrationNumber} from floor ${ticket.slot.floorNumber}, slot ${ticket.slot.slotNumber}. Duration: ${hours}h, Rate: ${rate}/hr, Fee: ${fee}`,
    };
  }

  getStatus(): string {
    const lines: string[] = [];
    for (const floor of this.floors) {
      for (const slot of floor) {
        const occ = slot.occupiedBy ? slot.occupiedBy.registrationNumber : "FREE";
        const reserved = slot.reservedForEV ? " (EV Reserved)" : "";
        lines.push(`Floor ${slot.floorNumber} Slot ${slot.slotNumber}${reserved}: ${occ}`);
      }
    }
    return lines.join("\n");
  }
}
