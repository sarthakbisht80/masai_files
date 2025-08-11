class GameCharacter {
    name: string;
    level: number;
    weapon: string;

    constructor(name: string, level: number, weapon: string) {
        this.name = name;
        this.level = level;
        this.weapon = weapon;
    }

    // Clone method for Prototype Pattern
    clone(): GameCharacter {
        return new GameCharacter(this.name, this.level, this.weapon);
    }

    toString(): string {
        return `GameCharacter[name=${this.name}, level=${this.level}, weapon=${this.weapon}]`;
    }
}


const warrior = new GameCharacter("Warrior", 10, "Sword");
const warriorClone = warrior.clone();
warriorClone.name = "Warrior Clone"; // Modify clone's name to show it's a different instance

console.log("Original:", warrior.toString());
console.log("Clone   :", warriorClone.toString());
