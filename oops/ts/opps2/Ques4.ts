
class PolyDuck {
    fly() {
        console.log("PolyDuck flying");
    }
}

class DesiDuck extends PolyDuck {
    fly() {
        console.log("DesiDuck flies at 10kmph");
    }
}

class VidesiDuck extends PolyDuck {
    fly() {
        console.log("VidesiDuck flies at 20kmph");
    }
}

class SmartDuck extends PolyDuck {
    fly() {
        console.log("SmartDuck flies at 50kmph");
    }
}

function makeDuckFly(duck) {
    duck.fly();
}

const desi = new DesiDuck();
const videsi = new VidesiDuck();
const smart = new SmartDuck();

makeDuckFly(desi);    // DesiDuck flies at 10kmph
makeDuckFly(videsi);  // VidesiDuck flies at 20kmph
makeDuckFly(smart);   // SmartDuck flies at 50kmph
