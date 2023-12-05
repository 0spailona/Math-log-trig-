export default class Character {
  constructor(name, type) {
    this.name = name;

    if (this.name.length <= 2) {
      throw new Error('Имя должно быть длиной более 2 символов');
    }
    if (this.name.length > 10) {
      throw new Error('Имя должно быть длиной менее 10 символов');
    }

    this.health = 100;
    this.level = 1;
    this.type = type;
    switch (this.type) {
      case 'Bowman':
        this.attack = 25;
        this.defence = 1;
        break;
      case 'Swordsman':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Magician':
        this.attack = 10;
        this.defence = 40;
        break;
      case 'Daemon':
        this.attack = 10;
        this.defence = 40;
        break;
      case 'Undead':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Zombie':
        this.attack = 40;
        this.defence = 10;
        break;
      default:
        throw new Error('Нет такого типа персонажа');
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Персонаж мертв');
    }

    this.level++;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
