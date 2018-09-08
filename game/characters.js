//The Default Character Class
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
        this.currentHP = this.maxHP;
        this.currentEP = this.maxEP;
        this.skills = {};
        this.items = {};
        this.target = '';
        this.enemies = [];
        this.allies = [];
    }

    updateMaxVitals() {
        this.maxHP = 400 + (this.stats.vit * 100);
        this.maxEP = 200 + (this.stats.end * 150);
    }
    
    pickTarget(targetType) {
        if(targetType === 'allEnemies'){
            return 'not yet supported';
        } else {
            this.target = this.enemies[0];//temp
            return this.target
        }
    }

    takeDamage(amount, damageType) {
        this.currentHP -= amount;
        this.checkHealth();
    }
    
    dealDamage(targetType, amount, damageType) {
        this.pickTarget(targetType);
        this.target.takeDamage(amount, damageType);
    }
    
    restoreHealth(amount) {
        if(amount === 'Max') {
            this.currentHP = this.maxHP;
        } else {
            this.currentHP += amount;
        }
    }
    
    restoreEnergy(amount) {
        if(amount === 'Max') {
            this.currentEP = this.maxEP
        } else {
            this.currentEP += amount;
        }
    }
    
    checkHealth() {
        if(this.currentHP <= 0) {
            this.beSlain();//PCs and NPCs have different beSlain behaviour, see Player and Mob classes for details.
        } else {
            return this.currentHP;
        }
    }
    
    learnSkill(skill) {
        let id = skill.skillName.toLowerCase();
        this.skills[id] = skill;
        this.skills[id].skillUser = this;
    }
    
    unlearnSkill(skill) {
        let target = skill.skillName.toLocaleLowerCase();
        delete this.skills[target];
    }

};

export default Character;