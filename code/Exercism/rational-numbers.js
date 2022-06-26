//
// This is only a SKELETON file for the 'Rational Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Rational {
  #numerator;
  #denominator;
  constructor(numerator = 1, denominator = 1) {
    if (denominator === 0) {
      throw new Error('El denominador no puede ser 0');
    }
    this.#numerator = Math.floor(numerator);
    this.#denominator = Math.floor(denominator);
  }

  /**
  * @desc Método para sumar un número Rational con otro pasado como parámetro.
  * @param {Rational} rationalNumber - instancia de la clase Rational
  * @return {Rational} instancia resultado de la operación
  */
  add(rationalNumber) {
    if (!rationalNumber instanceof Rational) {
      throw new Error('No se ha proporcionado un objeto de la clase Rational.');
    }
    let commonDivisor = this.#leastCommonDenominator(this.#denominator, rationalNumber.denominator);
    let firstNumerator = (commonDivisor / this.#denominator) * this.#numerator;
    let secondNumerator = (commonDivisor / rationalNumber.denominator) * rationalNumber.numerator;
    let numerator = firstNumerator + secondNumerator;
    let denominator = commonDivisor;
    return(new Rational(numerator, denominator));
  }

  /**
  * @desc Método para restar un número Rational con otro pasado como parámetro.
  * @param {Rational} rationalNumber - instancia de la clase Rational
  * @return {Rational} instancia resultado de la operación
  */
  sub(rationalNumber) {
    if (!rationalNumber instanceof Rational) {
      throw new Error('No se ha proporcionado un objeto de la clase Rational.');
    }
    let commonDivisor = this.#leastCommonDenominator(this.#denominator, rationalNumber.denominator);
    let firstNumerator = (commonDivisor / this.#denominator) * this.#numerator;
    let secondNumerator = (commonDivisor / rationalNumber.denominator) * rationalNumber.numerator;
    let numerator = firstNumerator - secondNumerator;
    let denominator = commonDivisor;
    return(new Rational(numerator, denominator));
  }

  /**
  * @desc Método para multiplicar un número Rational con otro pasado como parámetro.
  * @param {Rational} rationalNumber - instancia de la clase Rational
  * @return {Rational} instancia resultado de la operación
  */
  mul(rationalNumber) {
    if (!rationalNumber instanceof Rational) {
      throw new Error('No se ha proporcionado un objeto de la clase Rational.');
    }
    let numerator =  this.#numerator * rationalNumber.numerator;
    let denominator = this.#denominator * rationalNumber.denominator;
    return(new Rational(numerator, denominator));
  }

  /**
  * @desc Método para dividir un número Rational con otro pasado como parámetro.
  * @param {Rational} rationalNumber - instancia de la clase Rational
  * @return {Rational} instancia resultado de la operación
  */
  div(rationalNumber) {
    if (!rationalNumber instanceof Rational) {
      throw new Error('No se ha proporcionado un objeto de la clase Rational.');
    }    
    let numerator =  this.#numerator * rationalNumber.denominator;
    let denominator = this.#denominator * rationalNumber.numerator;
    return(new Rational(numerator, denominator));
  }

  /**
  * @desc Método para calcular el valor absoluto de un número Rational.
  * @param {Rational} rationalNumber - instancia de la clase Rational
  * @return {Rational} instancia resultado de la operación
  */
  abs() { 
    return(new Rational(Math.abs(this.#numerator), Math.abs(this.#denominator)));
  }

  /**
  * @desc Método para calcular un número Rational elevado a una determinada potencia.
  * @param {Rational} rationalNumber - instancia de la clase Rational
  * @return {Rational} instancia resultado de la operación
  */
  exprational(exponent) {
    let number = Number(exponent);
    if ((Number.isNaN(number)) || (Number.isNaN(number))) {
      throw new Error('No se ha proporcionado un número.');
    }
    return(new Rational(Math.pow(this.#numerator, exponent), Math.pow(this.#denominator, exponent)));
  }

  /**
  * @desc Método para calcular un número Rational elevado a una determinada potencia.
  * @param {Rational} rationalNumber - instancia de la clase Rational
  * @return {Number} instancia resultado de la operación
  */
  expreal(exponent) {
    let number = Number(exponent);
    if ((Number.isNaN(number)) || (Number.isNaN(number))) {
      throw new Error('No se ha proporcionado un número.');
    }
    return(Number((Math.pow(exponent, (this.#numerator / this.#denominator))).toFixed(2)));
  }

  /**
  * @desc Método para minimizar los valores de la fracción.
  * @return {Rational} instancia resultado de la operación
  */
  reduce() {
    let numerator = this.#numerator;
    let denominator = this.#denominator;
    let limit = Math.max(denominator, numerator);
    for (let i = 2; i < limit; ++i) {
      if ((numerator % i === 0) && (denominator % i === 0)) {
        numerator = numerator / i;
        denominator = denominator / i;
        --i;
      }
    }
    return(new Rational(numerator, denominator));
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
