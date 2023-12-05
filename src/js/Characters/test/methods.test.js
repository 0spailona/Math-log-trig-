import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Bowman from '../Bowman';

const levelList = [
  [Daemon, 1, 2],
  [Magician, 2, 3],
  [Swordsman, 3, 4],
  [Bowman, 4, 5],
  [Undead, 5, 6],
  [Zombie, 6, 7],
];
const handlerForLevelUpGetLevel = test.each(levelList);
handlerForLevelUpGetLevel('testing levelUp for getting new level %s', (TypeCharacter, lastLevel, newLevel) => {
  const player = new TypeCharacter('name');
  player.level = lastLevel;
  player.levelUp();
  expect(player.level).toBe(newLevel);
});

const listForAttackAndDefence = [
  [Daemon, 10, 12],
  [Magician, 10, 12],
  [Swordsman, 40, 48],
  [Bowman, 25, 30],
  [Undead, 25, 30],
  [Zombie, 40, 48],
];
const handlerForLevelUpChangeAttack = test.each(listForAttackAndDefence);
handlerForLevelUpChangeAttack('testing levelUp for getting new attack %s', (TypeCharacter, lastAttack, newAttack) => {
  const player = new TypeCharacter('name');
  player.attack = lastAttack;
  player.levelUp();
  expect(player.attack).toBe(newAttack);
});

const handlerForLevelUpChangeDefence = test.each(listForAttackAndDefence);
handlerForLevelUpChangeDefence('testing levelUp for getting new defence %s', (TypeCharacter, lastDefence, newDefence) => {
  const player = new TypeCharacter('name');
  player.defence = lastDefence;
  player.levelUp();
  expect(player.defence).toBe(newDefence);
});

const healthList = [
  [Daemon, 8],
  [Magician, 2],
  [Swordsman, 3],
  [Bowman, 4],
  [Undead, 5],
  [Zombie, 6],
];
const handlerForLevelUpChangeHealth = test.each(healthList);
handlerForLevelUpChangeHealth('testing levelUp for getting new health %s', (TypeCharacter, lastHealth) => {
  const player = new TypeCharacter('name');
  player.health = lastHealth;
  player.levelUp();
  expect(player.health).toBe(100);
});

test('testing levelUp for character with health = 0', () => {
  const player = new Daemon('name');
  player.health = 0;
  expect(() => player.levelUp()).toThrow('Персонаж мертв');
});

const charactersWithPointsList = [
  [Daemon, 100, 20, 88],
  [Magician, 100, 10, 94],
  [Swordsman, 10, 30, 0],
  [Bowman, 99, 100, 0],
  [Undead, 100, 100, 25],
  [Zombie, 100, 10, 91],
];
const handlerForDamage = test.each(charactersWithPointsList);
handlerForDamage('testing damage for %s', (TypeCharacter, health, points, expected) => {
  const player = new TypeCharacter('name');
  player.health = health;
  player.damage(points);
  expect(player.health).toBe(expected);
});
