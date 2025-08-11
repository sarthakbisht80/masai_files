var GameCharacter = /** @class */ (function () {
    function GameCharacter(name, level, weapon) {
        this.name = name;
        this.level = level;
        this.weapon = weapon;
    }
    // Clone method for Prototype Pattern
    GameCharacter.prototype.clone = function () {
        return new GameCharacter(this.name, this.level, this.weapon);
    };
    GameCharacter.prototype.toString = function () {
        return "GameCharacter[name=".concat(this.name, ", level=").concat(this.level, ", weapon=").concat(this.weapon, "]");
    };
    return GameCharacter;
}());
var warrior = new GameCharacter("Warrior", 10, "Sword");
var warriorClone = warrior.clone();
warriorClone.name = "Warrior Clone"; // Modify clone's name to show it's a different instance
console.log("Original:", warrior.toString());
console.log("Clone   :", warriorClone.toString());
