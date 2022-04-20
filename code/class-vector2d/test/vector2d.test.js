/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 20 2022
 * @desc Tests for class Vector2D
 *       
 */
 'use strict';
 import { Vector2D } from '../vector2d';
 
 describe('Vector2D', () => {
  let vector;

  beforeEach(() => {
    vector = new Vector2D(10, 3);
    
  });

  test('has an add method', () => {
    let otherVector = vector.add(new Vector2D(5, 7));
    expect(otherVector.toString()).toBe('(15,10)');
    otherVector = otherVector.add(new Vector2D(5, 7));
    expect(otherVector.toString()).toBe('(20,17)');
  });

  test('has a multiply by a number method', () => {
    expect((vector.multiplyByNumber(2)).toString()).toBe('(20,6)');
    expect((vector.multiplyByNumber(1.5)).toString()).toBe('(15,4.5)');
    expect((vector.multiplyByNumber(-3)).toString()).toBe('(-30,-9)');
    //expect((vector.multiplyByNumber(vector))).toThrow(Error);
  });

  test('has a product of two vectors method', () => {
    let otherVector = new Vector2D(5, 7);
    expect((vector.productOfTwoVectors(vector))).toBe(109);
    expect((vector.productOfTwoVectors(otherVector))).toBe(71);
    expect((vector.productOfTwoVectors(new Vector2D(1,1)))).toBe(13);
    //expect((vector.productOfTwoVectors(1))).toThrow(Error);
  });

  test('has a module method', () => {
    let otherVector = new Vector2D(5, 7);
    expect((vector.module())).toBe(Math.sqrt(109));
    expect((otherVector.module())).toBe(Math.sqrt(74));
    expect(((new Vector2D(1,1)).module())).toBe(Math.sqrt(2));
    //expect((vector.productOfTwoVectors(1))).toThrow(Error);
  });

  xtest('has an angle method', () => {
    let otherVector = new Vector2D(3, 0);
    let exampleVector = new Vector2D(5, 5);
    expect((otherVector.angle(exampleVector))).toBe(43.56);
  });

  test('has a create from string method', () => {
    let otherVector = new Vector2D(5, 7);
    expect(vector.toString()).toBe('(10,3)');
    expect(otherVector.toString()).toBe('(5,7)');
  });
});