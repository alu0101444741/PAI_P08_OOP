/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 19 2022
 * @desc The program will ask for a text file name, a date in 'dd/mm/yy' format and a number N equal or higher than 0.
 * It will write on the file the date received followed by it following N dates (N days after).
*/
'use strict';
import { Fecha } from '../class-fecha/fecha.js';
import { fileURLToPath } from 'url';
import { writeFile } from 'fs';

function main() {
  if (process.argv[2] === '--help') {
    console.log('Modo de uso: node fechas.js dd/mm/aa N fichero_salida.txt');
    return(0);
  }
  testInput(process.argv[2], process.argv[3], process.argv[4]);
  let date = convertDate(process.argv[2]);
  let dateObject = new Fecha(date[0], date[1], date[2]);
  let toWriteOnFile = dateObject.toString();
  
  for (let i = 0; i < process.argv[3]; ++i) {
    dateObject.advanceOneDay();
    toWriteOnFile += `\n${dateObject.toString()}`;
  }
  writeFile(process.argv[4], toWriteOnFile, (err) => {
    if (err) throw err;
  });
}

/**
 * @desc Convierte una fecha en un array con la información de la misma.
 * @param {String} date - cadena con formato dd/mm/aa 
 * @return {Number[3]} array con contenido [día, mes, año] 
 */
  function convertDate(date) {
    let dateNumbers = date.split('/');
    return([Number(dateNumbers[0]), Number(dateNumbers[1]), Number(dateNumbers[2])]);
  }

/**
 * @desc Función para validar la entrada del programa. Dicha entrada será válida si recibe
 * tres argumentos: fecha en formato dd/mm/aa, un número mayor o igual a 0 y un nombre de fichero.
 *  En caso de no recibir la cantidad de argumentos mínima (3) o que alguno de ellos sea incorrecto,
 * se lanzará un error.
 * @param {String} date - cadena en formato dd/mm/aa
 * @param {Number} datesAfter - cantidad de fechas a imprimir
 * @param {String} outputFile - nombre/path de un fichero de texto
 */
function testInput(date, datesAfter, outputFile) {
  if ((date === undefined) || (datesAfter === undefined) || (outputFile === undefined)) {
    throw new Error('Modo de uso: node fechas.js dd/mm/aa N fichero_salida.txt\n\
    Pruebe node fechas.js --help para más información');
  }

  if (!evaluateDate(date)) {
    throw new Error ('La fecha debe seguir un formato dd/mm/aa.');   
  }
  else {
    let numberOfDates = Number(datesAfter); console.log('numero', numberOfDates)
    if ((Number.isNaN(numberOfDates)) || (numberOfDates < 0)) {
      throw new Error('La entrada no era un número.');
    }
  }
}

/**
 * @desc Función para validar una fecha en formato dd/mm/aa.
 * @param {String} date - cadena en formato dd/mm/aa
 * @return {true | false} true si la fecha es válida
 */
function evaluateDate (date) {
  if (date.length !== 8) {
    if ((date.charAt(2) !== '/') || (date.charAt(5) !== '/')) {
      return(false);
    }
    let dateNumbers = date.split('/');
    let day = Number(dateNumbers[0]);
    let month = Number(dateNumbers[1]);
    let year = Number(dateNumbers[2]);
    if ((Number.isNaN(day)) || (Number.isNaN(month)) || (Number.isNaN(year))) {
      return(false);
    }    
  }
  return(true);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}