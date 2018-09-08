//Imports and Dependencies
import Character from './characters.js';
//The Mob Class
class Mob extends Character {
    constructor(name, level, MobType) {
        super(name, level);
        this.mobType = MobType;
        this.checkMobName();
        this.setMobStats();
        this.setMobSkills();
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
    
    setMobSkills(){
        let skill1 = this.mobType.skill1;
        let skill2 = this.mobType.skill2;
        this.learnSkill(skill1);
        this.learnSkill(skill2);
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
    
    declareEnemy(){
        player.enemies.push(this.mobName.toLowerCase());
    }
};

//The Mob Type Class
class MobType {
    constructor(mobName, primaryStat, secondaryStat, skill1, skill2) {
        this.mobName = mobName;
        this.primaryStat = primaryStat;
        this.secondaryStat = secondaryStat;
        this.skill1 = skill1;
        this.skill2 = skill2;
    }
}
export {Mob, MobType};