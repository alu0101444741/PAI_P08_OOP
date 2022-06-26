/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 20 2022
 * @desc Clase Vector2D
 * @module vector2d
 */
 'use static';


 /** @desc Clase Vector2D */
export class Vector2D {
  #coordinateX;
  #coordinateY;
  /**
  * @desc Constructor de la clase Vector2D
  * @param {Number} pointX - coordenada
  * @param {Number} pointY - 
  */
  constructor(pointX = 0, pointY = 0) {
    let x = Number(pointX);
    let y = Number(pointY);
    if ((Number.isNaN(x)) || (Number.isNaN(y))) {
      throw new Error('No se ha proporcionado un número.');
    }
    this.#coordinateX = x;
    this.#coordinateY = y;
  }

  /**
  * @desc Método para sumar un vector con otro pasado como parámetro.
  * @param {Vector2D} otherVector - instancia de la clase Vector2D
  * @return {Vector2D} instancia de la clase Vector2D con la suma resultante.
  */
   add(otherVector) {
    if (!otherVector instanceof Vector2D) {
      throw new Error('No se ha proporcionado un objeto de la clase Vector2D.');
    }
    return (new Vector2D(this.#coordinateX + otherVector.#coordinateX, this.#coordinateY + otherVector.#coordinateY));
  }

  /**
  * @desc Método para multiplicar un vector por un número real.
  * @param {Number} number - número real
  * @return {Vector2D} instancia de la clase Vector2D con la multiplicación resultante.
  */
  multiplyByNumber(number) {
    let theNumber = Number(number);
    if (Number.isNaN(theNumber)) {
      throw new Error('No se ha proporcionado un número.');
    }
    return (new Vector2D(this.#coordinateX * theNumber, this.#coordinateY * theNumber));
  }

  /**
  * @desc Método para calcular el producto escalar de dos vectores.
  * @param {Vector2D} otherVector - instancia de la clase Vector2D
  * @return {Number} multiplicación resultante.
  */
  productOfTwoVectors(otherVector) {
    if (!otherVector instanceof Vector2D) {
      throw new Error('No se ha proporcionado un objeto de la clase Vector2D.');
    }
    return(this.#coordinateX * otherVector.#coordinateX + this.#coordinateY * otherVector.#coordinateY);
  }

  /**
  * @desc Método para calcular el módulo del vector.
  * @return {Number} multiplicación resultante.
  */
  module() {
    return(Math.sqrt(Math.pow(this.#coordinateX,2) + Math.pow(this.#coordinateY,2)));
  }

  /**
  * @desc Método para calcular ángulo en grados formado por dos vectores.
  * @param {Vector2D} otherVector - instancia de la clase Vector2D
  * @return {Number} grados del ángulo formado.
  */
  angle(otherVector) {
    if (!otherVector instanceof Vector2D) {
      throw new Error('No se ha proporcionado un objeto de la clase Vector2D.');
    }
    let radians = Math.acos((this.productOfTwoVectors(otherVector)) / (this.module() * otherVector.module()));
    return ((radians * 180.0) / Math.PI);
  }

  /**
  * @desc Devuelve una cadena formateada con la información del objeto
  * @return {String} cadena con formato (x,y)
  */
  toString() {
    return(`(${this.#coordinateX},${this.#coordinateY})`);
  }

  /**
  * @desc Método para obtener la coordenada X del vector.
  * @return {Number} coordenada X del vector.
  */
  get coordinateX() {
    return(this.#coordinateX);
  }

  /**
  * @desc Método para obtener la coordenada Y del vector.
  * @return {Number} coordenada Y del vector.
  */
  get coordinateY() {
    return(this.#coordinateY);
  }
}
