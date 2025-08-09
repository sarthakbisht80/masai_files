enum Direction {
  UP = 1,
  DOWN = -1,
  IDLE = 0,
}

enum DoorState {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  OPENING = 'OPENING',
  CLOSING = 'CLOSING',
}

enum ElevatorState {
  MOVING = 'MOVING',
  IDLE = 'IDLE',
  DOOR_OPEN = 'DOOR_OPEN',
  MAINTENANCE = 'MAINTENANCE',
}

class FloorRequest {
  constructor(
    public floor: number,
    public direction: Direction,
    public numPeople: number = 1
  ) {}
}

class Elevator {
  id: number;
  currentFloor: number;
  capacity: number;
  currentLoad: number;
  targetFloors: number[];
  targetSet: Set<number>;
  state: ElevatorState;
  doorState: DoorState;
  direction: Direction;
  doorTimer: number;
  moveTimer: number;

  constructor(id: number, currentFloor = 1, capacity = 10) {
    this.id = id;
    this.currentFloor = currentFloor;
    this.capacity = capacity;
    this.currentLoad = 0;
    this.targetFloors = [];
    this.targetSet = new Set<number>();
    this.state = ElevatorState.IDLE;
    this.doorState = DoorState.CLOSED;
    this.direction = Direction.IDLE;
    this.doorTimer = 0;
    this.moveTimer = 0;
  }

  isFull(additional = 0): boolean {
    return this.currentLoad + additional > this.capacity;
  }

  addStop(floor: number): void {
    if (!this.targetSet.has(floor)) {
      this.targetFloors.push(floor);
      this.targetSet.add(floor);
      this.updateDirection();
    }
  }

  private updateDirection(): void {
    if (this.state === ElevatorState.MAINTENANCE) {
      this.direction = Direction.IDLE;
      return;
    }
    if (this.targetFloors.length === 0) {
      this.direction = Direction.IDLE;
      return;
    }
    // closest target floor
    let closest = this.targetFloors.reduce((best, f) =>
      Math.abs(f - this.currentFloor) < Math.abs(best - this.currentFloor) ? f : best,
    this.targetFloors[0]);

    if (closest > this.currentFloor) this.direction = Direction.UP;
    else if (closest < this.currentFloor) this.direction = Direction.DOWN;
    else this.direction = Direction.IDLE;
  }

