// Step 1: Define abstraction
interface Database {
  save(data: string): void;
}

// Step 2: Implement the abstraction
class MySQLService implements Database {
  save(data: string): void {
    console.log("Saving to MySQL:", data);
  }
}

// Step 3: High-level module depends on abstraction
class UserService {
  constructor(private db: Database) {}

  register(user: string): void {
    this.db.save(user);
  }
}



const mysql = new MySQLService();
const userService = new UserService(mysql);

userService.register("John Doe");
