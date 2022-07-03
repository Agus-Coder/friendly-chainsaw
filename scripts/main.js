import { diceRoller } from "./dices.js";

/* diceRoller es una funcion con tres parametros (cantidad de dados, cantidad de caras de dado, modificador)
que sirve para tirar dados y devolver un array de resultados con la cantidad de dados tirados y el valor de cada tirada + modificador*/

import * as stats from "./statCounter.js";

/* El modulo Stats contiene las funcionalidades requeridas para que el usuario realice la distribucion de puntos en los diferentes
atributos, fuerza, destreza, constitucion, inteligencia, carisma y sabiduria. Se generan ademas los modificadores de cada atributo
segun la distribucion de puntos en cada stat*/

import { agregarAlDom } from "./modificadorDom.js";

/* Este*/

import * as creacionJSON from "./creacionJSON.js";
import { main } from "./three.js";
import { dataDesdeFetch } from "./fetch.js";
