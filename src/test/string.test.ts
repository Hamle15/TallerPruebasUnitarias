import { anything, anything1 } from "../string";

describe("String tests", () => {

  test("Probar que 'anything' contiene UN", () => {
    const anyConUN = anything.includes("UN");
    expect(anyConUN).toBe(true);
  });

  test("Probar que 'anything' no contiene P", () => {
    const anyConUN = anything.includes("P");
    expect(anyConUN).toBe(false);
  });

  test("Probar que 'anything1' contiene la letra n", () => {
    const anyConUN = anything1.toLowerCase().includes("n");
    expect(anyConUN).toBe(true);
  });

});
