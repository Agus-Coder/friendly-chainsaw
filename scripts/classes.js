import { diceRoller } from "./dices.js";

/*
Este documento almacena las 4 clases utilizadas para el proyecto. la clase mas desarrollada es 'Character',
la cual es la empleada para la creacion de los personajes propieamente dichos. Dicha clase toma los parametros:
nombre, clase, raza, nivel, hit points, fuerza, destreza, constitucion, inteligencia, carisma y sabiduria
Los metodos presentes dentro de la clase Character no poseen un uso especifico para el proyecto, pero no los
elimino todavia hasta estar seguro de que no poseen alguna funcionalidad en futuras versiones del proyecto
*/

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

/*
Las clases Weapon, Armor, y Spell generan objetos a ser utilizados como armas, armaduras y hechizos, respectivamente.
Estas clases se utilizan para generar objetos ejemplos en la generacion de hoja de personaje. En la presente version del
proyecto todavia no se encuentra desarrollada el agregado de spell a los personajes.
Ideas a futuro: Agregar pestanas de 'herreria' y 'biblioteca' para que el usuario pueda construir sus propios items y conjuros.
*/

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
