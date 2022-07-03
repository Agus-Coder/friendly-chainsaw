import { diceRoller } from "./dices.js";

class Character {
  constructor(name, charClass, race, level, hp, str, dex, con, int, cha, wis) {
    this.name = name;
    this.charClass = charClass;
    this.race = race;
    this.level = level;
    this.hp = hp;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.cha = cha;
    this.wis = wis;
    this.baseAc = 10;
    this.totalAC;
    this.inventory = [];
    this.armorWear = false;
  }

  addToInventory(itemToAdd) {
    this.inventory.push(itemToAdd);
  }

  /* Test de operador ternario */
  
  attack(weapon) {
    this.inventory.includes(weapon)
      ? console.log(
          this.name +
            " attacks with its " +
            weapon.name +
            " and inflicts " +
            diceRoller(weapon.weaponDicesQuantity, weapon.weaponDiceDamage, 0) +
            " Points of damage"
        )
      : console.log(this.name + " does not have that item on its inventory");
  }

  wearArmor(armor) {
    if (this.inventory.includes(armor) && this.armorWear == false) {
      this.totalAC = this.baseAc + armor.armorACContribution;
      // alert(
      //   this.name +
      //     " now wears a " +
      //     armor.name +
      //     " and now its armor class it is equal to " +
      //     this.totalAC
      // );

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

export { Character, Weapon, Armor, Spell };
