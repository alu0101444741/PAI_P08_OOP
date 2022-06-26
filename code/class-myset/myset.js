/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 19 2022
 * @desc Clase MySet
 * @module myset
 */

 'use static';

 /** @desc Clase MySet */
export class MySet {
  #collection;
  /**
  * @desc Constructor de la clase MySet
  * @param {Number[]} numbers - array de números naturales
  */
  constructor(numbers = []) {
    this.#collection = [];    
    for (const number of numbers) {
      this.add(number);
    }    
  }

  /**
   * @desc Método para añadir un nuevo elemento al conjunto
   * @param newNumber - número natural
   */
  add(newNumber) {
    let number = Number(newNumber);
    this.#isNaturalNumber(number);
    if (!this.#collection.includes(number)) {
      this.#collection.push(number);
    }
  }

  /**
   * @desc Método para crear la unión de dos conjuntos
   * @param otherSet - instancia de la clase MySet
   * @return {MySet} instancia de la clase MySet con la unión de ambos conjuntos
   */
  union(otherSet) {    
    if (!otherSet instanceof MySet) {
      throw new Error('No se ha proporcionado un objeto de la clase MySet.');
    }
    let resultSet = new MySet();
    for (const number of this.#collection) resultSet.add(number);
    for (const number of otherSet.#collection) resultSet.add(number);
    return(resultSet);
  }

  /**
   * @desc Método para crear la intersección de dos conjuntos
   * @param otherSet - instancia de la clase MySet
   * @return {MySet} instancia de la clase MySet con la intersección de ambos conjuntos
   */
  intersection(otherSet) {    
    if (!otherSet instanceof MySet) {
      throw new Error('No se ha proporcionado un objeto de la clase MySet.');
    }
    let resultSet = new MySet();
    for (const number of this.#collection) {
      if (otherSet.contains(number)) {
        resultSet.add(number);
      }
    }
    return(resultSet);
  }

  /**
   * @desc Método para crear el complemento relativo de dos conjuntos
   * @param otherSet - instancia de la clase MySet
   * @return {MySet} instancia de la clase MySet con el complemento relativo de ambos conjuntos
   */
   difference(otherSet) {    
    if (!otherSet instanceof MySet) {
      throw new Error('No se ha proporcionado un objeto de la clase MySet.');
    }
    let resultSet = new MySet();
    for (const number of this.#collection) {
      if (!otherSet.contains(number)) {
        resultSet.add(number);
      }
    }
    return(resultSet);
  }

  /**
   * @desc Método para comprobar que un conjunto es subconjunto de otro
   * @param otherSet - instancia de la clase MySet
   * @return {true | false} true si es subconjunto
   */
  subset(otherSet) {    
    if (!otherSet instanceof MySet) {
      throw new Error('No se ha proporcionado un objeto de la clase MySet.');
    }
    if(otherSet.size() > this.size()) {
      return(false);
    }
    else {
      for(const number of otherSet.#collection) {
        if (!this.contains(number)) {
          return(false);
        }
      }
      return(true);
    }
  }

  /**
   * @desc Método para comprobar que dos conjuntos son disjuntos
   * @param otherSet - instancia de la clase MySet
   * @return {true | false} true si son disjuntos
   */
   disjoint(otherSet) {
    if (!otherSet instanceof MySet) {
      throw new Error('No se ha proporcionado un objeto de la clase MySet.');
    }    
    for (const number of this.#collection) {
      if (otherSet.contains(number)) {
        return(false);
      }
    }
    return(true);
  }

  /**
   * @desc Método para comprobar que un conjunto es igual a otro
   * @param otherSet - instancia de la clase MySet
   * @return {true | false} true si son iguales
   */
  eql(otherSet) {
    if (!otherSet instanceof MySet) {
      throw new Error('No se ha proporcionado un objeto de la clase MySet.');
    }
    if(this.size() === otherSet.size()) {
      for (const number of this.#collection) {
        if (!otherSet.contains(number)) {
          return(false);
        }
      }
      return(true);
    }
    else {
      return(false);
    }
  }

  /**
   * @desc Método para comprobar que un elemento pertenece al conjunto
   * @param theNumber - número natural
   * @return {true | false} true si el número pertenece
   */
  contains(number) {
    let theNumber = Number(number);
    this.#isNaturalNumber(theNumber);
    if (!this.#collection.includes(theNumber)) {
      return(false);
    }
    else {
      return(true);
    }
  }

  /**
   * @desc Método para comprobar que un conjunto está vacío (no contiene elementos).
   * @return {true | false} true si está vacío 
   */
  empty () {
    if (this.#collection.length === 0) {
      return(true);
    }
    else {
      return(false);
    }    
  }

  /**
   * @desc Método para obtener el tamaño del conjunto
   * @return {Number} tamaño del conjunto
   */
  size () {
    return(this.#collection.length);
  }

  /**
   * @desc Método para verificar que un número es natural.
   * Lanzará un error en caso de no serlo.
   * @param number - número
   */
  #isNaturalNumber(number) {
    if ((Number.isNaN(number)) || (number < 0)) {
      throw new Error('La entrada debe ser un número mayor o igual a 0.');
    }
  }

  /**
  * @desc Devuelve una cadena formateada con la información del objeto
  * @return {String} cadena con 
  */
  toString() { 
    let stringifiedSet = '{';
    for (const number of this.#collection) {
      stringifiedSet += ` ${number}`;
    }
    stringifiedSet += ' }';
    return(stringifiedSet);
  }

  /**
  * @desc Devuelve el array de elementos
  * @return {Number[]} array de números naturales sin repetidos
  */
  get collection() {
    return(this.#collection);
  }
}