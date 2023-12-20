import Character from "./Character";

export default class MagicCharacter extends Character {
    #stoned = false;

    // very suspicious property but it was requested to do this way
    #distance = 1;

    // crutch because JS has no protected members
    #magicAttack;

    constructor(name, type) {
        super(name, type);
        this.#magicAttack = super.attack;
    }

    levelUp() {
        const oldAttack = super.attack;
        super.levelUp();
        this.#magicAttack *= super.attack / oldAttack;
    }

    set stoned(value) {
        this.#stoned = value;
    }

    get stoned() {
        return this.#stoned;
    }

    // architecture mistake but it was requested to do this way
    set attack(value) {
        this.#magicAttack = value;
    }

    // very suspicious but it was requested to do this way
    set distance(value) {
        if (value < 1) {
            throw new Error("Distance should be greater or equal to 1");
        }
        this.#distance = value;
    }

    get attack() {
        let result = this.#magicAttack * (10 - (this.#distance - 1)) / 10;
        if (this.#stoned) {
            result -= Math.log2(this.#distance) * 5;
        }
        return Math.max(0, result);

    }
}

