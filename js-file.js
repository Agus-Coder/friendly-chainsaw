/*Declaracion de clases a usar en el resto del proyecto*/

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

/*Declaracion de funciones a usar en el resto del proyecto*/

function diceRoller(numberOfDices, diceDamage, modificator) {
  const valors = [];
  let rolledDice;
  for (i = 1; i <= numberOfDices; i++) {
    rolledDice = Math.floor(Math.random() * diceDamage) + 1 + modificator;
    valors.push(rolledDice);
  }
  return valors;
}



/*Creacion de personajes, armas y armaduras ejemplos para el avance del proyecto hasta ahora*/

const aragorn = new Character("Aragorn", "Ranger", 7, 60);
const gimli = new Character("Gimli", "Warrior", 6, 70);
const legolas = new Character("Legolas", "Explorer", 6, 50);
const gandalf = new Character("Gandalf", "Grey Wizard", 10, 100);
const frodo = new Character("Frodo", "Rogue", 1, 10);

const dwarvenUrgrosh = new Weapon("Dwarven Urgrosh", 1, 8);
const longBow = new Weapon("Long Bow", 1, 6);
const sword = new Weapon("Common Sword", 1, 6);
const kingSword = new Weapon("Sword of the King", 1, 12);
const staff = new Weapon("Wizard Staff", 1, 10);
const elvenDaggers = new Weapon("Elven Daggers", 1, 4);
const dwarfAxe = new Weapon("Dwarf Axe", 1, 6);

const completeArmor = new Armor("Complete Armor", 6);
const elvenSuit = new Armor("Elven Suit", 2);
const rangerSuit = new Armor("Ranger Suit", 4);
const greyWizardSuit = new Armor("Grey wizard suit", 4);
const leatherArmor = new Armor("Leather Armor", 3);
const kingScaledArmor = new Armor("King's Scaled Armor", 10);



/*Personajes, armas y armaduras en listas con objetos*/

let ringCommunity = [
  aragorn,
  gimli,
  legolas,
  gandalf,
  frodo
];

let weaponList = [
  dwarvenUrgrosh,
  longBow,
  sword,
  kingSword,
  staff,
  elvenDaggers,
  dwarfAxe,
];

let armorList = [
  completeArmor,
  elvenSuit,
  rangerSuit,
  greyWizardSuit,
  leatherArmor,
  kingScaledArmor,
];



/* listas de nombres */

const nombreDeArmas = weaponList.map(
  (el, ind) => `\n ${ind}: ${el.name}`
);

const nombreDePersonajes = ringCommunity.map(
  (el, ind) => `\n ${ind}: ${el.name}`
);

const nombreDeArmaduras = armorList.map(
  (el, ind) => `\n ${ind}: ${el.name}`
);



/* ejecucion en el browser con el avance actual del proyecto */

let desicionPersonaje = prompt(
  `Seleccione un personaje (ingrese el numero correspondiente): ${nombreDePersonajes}`
);

alert(`${ringCommunity[desicionPersonaje].name} no posee armas ni armadura`);

let desicionArma = prompt(
  `Seleccione un arma de la siguiente lista para que ${ringCommunity[desicionPersonaje].name} la equipe: ${nombreDeArmas}`
);



ringCommunity[desicionPersonaje].inventory.push(weaponList[desicionArma])

console.log(ringCommunity[desicionPersonaje].inventory)


alert(
  `${ringCommunity[desicionPersonaje].name} ahora esta equipado con ${
    weaponList[desicionArma].name
  }, la cual hace ${
    weaponList[desicionArma].weaponDicesQuantity
  }d${
    weaponList[desicionArma].weaponDiceDamage
  } de dano`
);

let desicionArmadura = prompt(
  `Seleccione un armadura de la siguiente lista para que ${ringCommunity[desicionPersonaje].name} la equipe: ${nombreDeArmaduras}`
);

ringCommunity[desicionPersonaje].inventory.push(armorList[desicionArmadura])

console.log(ringCommunity[desicionPersonaje].inventory)

alert(
  `${ringCommunity[desicionPersonaje].name} ahora posee en su inventario ${
    armorList[desicionArmadura].name
  }, la cual le dara un armor class de ${
    armorList[desicionArmadura].armorACContribution
  }, teniendo un total de ${
    armorList[desicionArmadura].armorACContribution + 10
  } cuando la tenga equipada`
);

let accion = 0;

while(accion !=4){
  accion = prompt('Su personaje esta listo, que desea hacer?: \n1:probar ataque\n2:equipar armadura\n3:comprobar armorclass\n4:salir')

  if(accion == 1){
      alert(`${ringCommunity[desicionPersonaje].name
      } ataca con ${
        weaponList[desicionArma].name
      } y hace ${
        diceRoller(weaponList[desicionArma].weaponDicesQuantity,weaponList[desicionArma].weaponDiceDamage,0)
      } puntos de dano`);
    } else if (accion == 2){
      ringCommunity[desicionPersonaje].wearArmor(armorList[desicionArmadura]);
    } else if (accion == 3){
      if(ringCommunity[desicionPersonaje].armorWear == false){

        alert(`${ringCommunity[desicionPersonaje].name} no posee su armadura equipada`)

      } else if (ringCommunity[desicionPersonaje].armorWear == true){
      alert(`${ringCommunity[desicionPersonaje].name} tiene un armor class de ${ringCommunity[desicionPersonaje].totalAC}`)
      }
    }else if (accion == 4){
      accion = 4
    }
  }