class Character {
  constructor(name,charClass, level, hp) {
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

    if(this.inventory.includes(weapon)){
      console.log(
        this.name +
          " attacks with its " +
          weapon.name +
          " and inflicts " +
          diceRoller(
            weapon.weaponDicesQuantity,
            weapon.weaponDiceDamage,
            0
          ) +
          " Points of damage"
      );
    } else{
      console.log(this.name + ' no tiene ese item en su inventario')
    }
  }

  wearArmor(armor){
    
    if(this.inventory.includes(armor) && this.armorWear == false){
      this.totalAC=this.baseAc + armor.armorACContribution;
      console.log(this.name + ' now wears a ' + armor.name + ' and now its armor class it is equal to ' + (this.totalAC))

      this.armorWear=true

    }else if(this.armorWear == true){
      console.log(this.name + ' ya esta usando una armadura! debe quitarsela anters de ponerse otra')
    } else if(this.inventory.includes(armor) == false){
      console.log(this.name + ' No tiene esa armadura en su inventario')
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
  constructor(name,armorACContribution) {
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

function diceRoller(numberOfDices, diceDamage, modificator) {
  const valors = [];
  let rolledDice;
  for (i = 1; i <= numberOfDices; i++) {
    rolledDice = Math.floor(Math.random() * diceDamage) + 1 + modificator;
    valors.push(rolledDice);
  }
  return valors;
}

const Orgul = new Character('Orgul',"Warrior", 1, 20);

const dwarvenUrgrosh = new Weapon("Dwarven Urgrosh", 1, 10);

const completeArmor = new Armor('Complete Plate Armor', 10)
