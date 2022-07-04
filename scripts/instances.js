import * as Classes from "./classes.js";

/*
En este documento se generan algunas instancias provenientes de las classes weapon and armor, de forma tal que
el usuario pueda utilizarlas durante la creacion de su personaje
Idea futura: Incorporar spells, abrir pestanas herreria y biblioteca para una creacion mas avanzada de instancias
armor, weapon and spells.
*/

const dwarvenUrgrosh  = new Classes.Weapon("Dwarven Urgrosh", 1, 8);
const longBow         = new Classes.Weapon("Long Bow", 1, 6);
const sword           = new Classes.Weapon("Common Sword", 1, 6);
const kingSword       = new Classes.Weapon("Sword of the King", 1, 12);
const staff           = new Classes.Weapon("Wizard Staff", 1, 10);
const elvenDaggers    = new Classes.Weapon("Elven Daggers", 1, 4);
const dwarfAxe        = new Classes.Weapon("Dwarf Axe", 1, 6);

const completeArmor   = new Classes.Armor("Complete Armor", 6);
const elvenSuit       = new Classes.Armor("Elven Suit", 2);
const rangerSuit      = new Classes.Armor("Ranger Suit", 4);
const greyWizardSuit  = new Classes.Armor("Grey wizard suit", 4);
const leatherArmor    = new Classes.Armor("Leather Armor", 3);
const kingScaledArmor = new Classes.Armor("King's Scaled Armor", 10);

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

export { weaponList, armorList };
