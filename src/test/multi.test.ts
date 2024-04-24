const { n, number, notTrue, notFalse } = require("../multi");

describe("Multi tests", () => {
  test("Probar que 'n' es null", () => {
    expect(n).toBeNull();
  });
  test("Probar que 'n' esta definido", () => {
    expect(n).toBeDefined();
  });
  test("Probar que 'number' es igual a 0", () => {
    expect(number).toBe(0);
  });
});
