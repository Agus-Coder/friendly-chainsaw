import { diceRoller } from "./dices";


class Character {
    constructor(name, charClass, level, hp) {
      this.name = name;
      this.charClass = charClass;
      this.level = level;
      this.hp = hp;
      this.baseAc = 10;
      this.totalAC;
      this.inventory = [];
      this.armorWear = false;
    }
  
    addToInventory(itemToAdd) {
      this.inventory.push(itemToAdd);
    }
  
    attack(weapon) {
      if (this.inventory.includes(weapon)) {
        console.log(
          this.name +
            " attacks with its " +
            weapon.name +
            " and inflicts " +
            diceRoller(weapon.weaponDicesQuantity, weapon.weaponDiceDamage, 0) +
            " Points of damage"
        );
      } else {
        console.log(this.name + " does not have that item on its inventory");
      }
    }
  
    wearArmor(armor) {
      if (this.inventory.includes(armor) && this.armorWear == false) {
        this.totalAC = this.baseAc + armor.armorACContribution;
        alert(
          this.name +
            " now wears a " +
            armor.name +
            " and now its armor class it is equal to " +
            this.totalAC
        );
  
        this.armorWear = true;
      } else if (this.armorWear == true) {
        console.log(this.name + " it is already wearing an armor!");
      } else if (this.inventory.includes(armor) == false) {
        console.log(this.name + " does not have that item on its inventory");
      }
    }
}
  
class Weapon {
    constructor(name, weaponDicesQuantity, weaponDiceDamage) {
      this.name = name;
      this.weaponDicesQuantity = weaponDicesQuantity;
      this.weaponDiceDamage = weaponDiceDamage;
    }
}
  
class Armor {
    constructor(name, armorACContribution) {
      this.name = name;
      this.armorACContribution = armorACContribution;
    }
}
  
class Spell {
    constructor(name, damage, type) {
      this.name = name;
      this.damage = damage;
      this.type = type;
    }
}


export { Character, Weapon, Armor, Spell }