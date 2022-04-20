/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 17 2022
 * @desc Robot simulator
 */
'use strict';

export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

const NORTH = 'north';
const SOUTH = 'south';
const EAST = 'east';
const WEST = 'west';
const RIGHT = 'R';
const LEFT = 'L';
const ADVANCE = 'A';

/**
 * @desc Clase Robot
 */
export class Robot {

  /**
  * @desc Constructor de la clase Robot
  */
  constructor() {
    this.x = 0;
    this.y = 0;
    this.bearing = NORTH;
  }

  /**
  * @desc Getter para las coordenadas.
  * @return {Number[]} array de tamaño dos con las coordenadas x e y del robot
  */
  get coordinates() {
    return([this.x, this.y]);
  }  

  /**
  * @desc Método para situar al robot en unas coordenadas determinadas y asignarle una dirección.
  * @param {Object} objeto con propiedades: x, y, direction
  */
  place({ x, y, direction }) {
    this.x = x;
    this.y = y;

    switch (direction) {
      case NORTH:
      case SOUTH:
      case EAST:
      case WEST:
        this.bearing = direction;
        break;
      default:
        throw new InvalidInputError();
    }    
  }

  /**
  * @desc Método para validar una cadena de instrucciones. La cadena será válida si esta
  * contiene solo caracteres 'R', 'L' o 'A' (solo en mayúsculas)
  * @param {String} cadena de caracteres
  */
  evaluate(instructions) {
    for (let i = 0; i < instructions.length; ++i) {
      let actualLetter = instructions[i];
      if ((actualLetter !== RIGHT) && (actualLetter !== LEFT) && (actualLetter !== ADVANCE)) {
        throw new InvalidInputError();
      }
      switch(actualLetter) {
        case RIGHT:
        case LEFT:
          this.#changeDirection(actualLetter);
          break;
        case ADVANCE:
          this.#advancePosition();
          break;
      }
    }
  }

  /**
  * @desc Método para cambiar la dirección a la que mira el robot dado un lado al que girar.
  * Dicha dirección está expresada en uno de los cuatro puntos cardinales. 
  * @param {String} cadena de caracteres
  */
  #changeDirection (side) {
    if (side === RIGHT) {
      switch(this.bearing) {
        case NORTH: this.bearing = EAST; break;
        case SOUTH: this.bearing = WEST; break;
        case EAST: this.bearing = SOUTH; break;
        case WEST: this.bearing = NORTH; break;
      }
    }
    else{
      switch(this.bearing) {
        case NORTH: this.bearing = WEST; break;
        case SOUTH: this.bearing = EAST; break;
        case EAST: this.bearing = NORTH; break;
        case WEST: this.bearing = SOUTH; break;
      }
    }
  }

  /**
  * @desc Método para avanzar una posición según la dirección hacia la que mire el robot.
  */
  #advancePosition() {
    switch(this.bearing) {
      case NORTH: this.y ++; break;
      case SOUTH: this.y --; break;
      case EAST: this.x ++; break;
      case WEST: this.x --; break;
    }
  }
}
