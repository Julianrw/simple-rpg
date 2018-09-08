//Dependencies 
import Character from './characters.js';
import Player from './player.js';
import {Mob, MobType} from './mob.js';

//Tests
it('Jest is Running', () => {
    expect(1).toBe(1);
});

//Test Characters
let player = new Player('Testious', 1);
let tester = new MobType('Tester', 'int', 'dex');
let mob = new Mob('Mobbie', 1, tester);

//Constructor tests
it('Player constructor works', () => {
    expect(player).toHaveProperty('level', 1);
    expect(player).toHaveProperty('name', 'Testious');
})

it('MobType constructor works', () => {
    expect(mob.mobType).toHaveProperty('mobName', 'Tester');
    expect(mob.mobType).toHaveProperty('primaryStat', 'int');
    expect(mob.mobType).toHaveProperty('secondaryStat', 'dex');
})

it('Mob constructor works', () => {
    expect(mob).toHaveProperty('level', 1);
    expect(mob).toHaveProperty('name', 'Mobbie');
    expect(mob.stats.int > mob.stats.dex).toBe(true);
})
//Character method tests
it('Character method takeDamage', () => {
    player.currentHP = 10;
    player.takeDamage(5);
    expect(player.currentHP).toBe(5);
})

it('Character method restoreHealth', () => {
    player.currentHP = 5;
    expect(player.currentHP < player.maxHP).toBe(true);
    player.restoreHealth(5);
    expect(player.currentHP).toBe(10);
    player.restoreHealth('Max');
    expect(player.currentHP === player.maxHP).toBe(true);
})

it('Character method dealDamage', () => {
    mob.restoreHealth('Max');
    expect(mob.currentHP === mob.maxHP).toBe(true);
    player.dealDamage(mob, 60, 'mental');
    expect(mob.currentHP < mob.maxHP).toBe(true);
})
