import { weaponList, armorList } from "./instances.js";

let armasDisponibles = document.getElementById("armasDisponibles");
let armadurasDisponibles = document.getElementById("armadurasDisponibles");
let infoArma = document.getElementById("infoArma");
let infoArmadura = document.getElementById("infoArmadura");
let seleccionarArmadura = document.getElementById("seleccionarArmadura");
let seleccionarArma = document.getElementById("botonUsarArma");
let botonSeleccionarNombre = document.getElementById("botonSeleccionarNombre");


// seteo Nombre de personaje
let characterName = document.getElementById("characterName");
function setName() {
  botonSeleccionarNombre.addEventListener("click", () => {
    if (characterName.value == "Nameless") {
      alert("Ingrese un nombre!");
    } else {
      characterName = characterName.value;
      console.log(characterName);
    }
  });
}
setName();


// Seteo de Clase
let typeOfClass = document.getElementById("typeOfClass");
let botonSeleccionarClase = document.getElementById("botonSeleccionarClase");

function selectClass() {
  botonSeleccionarClase.addEventListener("click", () => {
    imagen.innerHTML = `<img src="./assets/Clases D&D/${typeOfClass.value}.png" alt="" srcset="">`;
    typeOfClass = typeOfClass.value;
  });
}

selectClass();


// Seteo de Raza
let typeOfRace = document.getElementById("typeOfRace");
let botonSeleccionarRaza = document.getElementById("botonSeleccionarRaza");

function selectRace() {
  botonSeleccionarRaza.addEventListener("click", () => {
    typeOfRace = typeOfRace.value;
  });
}

selectRace();


// Agregar armas y armaduras pre generadas a lista en DOM
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


//Seteo de arma para Personaje
function agregarArmaAlDOM() {
  seleccionarArma.addEventListener("click", () => {
    let eleccion = armasDisponibles.value;
    let armaObjeto = weaponList.find((w) => w.name === eleccion);
    infoArma.innerText = `Nombre: ${armaObjeto.name}\nDano: ${armaObjeto.weaponDicesQuantity}d${armaObjeto.weaponDiceDamage}`;
  });
}
agregarArmaAlDOM();

//Seteo de armadura para Personaje
function agregarArmaduraAlDOM() {
  seleccionarArmadura.addEventListener("click", () => {
    let eleccion = armadurasDisponibles.value;
    let armaduraObjeto = armorList.find((ar) => ar.name === eleccion);
    infoArmadura.innerText = `Nombre: ${armaduraObjeto.name}\nContribucion a la CA: ${armaduraObjeto.armorACContribution}`;
  });
}
agregarArmaduraAlDOM();


/* Test de Operadores avanzados */
let arrNombresYClases = [];
function desestructurarObjetosPrueba() {
  weaponList.forEach((el) => {
    let { name, charClass } = el;
    arrNombresYClases.push([name, charClass]);
  });
}

desestructurarObjetosPrueba();

export {
  agregarAlDom,
  agregarArmaAlDOM,
  agregarArmaduraAlDOM,
  selectClass,
  desestructurarObjetosPrueba,
  setName,
  characterName,
  typeOfClass,
  typeOfRace,
};
