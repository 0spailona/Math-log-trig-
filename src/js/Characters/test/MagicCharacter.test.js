//import Character from "../Character";
//import MagicCharacter from "../MagicCharacter";
import Daemon from "../Daemon";
import Magician from "../Magician";

const charactersList = [
    [Daemon],
    [Magician],
];
const handlerForStonedStatus = test.each(charactersList)
handlerForStonedStatus('Change stonedStatus and get new value for s%', (magicCharacter) => {
    const newPlayer = new magicCharacter('AAAA');
    newPlayer.stoned = true;
    expect(newPlayer.stonedStatus).toBe(true)
})

const charactersListForAttack = [
    [Daemon, 5, false, 6],
    [Magician, 1, true, 10],
    [Daemon, 1, false, 10],
    [Magician, 2, true, 4],
    [Daemon, 20, false, 0],
    [Magician, 15, true, 0],
];
const handlerForGetAttack = test.each(charactersListForAttack);
handlerForGetAttack('Get really attack for s%', (magicCharacter, distance, stonedStatus, expected) => {
    const newPlayer = new magicCharacter('AAAA');
    newPlayer.stoned = stonedStatus;
    expect(newPlayer.countAttackPower(distance)).toBe(expected)
})
