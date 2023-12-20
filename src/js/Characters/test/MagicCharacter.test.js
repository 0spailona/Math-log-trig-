import Daemon from "../Daemon";
import Magician from "../Magician";

const charactersList = [
    [Daemon],
    [Magician],
];
const handlerForStonedStatus = test.each(charactersList)
handlerForStonedStatus('Change stoned and get new value for s%', (magicCharacter) => {
    const newPlayer = new magicCharacter('AAAA');
    newPlayer.stoned = true;
    expect(newPlayer.stoned).toBe(true)
})

const handlerForAttackValue = test.each(charactersList);
handlerForAttackValue('Set attack value for s%', (magicCharacter) => {
    const newPlayer = new magicCharacter('AAAA');
    newPlayer.attack = 20;
    newPlayer.distance = 1;
    expect(newPlayer.attack).toBe(20)
})

const handlerForCatchError = test.each(charactersList);
handlerForCatchError('Catch Error with distance < 1', (magicCharacter) => {
    const newPlayer = new magicCharacter('AAAA');
    expect(() => newPlayer.distance = 0).toThrow("Distance should be greater or equal to 1")
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
handlerForGetAttack('Get really attack for s%', (magicCharacter, distance, stoned, expected) => {
    const newPlayer = new magicCharacter('AAAA');
    newPlayer.stoned = stoned;
    newPlayer.distance = distance;
    expect(newPlayer.attack).toBe(expected)
})