  step(): void {
    if (this.state === ElevatorState.MAINTENANCE) return;

    if (this.doorTimer > 0) {
      this.doorTimer -= 1;
      if (this.doorTimer === 0) {
        if (this.doorState === DoorState.OPENING) {
          this.doorState = DoorState.OPEN;
          this.state = ElevatorState.DOOR_OPEN;
        } else if (this.doorState === DoorState.CLOSING) {
          this.doorState = DoorState.CLOSED;
          if (this.targetFloors.length > 0) {
            this.state = ElevatorState.MOVING;
            this.updateDirection();
            this.moveTimer = 1;
          } else {
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
      if (this.moveTimer > 0) this.moveTimer -= 1;
      if (this.moveTimer === 0) {
        if (this.direction === Direction.UP) this.currentFloor += 1;
        else if (this.direction === Direction.DOWN) this.currentFloor -= 1;

        if (this.targetSet.has(this.currentFloor)) {
          this.removeTarget(this.currentFloor);
          this.state = ElevatorState.DOOR_OPEN;
          this.doorState = DoorState.OPENING;
          this.doorTimer = 1;
        } else {
          if (this.targetFloors.length > 0) this.moveTimer = 1;
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
  }

  private removeTarget(floor: number): void {
    if (this.targetSet.has(floor)) {
      this.targetSet.delete(floor);
      this.targetFloors = this.targetFloors.filter((f) => f !== floor);
    }
  }

  toString(): string {
    return `Elevator(id=${this.id}, floor=${this.currentFloor}, load=${this.currentLoad}/${this.capacity}, state=${this.state}, dir=${this.direction}, targets=[${this.targetFloors.join(',')}])`;
  }
}

class ElevatorSystem {
  numFloors: number;
  elevators: Elevator[];
  pendingRequests: FloorRequest[];
  time: number;

  constructor(numElevators = 3, numFloors = 15) {
    this.numFloors = numFloors;
    this.elevators = [];
    for (let i = 0; i < numElevators; i++) this.elevators.push(new Elevator(i + 1));
    this.pendingRequests = [];
    this.time = 0;
  }

  requestElevator(floor: number, direction: Direction, numPeople = 1): void {
    const req = new FloorRequest(floor, direction, numPeople);
    console.log(`[t=${this.time}] Request added: floor=${floor}, dir=${direction === Direction.UP ? 'UP' : 'DOWN'}, people=${numPeople}`);
    this.pendingRequests.push(req);
    this.dispatch();
  }

  dispatch(): void {
    const remaining: FloorRequest[] = [];
    for (const req of this.pendingRequests) {
      const best = this.selectBestElevator(req);
      if (!best) {
        remaining.push(req);
      } else {
        if (best.isFull(req.numPeople)) {
          console.log(`  -> Elevator ${best.id} cannot accept ${req.numPeople} people (would exceed capacity)`);
          remaining.push(req);
        } else {
          console.log(`  -> Dispatched Elevator ${best.id} to floor ${req.floor} for ${req.numPeople} people`);
          best.addStop(req.floor);
        }
      }
    }
    this.pendingRequests = remaining;
  }

  private selectBestElevator(req: FloorRequest): Elevator | null {
    const candidates: { score: number; el: Elevator }[] = [];
    for (const el of this.elevators) {
      if (el.state === ElevatorState.MAINTENANCE) continue;
      if (el.isFull(req.numPeople)) continue;
      const distance = Math.abs(el.currentFloor - req.floor);
      let dirPenalty = 0;
      if (el.direction !== Direction.IDLE && el.direction !== req.direction) dirPenalty = 2;
      const occupancyPenalty = el.currentLoad / el.capacity;
      const score = distance + dirPenalty + occupancyPenalty;
      candidates.push({ score, el });
    }
    if (candidates.length === 0) return null;
    candidates.sort((a, b) => a.score - b.score);
    return candidates[0].el;
  }

  simulatePickupAndDropoff(): void {
    for (const el of this.elevators) {
      if (el.state === ElevatorState.DOOR_OPEN && el.doorState === DoorState.OPEN) {
        const pickups = this.pendingRequests.filter((r) => r.floor === el.currentFloor);
        for (const p of pickups.slice()) {
          const canTake = Math.min(p.numPeople, el.capacity - el.currentLoad);
          if (canTake <= 0) {
            console.log(`Elevator ${el.id} at floor ${el.currentFloor} full, can't take more`);
            continue;
          }
          el.currentLoad += canTake;
          p.numPeople -= canTake;
          console.log(`Elevator ${el.id} picked up ${canTake} people at floor ${el.currentFloor} (load now ${el.currentLoad}/${el.capacity})`);
          if (p.numPeople === 0) {
            const idx = this.pendingRequests.indexOf(p);
            if (idx >= 0) this.pendingRequests.splice(idx, 1);
          }
        }
        const leaving = Math.floor(el.currentLoad * 0.2);
        if (leaving > 0) {
          el.currentLoad -= leaving;
          console.log(`Elevator ${el.id} ${leaving} passengers left at floor ${el.currentFloor} (load now ${el.currentLoad})`);
        }
      }
    }
  }

  step(): void {
    this.time += 1;
    for (const el of this.elevators) el.step();
    this.simulatePickupAndDropoff();
    this.dispatch();
  }

  status(): void {
    console.log(`--- System status at t=${this.time} ---`);
    for (const el of this.elevators) console.log(el.toString());
    if (this.pendingRequests.length > 0) {
      console.log('Pending requests:');
      for (const r of this.pendingRequests) {
        console.log(`  floor=${r.floor}, dir=${r.direction === Direction.UP ? 'UP' : 'DOWN'}, people=${r.numPeople}`);
      }
    } else {
      console.log('No pending requests');
    }
    console.log('-------------------------------');
  }
}

// Example usage:
if (require.main === module) {
  const sys = new ElevatorSystem(3, 15);
  sys.elevators[0].capacity = 8;
  sys.elevators[1].capacity = 12;
  sys.elevators[2].capacity = 6;

  sys.requestElevator(5, Direction.UP, 3);
  sys.requestElevator(10, Direction.DOWN, 4);
  sys.requestElevator(2, Direction.UP, 2);

  let ticks = 0;
  const maxTicks = 30;
  const interval = setInterval(() => {
    sys.status();
    sys.step();
    ticks += 1;
    if (ticks >= maxTicks) {
      clearInterval(interval);
      console.log('Simulation finished');
    }
  }, 100);
}
