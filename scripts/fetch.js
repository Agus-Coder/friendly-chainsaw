function dataDesdeFetch() {
  let dotes = document.getElementById("dotes");
  let doteElegida = document.getElementById("doteElegida");
  let botonDotes = document.getElementById("botonDotes");
  botonDotes.addEventListener("click", agregarDote);

  fetch("https://www.dnd5eapi.co/api/proficiencies", {
    mode: "cors",
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      data.results.forEach(
        (el) =>
          (dotes.innerHTML += `<option value="${el.name}">${el.name}</option>`)
      );
    });

  function agregarDote() {
    doteElegida.innerText = `${dotes.value}`;
  }
}

dataDesdeFetch();

export { dataDesdeFetch };
