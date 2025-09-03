var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _User_orgCode;
var User = /** @class */ (function () {
    function User(name, role) {
        _User_orgCode.set(this, "DuckCorp"); // private
        this.name = name;
        this._role = role;
    }
    User.prototype.introduce = function () {
        console.log("I am ".concat(this.name, " from ").concat(__classPrivateFieldGet(this, _User_orgCode, "f")));
    };
    return User;
}());
_User_orgCode = new WeakMap();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.getRole = function () {
        console.log(this._role);
    };
    return Manager;
}(User));
// Test
var user = new User("Daffy", "Employee");
user.introduce(); // I am Daffy from DuckCorp
var manager = new Manager("Donald", "Manager");
manager.getRole(); // Manager
// Access private field directly (will fail)
// console.log(user.#orgCode); // SyntaxError: Private field '#orgCode' must be declared in an enclosing class
