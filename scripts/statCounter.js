let puntosDisponibles = document.getElementById("puntosDisponibles");
let puntosDisponiblesNumero = parseInt(puntosDisponibles.innerText);

let btnResta1 = document.getElementById("btnResta1");
let attr1 = document.getElementById("attr1");
let btnSuma1 = document.getElementById("btnSuma1");
let attr1Valor = parseInt(attr1.innerText);
let modd1 = document.getElementById("modd1");
let modd1Valor = parseInt(modd1.innerText)


btnResta1.addEventListener("click", () => {
  if (attr1Valor > 8) {
    attr1Valor -= 1;
    puntosDisponiblesNumero += 1;
    modd1Valor = (attr1Valor/2-5)
    attr1.innerText = attr1Valor;
    puntosDisponibles.innerText = puntosDisponiblesNumero;
    modd1.innerText = Math.floor(modd1Valor);
  }
});
btnSuma1.addEventListener("click", () => {
  if (puntosDisponiblesNumero > 0 && attr1Valor<18) {
    attr1Valor += 1;
    puntosDisponiblesNumero -= 1;
    modd1Valor = (attr1Valor/2-5)
    attr1.innerText = attr1Valor;
    puntosDisponibles.innerText = puntosDisponiblesNumero;
    modd1.innerText = Math.floor(modd1Valor);
  }
});

//dividido 2 - 5

let btnResta2 = document.getElementById("btnResta2");
let attr2 = document.getElementById("attr2");
let btnSuma2 = document.getElementById("btnSuma2");
let attr2Valor = parseInt(attr2.innerText);
let modd2 = document.getElementById("modd2");
let modd2Valor = parseInt(modd2.innerText)


btnResta2.addEventListener("click", () => {
  if (attr2Valor > 8) {
    attr2Valor -= 1;
    puntosDisponiblesNumero += 1;
    modd2Valor = (attr2Valor/2-5)
    attr2.innerText = attr2Valor;
    puntosDisponibles.innerText = puntosDisponiblesNumero;
    modd2.innerText = Math.floor(modd2Valor);
  }
});
btnSuma2.addEventListener("click", () => {
  if (puntosDisponiblesNumero > 0 && attr2Valor<18) {
    attr2Valor += 1;
    puntosDisponiblesNumero -= 1;
    modd2Valor = (attr2Valor/2-5)
    attr2.innerText = attr2Valor;
    puntosDisponibles.innerText = puntosDisponiblesNumero;
    modd2.innerText = Math.floor(modd2Valor);
  }
});


let btnResta3 = document.getElementById("btnResta3");
let attr3 = document.getElementById("attr3");
let btnSuma3 = document.getElementById("btnSuma3");
let attr3Valor = parseInt(attr3.innerText);
let modd3 = document.getElementById("modd3");
let modd3Valor = parseInt(modd3.innerText)



btnResta3.addEventListener("click", () => {
  if (attr3Valor > 8) {
    attr3Valor -= 1;
    puntosDisponiblesNumero += 1;
    modd3Valor = (attr3Valor/2-5)
    attr3.innerText = attr3Valor;
    puntosDisponibles.innerText = puntosDisponiblesNumero;
    modd3.innerText = Math.floor(modd3Valor);
  }
});
btnSuma3.addEventListener("click", () => {
  if (puntosDisponiblesNumero > 0 && attr3Valor<18) {
    attr3Valor += 1;
    puntosDisponiblesNumero -= 1;
    modd3Valor = (attr3Valor/2-5)
    attr3.innerText = attr3Valor;
    puntosDisponibles.innerText = puntosDisponiblesNumero;
    modd3.innerText = Math.floor(modd3Valor);
  }
});


let btnResta4 = document.getElementById("btnResta4");
let attr4 = document.getElementById("attr4");
let btnSuma4 = document.getElementById("btnSuma4");
let attr4Valor = parseInt(attr4.innerText);
let modd4 = document.getElementById("modd4");
let modd4Valor = parseInt(modd4.innerText)


btnResta4.addEventListener("click", () => {
  if (attr4Valor > 8) {
    attr4Valor -= 1;
    puntosDisponiblesNumero += 1;
    modd4Valor = (attr4Valor/2-5)
    attr4.innerText = attr4Valor;
    puntosDisponibles.innerText = puntosDisponiblesNumero;
    modd4.innerText = Math.floor(modd4Valor);
  }
});
btnSuma4.addEventListener("click", () => {
  if (puntosDisponiblesNumero > 0 && attr4Valor<18) {
    attr4Valor += 1;
    puntosDisponiblesNumero -= 1;
    modd4Valor = (attr4Valor/2-5)
    attr4.innerText = attr4Valor;
    puntosDisponibles.innerText = puntosDisponiblesNumero;
    modd4.innerText = Math.floor(modd4Valor);
  }
});



let btnResta5 = document.getElementById("btnResta5");
let attr5 = document.getElementById("attr5");
let btnSuma5 = document.getElementById("btnSuma5");
let attr5Valor = parseInt(attr5.innerText);
let modd5 = document.getElementById("modd5");
let modd5Valor = parseInt(modd5.innerText)

btnResta5.addEventListener("click", () => {
  if (attr5Valor > 8) {
    attr5Valor -= 1;
    puntosDisponiblesNumero += 1;
    modd5Valor = (attr5Valor/2-5)
    attr5.innerText = attr5Valor;
    puntosDisponibles.innerText = puntosDisponiblesNumero;
    modd5.innerText = Math.floor(modd5Valor);
  }
});
btnSuma5.addEventListener("click", () => {
  if (puntosDisponiblesNumero > 0 && attr5Valor<18) {
    attr5Valor += 1;
    puntosDisponiblesNumero -= 1;
    modd5Valor = (attr5Valor/2-5)
    attr5.innerText = attr5Valor;
    puntosDisponibles.innerText = puntosDisponiblesNumero;
    modd5.innerText = Math.floor(modd5Valor);
  }
});



let btnResta6 = document.getElementById("btnResta6");
let attr6 = document.getElementById("attr6");
let btnSuma6 = document.getElementById("btnSuma6");
let attr6Valor = parseInt(attr6.innerText);
let modd6 = document.getElementById("modd6");
let modd6Valor = parseInt(modd6.innerText)

btnResta6.addEventListener("click", () => {
  if (attr6Valor > 8) {
    attr6Valor -= 1;
    puntosDisponiblesNumero += 1;
    modd6Valor = (attr6Valor/2-5)
    attr6.innerText = attr6Valor;
    puntosDisponibles.innerText = puntosDisponiblesNumero;
    modd6.innerText = Math.floor(modd6Valor);
  }
});
btnSuma6.addEventListener("click", () => {
  if (puntosDisponiblesNumero > 0 && attr6Valor<18) {
    attr6Valor += 1;
    puntosDisponiblesNumero -= 1;
    modd6Valor = (attr6Valor/2-5)
    attr6.innerText = attr6Valor;
    puntosDisponibles.innerText = puntosDisponiblesNumero;
    modd6.innerText = Math.floor(modd6Valor);
  }
});