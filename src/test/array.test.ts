const { arrayContainsValue, arrayNotContainsValue } = require("../array");

describe("Array tests", () => {
  const testArray = ["pito", "value3", "value1"];

  test("Probar que el array contenga el valor: value1", () => {
    expect(arrayContainsValue(testArray, "value1")).toBe(true);
  });

  test("Probar que el array contenga el valor: value3", () => {
    expect(arrayContainsValue(testArray, "value3")).toBe(true);
  });

  test("Probar que el array NO contenga el valor: UNAC", () => {
    expect(arrayNotContainsValue(testArray, "UNAC")).toBe(true);
  });
});
