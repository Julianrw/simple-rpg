//imports & dependencies
import Character from './characters.js';
import Player from './player.js';
import {Mob, MobType} from './mob.js';
import Skill from './skills.js';

//Temp Init
//create skills
let slash = new Skill('Slash', 'A vicious slash with your main hand weapon' ,'Sword', function skillDoes(){
    this.skillUser.dealDamage('singleTarget', 25, 'Slashing');
});
console.log(slash);
let stab = new Skill('Stab', 'A rapid stab with your main hand weapon' ,'Sword', function skillDoes(){
    this.skillUser.dealDamage('singleTarget', 15, 'Piercing');
});
console.log(stab)

//make a couple of new MobTypes
let Fighter = new MobType('Fighter', 'str', 'vit', slash, stab);
let Rouge = new MobType('Rouge', 'dex', 'str', slash, stab);
let Caster = new MobType('Caster', 'int', 'end', stab, slash);
//create a player
let player = new Player('John', 15);
console.log('the player is:')
console.log(player);

//create a mob of each mob type to mess with in the console
let lancelot = new Mob('Lancelot', 2, Fighter);
console.log('the enemy is:')
console.log(lancelot);
let robin_hood = new Mob('Robin Hood', 2, Rouge);
console.log('the enemy is:')
console.log(robin_hood);
let caster = new Mob('', 3, Caster);
console.log('the enemy is:')
console.log(caster);