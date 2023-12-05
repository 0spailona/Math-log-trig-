export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('Вы не можете добавить персонажа дважды');
        } else {
            this.members.add(character);
        }
    }

    addAll(...arrMembers) {
        for (const member of arrMembers) {
            this.members.add(member);
        }
    }

    toArray() {
        const arrMembers = [];
        this.members.forEach((member) => arrMembers.push(member));
        return arrMembers;
    }
}
