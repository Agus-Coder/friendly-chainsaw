function dataDesdeFetch() {
  let dotes = document.getElementById("dotes");
  let doteElegida = document.getElementById("doteElegida");
  let botonDotes = document.getElementById("botonDotes");
  botonDotes.addEventListener("click", agregarDote);

  fetch("https://www.dnd5eapi.co/api/proficiencies", { //Se invoca a la lista de dotes
    mode: "cors",
  })
    .then(function (res) {
      return res.json(); 
    })
    .then(function (data) {
      data.results.forEach( // Se agrega el nombre de cada dote a una lista desplegable en DOM
        (el) =>
          (dotes.innerHTML += `<option value="${el.name}">${el.name}</option>`) //Es interesante notar que el operador += acumula las opciones en el listado desplegable
      );
    });

  function agregarDote() {
    doteElegida.innerText = `${dotes.value}`; //
  }
}

dataDesdeFetch();

export { dataDesdeFetch };

/*
Data desde Fetch llama trae desde la API de D&D 5th la lista de dotes disponibles y las muestra en una lista desplegable
*/