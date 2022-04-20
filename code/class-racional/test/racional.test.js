/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 19 2022
 * @desc Tests for class Racional
 *       
 */
'use strict';
import { Racional } from '../racional';

describe('Racional', () => {
  let rational;

  beforeEach(() => {
    rational = new Racional(10, 3);
  });

  test('has a create from string method', () => {
    let rational = new Racional(5, 7);
    rational.createFromString('10/3');
    expect(rational.numerator).toBe(10);
    expect(rational.denominator).toBe(3);
    rational.createFromString('100/35');
    expect(rational.numerator).toBe(100);
    expect(rational.denominator).toBe(35);
  });

  test('internal properties can be accessed', () => {
    expect(rational.numerator).toBe(10);
    expect(rational.denominator).toBe(3);
  });

  test('has an add method', () => {
    let rationaltoAdd = new Racional(5, 7);
    rational.add(rationaltoAdd);
    expect(rational.numerator).toBe(85);
    expect(rational.denominator).toBe(21);

    rationaltoAdd = new Racional(5, 21);
    rational.add(rationaltoAdd);
    expect(rational.numerator).toBe(90);
    expect(rational.denominator).toBe(21);
  });

  test('has an subtract method', () => {
    let rationaltoSub = new Racional(5, 7);
    rational.subtract(rationaltoSub);
    expect(rational.numerator).toBe(55);
    expect(rational.denominator).toBe(21);

    rationaltoSub = new Racional(5, 21);
    rational.subtract(rationaltoSub);
    expect(rational.numerator).toBe(50);
    expect(rational.denominator).toBe(21);

    rationaltoSub = new Racional(90, 21);
    rational.subtract(rationaltoSub);
    expect(rational.numerator).toBe(-40);
    expect(rational.denominator).toBe(21);

    rationaltoSub = new Racional(-10, 3);
    rational.subtract(rationaltoSub);
    expect(rational.numerator).toBe(30);
    expect(rational.denominator).toBe(21);
  });

  test('has a multiply method', () => {
    let rationaltoMultiply = new Racional(5, 7);
    rational.multiply(rationaltoMultiply);
    expect(rational.numerator).toBe(50);
    expect(rational.denominator).toBe(21);

    rationaltoMultiply = new Racional(5, 2);
    rational.multiply(rationaltoMultiply);
    expect(rational.numerator).toBe(250);
    expect(rational.denominator).toBe(42);

    rationaltoMultiply = new Racional(-1, 3);
    rational.multiply(rationaltoMultiply);
    expect(rational.numerator).toBe(-250);
    expect(rational.denominator).toBe(126);
  });

  test('has a divide method', () => {
    let rationaltoDivide = new Racional(5, 7);
    rational.divide(rationaltoDivide);
    expect(rational.numerator).toBe(70);
    expect(rational.denominator).toBe(15);

    rationaltoDivide = new Racional(5, 2);
    rational.divide(rationaltoDivide);
    expect(rational.numerator).toBe(140);
    expect(rational.denominator).toBe(75);

    rationaltoDivide = new Racional(-1, 3);
    rational.divide(rationaltoDivide);
    expect(rational.numerator).toBe(420);
    expect(rational.denominator).toBe(-75);
  });

  test('has a compare method', () => {
    let rationaltoCompare = new Racional(5, 7);
    expect(rational.compare(rationaltoCompare)).toBe(1);
    rationaltoCompare = new Racional(500, 700);
    expect(rational.compare(rationaltoCompare)).toBe(1);
    rationaltoCompare = new Racional(11, 3);
    expect(rational.compare(rationaltoCompare)).toBe(-1);
    rationaltoCompare = new Racional(66, 18);
    expect(rational.compare(rationaltoCompare)).toBe(-1);
    rationaltoCompare = new Racional(10, 3);
    expect(rational.compare(rationaltoCompare)).toBe(0);
    rationaltoCompare = new Racional(100, 30);
    expect(rational.compare(rationaltoCompare)).toBe(0);
    rationaltoCompare = new Racional(1000, 300);
    expect(rational.compare(rationaltoCompare)).toBe(0);
  });

  test('has a toString method', () => {
    expect(rational.toString()).toBe('10/3');
  });

});