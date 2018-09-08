//Imports and Dependencies
import Character from './characters.js';
//The Mob Class
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
    
    beSlain(){
        alert('you\'ve slain ' + this.name + '. Do not pass go, do not collet 200 dollars.')
        this.giveExperience();
        //this.lootDrop();
        //this.removeMob();
    };
    
    giveExperience(){
        player.exp += this.level * 50;
    }
};

//The Mob Type Class
class MobType {
    constructor(mobName, primaryStat, secondaryStat) {
        this.mobName = mobName;
        this.primaryStat = primaryStat;
        this.secondaryStat = secondaryStat;
    }
}
export {Mob, MobType};