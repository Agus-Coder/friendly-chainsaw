let input = document.getElementById("input");
let boton = document.getElementById("botonBuscar");
let intentos = 0;

boton.addEventListener("click", function () {
  let i = 1;
  let valorUsuario = input.value;

  const juego = document.getElementById("juego");
  const row2 = document.getElementById("row2");

  const row1prima = document.createElement("div");
  row1prima.className = "row";
  row1prima.id = "row1prima";

  juego.insertBefore(row1prima, row2);

  function insertarNodo() {
    number = document.createElement("div");
    number.className = "col border p-3 m-3 text-center";
    number.id = "number";
    number.textContent = `${i}`;
    row1prima.appendChild(number);
  }

  if (intentos == 0 && valorUsuario <= 1000 && valorUsuario > 0) {
    for (i; i <= valorUsuario; i++) {
      insertarNodo();
    }
    intentos = 1;
  } else if (valorUsuario > 1000 || valorUsuario < 0) {
    alert("El numero ingresado es muy alto o menor a cero   ");
  } else {
    alert("Ya ha ingresado un numero! Recargue la pagina");
  }
});
