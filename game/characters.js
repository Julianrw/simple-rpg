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
    }

    updateMaxVitals() {
        this.maxHP = 400 + (this.stats.vit * 100);
        this.maxEP = 200 + (this.stats.end * 150);
    }

    takeDamage(amount, damageType) {
        this.currentHP -= amount;
        this.checkHealth();
    }
    
    dealDamage(target, amount, damageType) {
        target.takeDamage(amount, damageType);
    }
    
    restoreHealth(amount) {
        if(amount === 'Max') {
            this.currentHP = this.maxHP;
        } else {
            this.currentHP += amount;
        }
    }
    
    restoreEnergy(amount) {
        if(amount === 'Full') {
            this.currentEP = this.maxEP
        } else {
            this.currentEP += amount;
        }
    }
    
    checkHealth() {
        if(this.currentHP <= 0) {
            this.beSlain();
        } else {
            return this.currentHP;
        }
    }

};

export default Character;