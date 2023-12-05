import Character from "./Character";

export default class MagicCharacter extends Character {
    constructor(name, type) {
        super(name, type);
        this.stonedStatus = false;
    }

    set stoned(value) {
        this.stonedStatus = value;
    }

    get stoned() {
        return this.stonedStatus;
    }

    countAttackPower(distance) {
        let result = this.attack * (10 - (distance - 1)) / 10;
        if (this.stoned) {
            result -= Math.log2(distance) * 5;
        }
        return Math.max(0, result);
    }
}

