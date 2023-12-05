import Character from '../Character';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Bowman from '../Bowman';

test('getting error for undefined type of characters', () => {
  class AnotherCharacter extends Character {
    constructor(name) {
      super(name, 'AnotherCharacter');
    }
  }

  expect(() => new AnotherCharacter('Name')).toThrow('Нет такого типа персонажа');
});

const shortNamesList = [
  [Daemon, ''],
  [Magician, '1'],
  [Swordsman, '10'],
  [Bowman, ''],
  [Undead, '1'],
  [Zombie, '10'],
];
const handlerForShortNameTest = test.each(shortNamesList);

handlerForShortNameTest('testing getting error for too short name - %s', (TypeCharacter, name) => {
  expect(() => new TypeCharacter(name)).toThrow('Имя должно быть длиной более 2 символов');
});

const longNamesList = [
  [Daemon, '12345678910'],
  [Magician, '12345678910'],
  [Swordsman, '12345678910'],
  [Bowman, '12345678910'],
  [Undead, '12345678910'],
  [Zombie, '12345678910'],
];
const handlerForLongNameTest = test.each(longNamesList);

handlerForLongNameTest('testing getting error for too long name - %s', (TypeCharacter, name) => {
  expect(() => new TypeCharacter(name)).toThrow('Имя должно быть длиной менее 10 символов');
});

const charactersList = [
  [Daemon],
  [Magician],
  [Swordsman],
  [Bowman],
  [Undead],
  [Zombie],
];

const handlerForHealth = test.each(charactersList);

handlerForHealth('testing getting health for %s', (TypeCharacter) => {
  const player = new TypeCharacter('name');
  expect(player.health).toBe(100);
});

const handlerForLevel = test.each(charactersList);

handlerForLevel('testing getting level for %s', (TypeCharacter) => {
  const player = new TypeCharacter('name');
  expect(player.level).toBe(1);
});
