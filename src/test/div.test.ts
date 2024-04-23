const { div } = require("../div");

describe("Div tests", () => {
  test("Una división correcta", () => {
    expect(div(6, 3)).toBe(2);
  });

  test("Prueba controlada del error división por cero", () => {
    expect(div(5.2, 0)).toBe(Infinity);
  });
});
