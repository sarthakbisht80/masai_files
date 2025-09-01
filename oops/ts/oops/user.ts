class User {
    protected username: string;

    constructor(username: string) {
        this.username = username;
    }
}


class Admin extends User {
    constructor(username: string) {
        super(username); 
    }

    showUsername(): void {
        console.log(`Username: ${super.username}`); 
    }
}


const admin1 = new Admin("adminUser");

// Calling the method
admin1.showUsername();