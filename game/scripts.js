//imports & dependencies
import Character from './characters.js';
import Player from './player.js';
import {Mob, MobType} from './mob.js';

//Temp Init
//make a couple of new MobTypes
let Fighter = new MobType('Fighter', 'str', 'vit');
let Rouge = new MobType('Rouge', 'dex', 'str');
let Caster = new MobType('Caster', 'int', 'end');
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