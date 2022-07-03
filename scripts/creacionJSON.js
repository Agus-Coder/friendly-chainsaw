import { Character } from "./classes.js";
import * as dataInput from "./modificadorDom.js";

let generar = document.getElementById("generar");

generar.addEventListener("click", () => {
  let charName = dataInput.characterName;
  let charClass = dataInput.typeOfClass;
  let race = dataInput.typeOfRace;
  let level = 1;
  let hp = 15;
  let str = parseInt(document.getElementById("attr1").innerText);
  let dex = parseInt(document.getElementById("attr2").innerText);
  let con = parseInt(document.getElementById("attr3").innerText);
  let int = parseInt(document.getElementById("attr4").innerText);
  let cha = parseInt(document.getElementById("attr5").innerText);
  let wis = parseInt(document.getElementById("attr6").innerText);
  let mod1 = document.getElementById('modd1').innerText
  let mod2 = document.getElementById('modd2').innerText
  let mod3 = document.getElementById('modd3').innerText
  let mod4 = document.getElementById('modd4').innerText
  let mod5 = document.getElementById('modd5').innerText
  let mod6 = document.getElementById('modd6').innerText
  let dote = document.getElementById("doteElegida").innerText

  let armasDisponibles = document.getElementById("armasDisponibles");
  let armadurasDisponibles = document.getElementById("armadurasDisponibles");

  let mensaje = document.getElementById("mensajesMostrados");

  let eleccionArma = armasDisponibles.value;
  let eleccionArmadura = armadurasDisponibles.value;

  let nuevoPJ = new Character(
    charName,
    charClass,
    race,
    level,
    hp,
    str,
    dex,
    con,
    int,
    cha,
    wis
  );

  nuevoPJ.addToInventory(eleccionArma);
  nuevoPJ.addToInventory(eleccionArmadura);
  nuevoPJ.wearArmor(eleccionArmadura);

  /* conversion a JSON de Instancia 'NuevoPJ' desde clase  Character*/

  const nuevoPJJSON = JSON.stringify(nuevoPJ);

  localStorage.setItem("NuevoPersonaje", nuevoPJJSON);

  const testNuevoPJ = localStorage.getItem("NuevoPersonaje");

  const testNuevoPJParseado = JSON.parse(testNuevoPJ);

  /* Modificacion dom para mostrar resumen*/

  mensaje.innerHTML = `Su personaje se llama ${testNuevoPJParseado.name}, es un ${testNuevoPJParseado.charClass}, ${testNuevoPJParseado.race} de nivel ${testNuevoPJParseado.level}. \n Utiliza un ${eleccionArma} como arma principal y esta equipado con una ${eleccionArmadura}`;

  /*La siguiente seccion agrega un boton con un event listener*/

  let mostrarResumen = document.getElementById("mostrarResumen");
  mostrarResumen.innerHTML =
    "<br> <button id='botonResumen'>Mostrar resumen</button>";

  let botonResumen = document.getElementById("botonResumen");
  botonResumen.addEventListener("click", (e) => {
    e.stopPropagation(); // Para evitar Bubbling en la creacion del boton

    /*La siguiente seccion de codigo crea lo que, en esta version del software, seria la hoja de personaje*/
    let hojaPersonaje = document.getElementById("hojaPersonaje");
    hojaPersonaje.setAttribute(
      "class",
      "container border border-dark align-items-center"
    );

    hojaPersonaje.innerHTML = `
    <div class="titulo bg-dark text-white text-center">
    <h1>${testNuevoPJParseado.name}</h1>
    </div>

    <div class="stats border border-dark">
    <p>Fuerza:${testNuevoPJParseado.str}</p>
    <p>Destreza:${testNuevoPJParseado.dex}</p>
    <p>Constitucion:${testNuevoPJParseado.con}</p>
    <p>Inteligencia:${testNuevoPJParseado.int}</p>
    <p>Carisma:${testNuevoPJParseado.cha}</p>
    <p>Sabiduria:${testNuevoPJParseado.wis}</p>
    </div>

    <div class="modificadores border border-dark text-center">
    <p>Mod:   ${mod1}</p>
    <p>Mod:   ${mod2}</p>
    <p>Mod:   ${mod3}</p>
    <p>Mod:   ${mod4}</p>
    <p>Mod:   ${mod5}</p>
    <p>Mod:   ${mod6}</p>
    </div>

    <div class="claseNivel border border-dark">
    <p>Clase: ${testNuevoPJParseado.charClass}</p>
    <p>Raza: ${testNuevoPJParseado.race}</p>
    </div>

    <div class="nivelHp border border-dark">
    <p>Nivel: ${testNuevoPJParseado.level}</p>
    <p>HP: ${testNuevoPJParseado.hp}</p>
    </div>

    <div class="inventario border border-dark">
    <ul>
    <li>${testNuevoPJParseado.inventory[0]}</li>
    <li>${testNuevoPJParseado.inventory[1]}</li>
    <li>Raciones para un dia</li>
    <li>Tienda de campaña</li>
    </ul>
    </div>

    <div class="dotesSeleccionadas border border-dark">
    <ul>
    <li>${dote}</li>
    </ul>
    </div>
    `;
  });

});
