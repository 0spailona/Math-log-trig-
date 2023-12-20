import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Bowman from '../Bowman';

const levelList = [
    [Daemon, 4],
    [Magician, 3],
    [Swordsman, 4],
    [Bowman, 5],
    [Undead, 6],
    [Zombie, 7],
];
const handlerForLevelUpGetLevel = test.each(levelList);
handlerForLevelUpGetLevel('testing levelUp for getting new level %s', (TypeCharacter, countLevelUp) => {
    const player = new TypeCharacter('name');
    for (let i = 1; i <= countLevelUp; i++) {
        player.levelUp()
    }
    expect(player.level).toBe(countLevelUp + 1);
});

const charactersList = [
    [Daemon],
    [Magician],
    [Swordsman],
    [Bowman],
    [Undead],
    [Zombie],
];
const handlerForLevelUpChangeAttack = test.each(charactersList);
handlerForLevelUpChangeAttack('testing levelUp for getting new attack %s', (TypeCharacter) => {
    const player = new TypeCharacter('name');
    const saveAttack = player.attack;
    player.levelUp();
    expect(player.attack).toBe(saveAttack * 1.2);
});

const handlerForLevelUpChangeDefence = test.each(charactersList);
handlerForLevelUpChangeDefence('testing levelUp for getting new defence %s', (TypeCharacter) => {
    const player = new TypeCharacter('name');
    const saveDefence = player.defence;
    player.levelUp();
    expect(player.defence).toBe(saveDefence * 1.2);
});

const handlerForLevelUpChangeHealth = test.each(charactersList);
handlerForLevelUpChangeHealth('testing levelUp for getting new health %s', (TypeCharacter) => {
    const player = new TypeCharacter('name');
    player.damage(10);
    player.levelUp();
    expect(player.health).toBe(100);
});

test('testing levelUp for character with health = 0', () => {
    const player = new Daemon('name');
    player.damage(1000000);
    expect(() => player.levelUp()).toThrow('Персонаж мертв');
});

const charactersWithPointsList = [
    [Daemon, 20, 88],
    [Magician, 10, 94],
    [Swordsman, 30, 73],
    [Bowman, 120, 0],
    [Undead, 100, 25],
    [Zombie, 10, 91],
];
const handlerForDamage = test.each(charactersWithPointsList);
handlerForDamage('testing damage for %s', (TypeCharacter, points, expected) => {
    const player = new TypeCharacter('name');
    player.damage(points);
    expect(player.health).toBe(expected);
});
