/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 19 2022
 * @desc Clase Racional
 * @module racional
 */
 'use static';

 /**
 * @desc Clase Racional
 */
export class Racional {
  #numerator;
  #denominator;

  /**
  * @desc Constructor de la clase Racional
  * @param {Number} numerator - número entero
  * @param {Number} denominator - número entero distinto de 0
  */
  constructor(numerator = 1, denominator = 1) {
    if (denominator === 0) {
      throw new Error('El denominador no puede ser 0');
    }
    this.#numerator = Math.floor(numerator);
    this.#denominator = Math.floor(denominator);
  }

  /**
  * @desc Método para modificar la información del número racional tomando
  * una cadena que represente otro número racional.
  * @param {String} rationalNumber - cadena que representa un número racional
  */
  createFromString(rationalNumber) {
    let numbers = rationalNumber.split('/');
    let numerator = Number(numbers[0]);
    let denominator = Number(numbers[1]);
    if ((Number.isNaN(numerator)) || (Number.isNaN(denominator))) {
      throw new Error('La entrada no es un número racional');
    }
    else {
      this.#numerator = Math.floor(numerator);
      this.#denominator = Math.floor(denominator);
    }
  }

  /**
  * @desc Método para sumar un número racional con otro pasado como parámetro.
  * @param {Racional} rationalNumber - instancia de la clase Racional
  */
  add (rationalNumber) {
    if (!rationalNumber instanceof Racional) {
      throw new Error('No se ha proporcionado un objeto de la clase Racional.');
    }
    else {
      let commonDivisor = this.#leastCommonDenominator(this.#denominator, rationalNumber.denominator);
      let firstNumerator = (commonDivisor / this.#denominator) * this.#numerator;
      let secondNumerator = (commonDivisor / rationalNumber.denominator) * rationalNumber.numerator;
      this.#numerator = firstNumerator + secondNumerator;
      this.#denominator = commonDivisor;
    }
  }

  /**
  * @desc Método para restar un número racional con otro pasado como parámetro.
  * @param {Racional} rationalNumber - instancia de la clase Racional
  */
   subtract (rationalNumber) {
    if (!rationalNumber instanceof Racional) {
      throw new Error('No se ha proporcionado un objeto de la clase Racional.');
    }
    else {
      let commonDivisor = this.#leastCommonDenominator(this.#denominator, rationalNumber.denominator);
      let firstNumerator = (commonDivisor / this.#denominator) * this.#numerator;
      let secondNumerator = (commonDivisor / rationalNumber.denominator) * rationalNumber.numerator;
      this.#numerator = firstNumerator - secondNumerator;
      this.#denominator = commonDivisor;
    }
  }

  /**
  * @desc Método para multiplicar un número racional con otro pasado como parámetro.
  * @param {Racional} rationalNumber - instancia de la clase Racional
  */
  multiply (rationalNumber) {
    if (!rationalNumber instanceof Racional) {
      throw new Error('No se ha proporcionado un objeto de la clase Racional.');
    }
    else {
      this.#numerator =  this.#numerator * rationalNumber.numerator;
      this.#denominator = this.#denominator * rationalNumber.denominator;
    }
  }

  /**
  * @desc Método para dividir un número racional con otro pasado como parámetro.
  * @param {Racional} rationalNumber - instancia de la clase Racional
  */
   divide (rationalNumber) {
    if (!rationalNumber instanceof Racional) {
      throw new Error('No se ha proporcionado un objeto de la clase Racional.');
    }
    else {
      this.#numerator =  this.#numerator * rationalNumber.denominator;
      this.#denominator = this.#denominator * rationalNumber.numerator;
    }
  }

  /**
  * @desc Método para comparar un número racional con otro pasado como parámetro.
  * Devolverá -1 si el número pasado como parámetro es mayor, 1 si es menor o 
  * 0 si son iguales.
  * @param {Racional} rationalNumber - instancia de la clase Racional
  * @return {Number} -1 si es mayor, 1 si es menor, 0 si son iguales 
  */
  compare (rationalNumber) {
    if (!rationalNumber instanceof Racional) {
      throw new Error('No se ha proporcionado un objeto de la clase Racional.');
    }
    else {
      this.#minimize();
      let rational = new Racional(this.#numerator, this.#denominator);
      rational.subtract(rationalNumber);
      if (rational.#numerator < 0) {
        return(-1);
      }
      else if (rational.#numerator > 0) {
        return(1);
      }
      else {
        return(0);
      }
    }
  }

  /**
  * @desc Método para minimizar los valores de la fracción. 
  */
  #minimize() {
    let limit = Math.max(this.#denominator, this.#numerator);
    for (let i = 2; i < limit; ++i) {
      if ((this.#numerator % i === 0) && (this.#denominator % i === 0)) {
        this.#numerator = this.#numerator / i;
        this.#denominator = this.#denominator / i;
        --i;
      }
    }
  }

  /**
  * @desc Método para calcular el mínimo común denominador.
  * @param {Number} firstNumber - número entero distinto de 0
  * @param {Number} secondNumber - número entero distinto de 0
  * @return {Number} mínimo común divisor
  */
  #leastCommonDenominator(firstNumber, secondNumber) {
    let smaller = Math.min(firstNumber, secondNumber);
    let greater = Math.max(firstNumber, secondNumber);
    for (let i = smaller; i <= (smaller * greater); ++i) {
      if ((i % smaller === 0) && (i % greater === 0)) {
        return(i);
      }
    }
  }

  /**
  * @desc Devuelve una cadena formateada con la información del objeto
  * @return {String} cadena con formato numerator / denominator
  */
  toString() {
    return(`${this.#numerator}/${this.#denominator}`);
  }

  /**
  * @desc Devuelve el numerador de la fracción
  * @return {Number} numerador
  */
  get numerator() {
    return(this.#numerator);
  }

  /**
  * @desc Devuelve el denominador de la fracción
  * @return {Number} denominador
  */
  get denominator() {
    return(this.#denominator);
  }

}