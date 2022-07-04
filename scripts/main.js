import { diceRoller } from "./dices.js";

/*
diceRoller es una funcion con tres parametros (cantidad de dados, cantidad de caras de dado, modificador)
que sirve para tirar dados y devolver un array de resultados con la cantidad de dados tirados y el valor de cada tirada + modificador
En el estado actual del desarrollo para este proyecto, diceRoller posee poco protagonismo, pero la idea es extender su funcionalidad con el avance del proyecto,
incluso por fuera de esta entrega en CH.
*/

import * as stats from "./statCounter.js";

/*
El modulo Stats contiene las funcionalidades requeridas para que el usuario realice la distribucion de puntos en los diferentes
atributos, fuerza, destreza, constitucion, inteligencia, carisma y sabiduria. Se generan ademas los modificadores de cada atributo
segun la distribucion de puntos en cada stat
*/

import { agregarAlDom } from "./listasDeItems.js";

/* 
Lista de Items incorpora listas desplegables de items pre generados en el document. Ademas, exporta variables que seran utilizadas
para la generacion del archivo JSON.
*/

import * as creacionJSON from "./creacionJSON.js";

/*
creacionJSON es el archivo responsable de:

1.- Colectar toda la informacion ingresada por el usuario en los diferentes campos
2.- Crear la instancia de clase 'Nuevo Personaje'
3.- Almacenar la instancia en el LocalStorage y llamar dicha informacion para ser mostrada al usuario
4.- Crear y mostrar en Document un resumen de toda la informacion ingresada por el usuario

Es uno de los archivos mas largos del proyecto. En futuras versiones su funcionalidad sera modulada.
*/

import { main } from "./three.js";

/*
Este archivo posee los comandos para aplicar una funcionalidad superficial de la libreria seleccionada. La idea original para la entrega final
era crear un lanzador de dados para que sea utilizada por el usuario. Dada la ENORME dificultad de la libreria, dicha funcionalidad se implementara
en futuros desarrollos.
*/

import { dataDesdeFetch } from "./fetch.js";

/*
DnD 5th edition posee una API publica. Para esta etapa de desarrollo se implementa un fetch para obtener el listado dotes disponibles
para la creacion de personajes.
*/