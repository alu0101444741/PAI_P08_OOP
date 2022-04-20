/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Roberto Carrazana Pernía
 * @since Apr 19 2022
 * @desc Tests for class Fecha
 *       
 */
'use strict';
import { Fecha } from '../fecha';

describe('Fecha', () => {
  let date;

  beforeEach(() => {
    date = new Fecha(10, 3, 1999);
  });

  test('internal properties cannot be accessed', () => {
    expect(date.day).toBe(undefined);
    expect(date.month).toBe(undefined);
    expect(date.year).toBe(undefined);
  });

  test('has an advance one day method', () => {
    date.advanceOneDay();
    expect(date.toString()).toBe('11/03/99');
    date.advanceOneDay();
    expect(date.toString()).toBe('12/03/99');
  });

  test('has a toString method', () => {
    expect(date.toString()).toBe('10/03/99');
  });

});