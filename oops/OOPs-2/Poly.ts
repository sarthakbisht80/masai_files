// class PolyDuck {
//     fly(): void {
//         console.log("Duck is flying");
//     }
// }

// class DesiDuck extends PolyDuck {
//     fly(): void {
//         console.log("DesiDuck flies at 10kmph");
//     }
// }

// class VidesiDuck extends PolyDuck {
//     fly(): void {
//         console.log("VidesiDuck flies at 20kmph");
//     }
// }

// class SmartDuck extends PolyDuck {
//     fly(): void {
//         console.log("SmartDuck flies at 50kmph");
//     }
// }

// function makeDuckFly(duck: PolyDuck): void {
//     duck.fly();
// }

// makeDuckFly(new DesiDuck());
// makeDuckFly(new VidesiDuck());
// makeDuckFly(new SmartDuck());


//=----------------------------------------------------------------------------------------------------------------------------------

//Question 2- acccess modifier exploration


class User {
    public name: string;
    private orgCode: string = "DuckCorp";
    protected role: string;

    constructor(name: string, role: string) {
        this.name = name;
        this.role = role;
    }

    introduce(): void {
        console.log(`I am ${this.name} from ${this.orgCode}`);
    }
}

class Manager extends User {
    getRole(): void {
        console.log(this.role); // ✅ Protected: accessible in subclass
    }
}


const user = new User("Daffy", "Employee");
user.introduce(); 

const manager = new Manager("Daffy", "Manager");
manager.getRole(); 

//Error: Property 'orgCode' is private and only accessible within class 'User'
// console.log(user.orgCode); 
