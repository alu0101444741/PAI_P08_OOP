/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 19 2022
 * @desc Robot name
 */
'use static';
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * @desc Clase Robot
 */
export class Robot {
  #name = '';
  static allNames = new Set();
  /**
  * @desc Constructor de la clase Robot
  */
  constructor() {    
    this.#name = this.#generateRandomName();
  }

  /**
  * @desc Getter para obtener el nombre del robot.
  */
  get name() {
    return(this.#name);
  }

  /**
  * @desc Método para asignar un nuevo nombre aleatorio al robot.
  */
  reset() {
    this.#name = this.#generateRandomName();
  }

  /**
  * @desc Método privado que generar un nombre aleatorio para el robot. Dicho nombre está
  * compuesto por dos letras mayúsculas aleatorias, seguido de tres números aleatorios
  * entre 0 y 9.
  * @return {String} cadena de caracteres [A-Z]{2}\[0-9]{3}
  */
  #generateRandomName() {
    let randomName = '';
    while ((Robot.allNames.has(randomName)) || (randomName === '')) {
      randomName = '';
      for (let i = 0; i < 2; ++i) {
        randomName += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
      }
      for (let i = 0; i < 3; ++i) {
        randomName += Math.floor(Math.random() * 9);
      }
      //console.log(randomName);
    }
    Robot.allNames.add(randomName);
    return(randomName);
  }
}

Robot.releaseNames = () => {};
