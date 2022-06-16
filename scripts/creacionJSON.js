import { Character } from "./classes.js"

let generar = document.getElementById('generar');

generar.addEventListener('click', ()=>{

let charClass = document.getElementById('typeOfClass').value;
let race = document.getElementById('typeOfRace').value;
let level = 1;
let hp = 15;
let str = parseInt(document.getElementById('attr1'));
let dex = parseInt(document.getElementById('attr2'));
let con = parseInt(document.getElementById('attr3'));
let int = parseInt(document.getElementById('attr4'));
let cha = parseInt(document.getElementById('attr5'));
let wis = parseInt(document.getElementById('attr6'));
let nuevoPJ; 

let armasDisponibles = document.getElementById("armasDisponibles");
let armadurasDisponibles = document.getElementById("armadurasDisponibles");


let mensaje = document.getElementById('mensajesMostrados')



    name = document.getElementById('characterName').value;
    let eleccionArma = armasDisponibles.value;
    let eleccionArmadura = armadurasDisponibles.value;

    nuevoPJ = new Character(name, charClass, race, level, hp, str, dex, con, int, cha, wis);

    nuevoPJ.addToInventory(eleccionArma)
    nuevoPJ.addToInventory(eleccionArmadura)

    const nuevoPJJSON = JSON.stringify(nuevoPJ);

    localStorage.setItem('NuevoPersonaje', nuevoPJJSON);
    const testNuevoPJ = localStorage.getItem('NuevoPersonaje');

    const testNuevoPJParseado = JSON.parse(testNuevoPJ)

    mensaje.innerHTML = `Su personaje se llama ${testNuevoPJParseado.name}, es un ${testNuevoPJParseado.charClass}, ${testNuevoPJParseado.race} de nivel ${testNuevoPJParseado.level}. \n Utiliza un ${eleccionArma} como arma principal y esta equipado con una ${eleccionArmadura}`;
    localStorage.clear()
})








// revisar 11va clase para ver modulos


// const gimliJSON = JSON.stringify(gimli)

// console.log(gimliJSON)

// localStorage.setItem('Gimli', gimliJSON)

// const testGimli = localStorage.getItem('Gimli')



// console.log(`Esto es lo que rescate del local storage, ${testGimli}`)


// const gimliTestParseado = JSON.parse(testGimli)


// console.log(`Esto es lo que rescate del local storage, parseado: ${gimliTestParseado.name}, su nivel es ${gimliTestParseado.level}`)



// name, charClass, level, hp







