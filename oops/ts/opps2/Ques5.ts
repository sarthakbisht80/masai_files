class User {
    public name;
    #orgCode = "DuckCorp";   // private
    _role;                   // protected (by convention)

    constructor(name, role) {
        this.name = name;
        this._role = role;
    }

    introduce() {
        console.log(`I am ${this.name} from ${this.#orgCode}`);
    }
}

class Manager extends User {
    getRole() {
        console.log(this._role);
    }
}

// Test
const user = new User("Daffy", "Employee");
user.introduce();       // I am Daffy from DuckCorp

const manager = new Manager("Donald", "Manager");
manager.getRole();      // Manager
