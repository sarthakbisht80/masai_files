// Step 2: Implement the abstraction
var MySQLService = /** @class */ (function () {
    function MySQLService() {
    }
    MySQLService.prototype.save = function (data) {
        console.log("Saving to MySQL:", data);
    };
    return MySQLService;
}());
// Step 3: High-level module depends on abstraction
var UserService = /** @class */ (function () {
    function UserService(db) {
        this.db = db;
    }
    UserService.prototype.register = function (user) {
        this.db.save(user);
    };
    return UserService;
}());
var mysql = new MySQLService();
var userService = new UserService(mysql);
userService.register("John Doe");
