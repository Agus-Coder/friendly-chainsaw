import { Character } from "./classes.js";
import * as dataInput from "./listasDeItems.js";

let generar = document.getElementById("generar");
let mensaje = document.getElementById("mensajesMostrados");

generar.addEventListener("click", () => {
  /*
  El evento click sobre 'generar' primero toma todos los datos ingresados por el usuario
  */

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
  let mod1 = document.getElementById("modd1").innerText;
  let mod2 = document.getElementById("modd2").innerText;
  let mod3 = document.getElementById("modd3").innerText;
  let mod4 = document.getElementById("modd4").innerText;
  let mod5 = document.getElementById("modd5").innerText;
  let mod6 = document.getElementById("modd6").innerText;
  let dote = document.getElementById("doteElegida").innerText;

  let armasDisponibles = document.getElementById("armasDisponibles");
  let armadurasDisponibles = document.getElementById("armadurasDisponibles");

  let eleccionArma = armasDisponibles.value;
  let eleccionArmadura = armadurasDisponibles.value;

  /*
  A partir de los datos ingresados se crea la instancia 'nuevoPJ' desde la clase Character importada
  */

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


  /*
  Se agregan items al inventario del personaje y se le equipa la armadura
  */

  nuevoPJ.addToInventory(eleccionArma);
  nuevoPJ.addToInventory(eleccionArmadura);
  nuevoPJ.wearArmor(eleccionArmadura); // Esta parte se puede eliminar en un futuro, segun evolucion del proyecto.


  /* conversion a JSON de Instancia 'nuevoPJ' desde clase  Character*/

  const nuevoPJJSON = JSON.stringify(nuevoPJ);
  localStorage.setItem("NuevoPersonaje", nuevoPJJSON);
  const personajeEnLocalStorage = localStorage.getItem("NuevoPersonaje");
  const NuevoPJParseado = JSON.parse(personajeEnLocalStorage);


  /* Modificacion dom para mostrar confirmacion de generacion exitosa*/

  mensaje.innerHTML = `Su personaje se llama ${NuevoPJParseado.name}, es un ${NuevoPJParseado.charClass}, ${NuevoPJParseado.race} de nivel ${NuevoPJParseado.level}. \n Utiliza un ${eleccionArma} como arma principal y esta equipado con una ${eleccionArmadura}`;


  /*La siguiente seccion genera el boton 'resumen'*/

  let mostrarResumen = document.getElementById("mostrarResumen");
  mostrarResumen.innerHTML =
    "<br> <button id='botonResumen'>Mostrar resumen</button>";

  /*
  Inmediatamente luego de generado, se agrega un event listener al boton 'resumen'
  */

  let botonResumen = document.getElementById("botonResumen");
  botonResumen.addEventListener("click", (e) => {

    e.stopPropagation(); // Para evitar Bubbling en la creacion del boton a partir de un evento anterior

    /*
    La siguiente seccion de codigo crea lo que, en esta version del software, seria la hoja de personaje,
    mostrando el contenido de lo generado sobre el archivo HTML
    */

    let hojaPersonaje = document.getElementById("hojaPersonaje");
    hojaPersonaje.setAttribute(
      "class",
      "container border border-dark align-items-center"
    );

    hojaPersonaje.innerHTML = `
    <div class="titulo bg-dark text-white text-center">
    <h1>${NuevoPJParseado.name}</h1>
    </div>

    <div class="stats border border-dark">
    <p>Fuerza:${NuevoPJParseado.str}</p>
    <p>Destreza:${NuevoPJParseado.dex}</p>
    <p>Constitucion:${NuevoPJParseado.con}</p>
    <p>Inteligencia:${NuevoPJParseado.int}</p>
    <p>Carisma:${NuevoPJParseado.cha}</p>
    <p>Sabiduria:${NuevoPJParseado.wis}</p>
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
    <p>Clase: ${NuevoPJParseado.charClass}</p>
    <p>Raza: ${NuevoPJParseado.race}</p>
    </div>

    <div class="nivelHp border border-dark">
    <p>Nivel: ${NuevoPJParseado.level}</p>
    <p>HP: ${NuevoPJParseado.hp}</p>
    </div>

    <div class="inventario border border-dark">
    <ul>
    <li>${NuevoPJParseado.inventory[0]}</li>
    <li>${NuevoPJParseado.inventory[1]}</li>
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
