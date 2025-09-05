var MySQLService = /** @class */ (function () {
    function MySQLService() {
    }
    MySQLService.prototype.save = function (data) {
        console.log("Saving to MySQL:", data);
    };
    return MySQLService;
}());
var MongoDBService = /** @class */ (function () {
    function MongoDBService() {
    }
    MongoDBService.prototype.save = function (data) {
        console.log("Saving to MongoDB:", data);
    };
    return MongoDBService;
}());
var UserService = /** @class */ (function () {
    function UserService(db) {
        this.db = db;
    }
    UserService.prototype.register = function (user) {
        this.db.save(user);
    };
    return UserService;
}());
var mysqlService = new MySQLService();
var userService1 = new UserService(mysqlService);
userService1.register("Alice");
var mongoService = new MongoDBService();
var userService2 = new UserService(mongoService);
userService2.register("Bob");
