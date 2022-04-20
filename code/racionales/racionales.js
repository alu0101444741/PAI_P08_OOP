/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 19 2022
 * @desc The program will ask for a two file names: one to read from and one to write on.
 * It will read
*/
'use strict';
import { Racional } from '../class-racional/racional.js';
import { fileURLToPath } from 'url';
import { writeFile, createReadStream } from 'fs';
import { createInterface } from 'readline';

function main() {
  if (process.argv[2] === '--help') {
    console.log('racionales.js -- Números Racionales\n\
    Modo de uso: node racionales.js fichero_entrada fichero_salida\n\
    fichero_entrada: Fichero de texto conteniendo líneas con un par de números racionales: `a/b c/d` separados por un espacio\n\
    fichero_salida:  Fichero de texto que contendrá líneas con las operaciones realizadas: `a/b + c/d = n/m`');
    return(0);
  }
  testInput(process.argv[2], process.argv[3]);

  operateRationalNumbers(process.argv[2], process.argv[3]);
}

/**
 * @desc Dado el nombre de un fichero con pares de números racionales separados por un espacio,
 * escribirá en otro fichero los resultados de sumar, restar, multiplicar, dividir y comparar cada
 * una de las parejas obtenidas.
 * @param {String} inputFile - nombre/path de un fichero de texto del que leer
 * @param {String} outputFile - nombre/path de un fichero de texto sobre el que escribir
 */
async function operateRationalNumbers(inputFile, outputFile) {  
  let splitLine;
  let toWriteOnFile = '';    

  const fileStream = createReadStream(inputFile);
  const rl = createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  for await (const line of rl) {
    if (line !== '') {
      splitLine = line.split(' ');
      toWriteOnFile += operationsToString(splitLine[0], splitLine[1]);    
    }      
  }
  writeFile(outputFile, toWriteOnFile, (err) => {
    if (err) throw err;
  });
}

/**
 * @desc Función que, dados dos números racionales, devuelve una cadena con los resultados de sumar, restar,
 * multiplicar, dividir y compararlos.
 * @param {String} firstNumber - número racional en forma de cadena de caracteres
 * @param {String} secondNumber - número racional en forma de cadena de caracteres
 * @return {String} operaciones en formato a/b + c/d = n/m
 */
function operationsToString(firstNumber, secondNumber) {
  let toWriteOnFile = '';
  let comparator;
  let firstRationalNumber = new Racional();        
  let secondRationalNumber = new Racional();      
  secondRationalNumber.createFromString(secondNumber);
  firstRationalNumber.createFromString(firstNumber);

  firstRationalNumber.add(secondRationalNumber);
  toWriteOnFile += `${firstNumber} + ${secondNumber} = ${firstRationalNumber.toString()}\n`;

  firstRationalNumber.createFromString(firstNumber);
  firstRationalNumber.subtract(secondRationalNumber);
  toWriteOnFile += `${firstNumber} - ${secondNumber} = ${firstRationalNumber.toString()}\n`;

  firstRationalNumber.createFromString(firstNumber);
  firstRationalNumber.multiply(secondRationalNumber);
  toWriteOnFile += `${firstNumber} * ${secondNumber} = ${firstRationalNumber.toString()}\n`;

  firstRationalNumber.createFromString(firstNumber);
  firstRationalNumber.divide(secondRationalNumber);
  toWriteOnFile += `${firstNumber} / ${secondNumber} = ${firstRationalNumber.toString()}\n`;

  firstRationalNumber.createFromString(firstNumber);
  switch(firstRationalNumber.compare(secondRationalNumber)) {
    case 1: comparator = '>'; break;    
    case -1: comparator = '<'; break;
    default: comparator = '==='; break;
  }
  toWriteOnFile += `${firstNumber} ${comparator} ${secondNumber}\n\n`;
  return(toWriteOnFile);
}

/**
 * @desc Función para validar la entrada del programa. Dicha entrada será válida si recibe
 * dos argumentos, ambos son nombres de ficheros.
 *  En caso de no recibir la cantidad de argumentos mínima (2) o que alguno de ellos sea incorrecto,
 * se lanzará un error.
 * @param {String} inputFile - nombre del fichero del cual leer
 * @param {String} outputFile - nombre/path de un fichero de texto
 */
function testInput(inputFile, outputFile) {
  if ((inputFile === undefined) || (outputFile === undefined)) {
    throw new Error('Modo de uso: node racionales.js fichero_entrada fichero_salida\n\
    Pruebe node racionales.js --help para más información');
  }
  else {
    
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}