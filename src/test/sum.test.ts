import { sum } from "../sum"

describe('Sum tests', () => {
  test('Probar que una suma de dos valores es mayor a 10', () => {
    const res = sum(11, 2);
    expect(res).toBeGreaterThan(10);
  });

  test('Probar que una suma de dos valores es mayor o igual a 20', () => {
    const res = sum(10, 10);
    expect(res).toBeGreaterThanOrEqual(20);
  });

  test('Probar que una suma de dos valores es menor o igual a 8', () => {
    const res = sum(1, 1);
    expect(res).toBeLessThanOrEqual(8);
  });

  test('Probar que una suma de dos valores es menor a 12', () => {
    const res = sum(1, 10);
    expect(res).toBeLessThan(12);
  });

  test('Probar que una suma de dos valores es igual a 9', () => {
    const res = sum(1, 8);
    expect(res).toBe(9);
  });

})
