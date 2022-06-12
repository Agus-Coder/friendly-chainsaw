import { ringCommunity, weaponList, armorList } from "./instances.js";

let armasDisponibles = document.getElementById("armasDisponibles");
let armadurasDisponibles = document.getElementById("armadurasDisponibles");
let infoArma = document.getElementById("infoArma");
let infoArmadura = document.getElementById("infoArmadura");
let seleccionarArmadura = document.getElementById("seleccionarArmadura");
let seleccionarArma = document.getElementById("botonUsarArma");

function agregarAlDom() {
  weaponList.forEach(
    (el) =>
      (armasDisponibles.innerHTML += `<option value="${el.name}">${el.name}</option>`)
  );
  armorList.forEach(
    (el) =>
      (armadurasDisponibles.innerHTML += `<option value="${el.name}">${el.name}</option>`)
  );
}

agregarAlDom();

function agregarArmaAlDOM() {
  seleccionarArma.addEventListener("click", () => {
    let eleccion = armasDisponibles.value;
    let armaObjeto = weaponList.find((w) => w.name === eleccion);
    infoArma.innerText = `Nombre: ${armaObjeto.name}\nDano: ${armaObjeto.weaponDicesQuantity}d${armaObjeto.weaponDiceDamage}`;
  });
}

agregarArmaAlDOM();

function agregarArmaduraAlDOM() {
  seleccionarArmadura.addEventListener("click", () => {
    let eleccion = armadurasDisponibles.value;
    let armaduraObjeto = armorList.find((ar) => ar.name === eleccion);
    infoArmadura.innerText = `Nombre: ${armaduraObjeto.name}\nContribucion a la CA: ${armaduraObjeto.armorACContribution}`;
  });
}

agregarArmaduraAlDOM();

export { agregarAlDom, agregarArmaAlDOM, agregarArmaduraAlDOM };
