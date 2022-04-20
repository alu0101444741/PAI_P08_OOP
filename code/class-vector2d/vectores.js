/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 20 2022
 * @desc Program to test Vector2D class functionalities.
*/
'use strict';
import { Vector2D } from './vector2d.js';
import { fileURLToPath } from 'url';

/** @desc Función main */
function main() {
  let vector = new Vector2D(1, 0);
  let vector2 = new Vector2D(0, 1);
  console.log('vector toString', vector.toString());

  console.log('Suma', (vector.add(vector2)).toString());
  console.log('Multiplicacion', (vector.multiplyByNumber(5)).toString());
  console.log('Multiplicacion 2', (vector2.multiplyByNumber(5)).toString());
  console.log('Producto de dos vectores', vector.productOfTwoVectors(vector2));
  console.log('Modulo', (vector.module()).toString());
  console.log('Angulo', (vector.angle(vector2)));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}