//Imports and Dependencies
import Character from './characters.js';
//The Player Class
class Player extends Character {
    constructor(name, level) {
        super(name, level);
        this.exp = 0;
    }
    
    beSlain(){
        alert('Oh no, you\'ve died! Better luck next time.');
        //gameOver();
    }
};

export default Player;