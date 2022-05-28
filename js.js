class Character {
    constructor(name,level,hp){
        this.name = name;
        this.level = level;
        this.hp = hp;
    }

    attack(){
        console.log(this.name + ' attacks and inflicts ' + (this.level)*2 + ' damage points.')
    }

    heal(){
        console.log(this.name + ' heals itself for ' + (this.level)/2 + ' damage points.')
    }
}

const Mage = new Character('Gandalf', 20, 500)
const UglyOrc = new Character('UrukHai', 1, 10)

Mage.attack()