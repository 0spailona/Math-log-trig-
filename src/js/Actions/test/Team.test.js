import Team from '../Team';
import Character from '../../Characters/Character';

test('Add 1 uniq character to Team', () => {
    const newTeam = new Team();
    const player = new Character('AAA', 'Daemon');
    newTeam.add(player);
    const correct = new Set([{
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: 'AAA',
        type: 'Daemon',
    }]);
    expect(newTeam.members).toEqual((correct));
});

test('Should be Error after adding not uniq character to Team', () => {
    const newTeam = new Team();
    const player = new Character('AAA', 'Daemon');
    newTeam.add(player);
    expect(() => newTeam.add(player)).toThrow('Вы не можете добавить персонажа дважды');
});

test('To add some characters to Team', () => {
    const newTeam = new Team();
    const player = new Character('AAA', 'Daemon');
    const player2 = new Character('BBB', 'Zombie');
    const correct = [player, player2];
    newTeam.addAll(player, player2);
    expect(newTeam.toArray()).toIncludeAllMembers(correct);
});

test('to get Set members in arr', () => {
    const newTeam = new Team();
    const player1 = new Character('AAA', 'Daemon');
    const player2 = new Character('AAA', 'Daemon');
    newTeam.addAll(player1, player2);
    const res = newTeam.toArray();
    expect(res).toEqual([{
        attack: 10, defence: 40, health: 100, level: 1, name: 'AAA', type: 'Daemon',
    },
        {
            attack: 10, defence: 40, health: 100, level: 1, name: 'AAA', type: 'Daemon',
        }]);
});
