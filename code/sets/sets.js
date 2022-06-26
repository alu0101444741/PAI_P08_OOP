/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 19 2022
 * @desc Program to test MySet class functionalities.
*/
'use strict';
import { MySet } from '../class-myset/myset.js';
import { fileURLToPath } from 'url';
/**
 * @desc Función main
 */
function main() {
  const mySet1 = new MySet();
  mySet1.add(1); console.log(mySet1.toString());
  mySet1.add(5); console.log(mySet1.toString());
  mySet1.add(5); console.log(mySet1.toString());
  console.log(mySet1.contains(Math.sqrt(25)));

  const mySet2 = new MySet([1, 2, 3, 4]);
  console.log(mySet2.size());
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}