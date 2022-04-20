/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 19 2022
 * @desc Clase Fecha
 * @module fecha
 */
 'use static';

 /**
 * @desc Clase Fecha
 */
export class Fecha {
  #day;
  #month;
  #year;
  /**
  * @desc Constructor de la clase Fecha
  * @param {Number} day - número entre 1 y 31
  * @param {Number} month - número entre 1 y 12
  * @param {Number} year - número entre 0 y 99
  */
  constructor(day, month, year) {
    year = (year > 22) ? year += 1900: year += 2000;
    if (!this.#isValidDate(day, month, year)) {
      throw new Error('La fecha proporcionada no es válida');
    }
    else {
      this.#day = day;
      this.#month = month;
      this.#year = year;
    }
  }

  /**
  * @desc Modifica el objeto para representar el día posterior al que representaba
  * en un principio.
  */
  advanceOneDay() {
    if (this.#isValidDate(this.#day + 1, this.#month, this.#year)) {
      this.#day = this.#day + 1;
    }
    else {
      if (this.#isValidDate(1, this.#month + 1, this.#year)) {
        this.#day = 1;
        this.#month = this.#month + 1;
      }
      else {
        if (this.#isValidDate(1, 1, this.#year + 1)) {
          this.#day = 1;
          this.#month = 1;
          this.#year = this.#year + 1;
        }
        else {
          throw new Error('La fecha excede al año 2022.');
        }
      }
    }
  }

  /**
  * @desc Devuelve una cadena formateada con la información del objeto
  * @return {String} cadena con formato dd/mm/aa
  */
  toString() {
    let day, month, year;
    if (this.#day < 10) {
      day = `0${this.#day}`;
    }
    else {
      day = `${this.#day}`;
    }
    if (this.#month < 10) {
      month = `0${this.#month}`;
    }
    else {
      month = `${this.#month}`;
    }
    year = `${this.#year % 100}`;
    if (year.length === 1) year = `0${year}`;
    return(`${day}/${month}/${year}`);
  }

  /**
   * @desc Determina si una fecha es válida. La fecha será válida si cumple las siguientes tres condiciones:
   *  1- El año está comprendido entre 1923 y 2022
   *  2- El mes está comprendido entre 1 y 12
   *  3- El día está comprendido:
   *    - Entre 1 y 29 para el mes 2 en año bisiesto
   *    - Entre 1 y 28 para el mes 2 en año no bisiesto
   *    - Entre 1 y 30 para los meses 4, 6, 9 y 11
   *    - Entre 1 y 31 para el resto de meses
   * @param {number} day
   * @param {number} month
   * @param {number} year
   * @returns {true | false} true si la fecha es válida
   */
  #isValidDate(day, month, year) {
    if ((month > 0 && month <= 12) && (year >= 1923 && day <= 2022)) {
      if (month === 2) {
        if (this.#isLeapYear(year)) {
          return ((day > 0) && (day <= 29));
        }
        else {
          return ((day > 0) && (day <= 28));
        }            
      }
      else if ((month === 4) || (month === 6) || (month === 9) || (month === 11)) {
        return((day > 0) && (day <= 30));
      }
      else {
        return((day > 0) && (day <= 31));
      }
    }
    else {
      return(false);
    }
  }

  /**
   * @desc Determina si un año determinado es bisiesto
   * @param {number} year
   * @returns {true | false} true si es año bisiesto
   */
  #isLeapYear(year) {
    if (year % 100 === 0) {
      if ((Math.floor(year / 100) % 4 === 0)) {
        return(true);
      }
      else {
        return(false);
      }
    }
    else {
      if (year % 4 === 0) {
        return(true);
      }
      else {
        return(false);
      }
    }
  }
}