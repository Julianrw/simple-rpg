//The Charater Classes
class Character {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.stats = {
            vit: 1 * this.level,
            end: 1 * this.level,
            foc: 1 * this.level,
            str: 1 * this.level,
            dex: 1 * this.level,
            int: 1 * this.level,
            rth: 1 * this.level,
        };
        this.updateMaxVitals();
    }

    updateMaxVitals() {
        this.HP = 400 + (this.stats.vit * 100);
        this.EP = 200 + (this.stats.end * 150);
    }

    takeDamage(amount){
        this.HP -= amount;
        console.log(this);
        if (this.HP <= 0){
            alert(this.name + " has died!");
        }
    }
    
    attack(target){
        let damageDealt = 50 + (5 * this.stats.str);
        target.takeDamage(damageDealt);
    }

};

class Player extends Character {
    constructor(name, level) {
        super(name, level);
        this.exp = 0;
    }
};

class Mob extends Character {
    constructor(name, level, MobType) {
        super(name, level);
        this.mobType = MobType;
        this.checkMobName();
        this.setMobStats();
        this.updateMaxVitals();
    }
    
    checkMobName(){
        if(this.name === ''){
            this.name = this.mobType.mobName;
        }
    }
    
    setMobStats(){
        let primary = this.mobType.primaryStat;
        let secondary = this.mobType.secondaryStat;
        this.stats[primary] += this.level * 3;
        this.stats[secondary] += this.level * 2;
    }
};

class MobType {
    constructor(mobName, primaryStat, secondaryStat) {
        this.mobName = mobName;
        this.primaryStat = primaryStat;
        this.secondaryStat = secondaryStat;
    }
}

let Fighter = new MobType('Fighter', 'str', 'vit');

let Rouge = new MobType('Rouge', 'dex', 'str');

let Caster = new MobType('Caster', 'int', 'end');

let player = new Player('John', 1);
console.log('the player is:')
console.log(player);

let lancelot = new Mob('Lancelot', 2, Fighter);
console.log('the enemy is:')
console.log(lancelot);

let robin_hood = new Mob('Robin Hood', 2, Rouge);
console.log('the enemy is:')
console.log(robin_hood);

let caster = new Mob('', 3, Caster);
console.log('the enemy is:')
console.log(caster);