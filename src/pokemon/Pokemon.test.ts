import Pokemon from "./Pokemon";

describe("Given a Pokemon instance", () => {
  describe("When it is instantiated with 'Psyduck' pokemon", () => {
    const psyduck = new Pokemon("Psyduck", 2, "psyduck.wept");

    test("Then it should show a name 'Psyduck'", () => {
      const expectedName = "Psyduck";

      const actualName = psyduck.name;

      expect(actualName).toBe(expectedName);
    });

    test("Then it should show a number 2 of its position in pokedex", () => {
      const expecteNumber = 2;

      const actualNumber = psyduck.pokedexPosition;

      expect(actualNumber).toBe(expecteNumber);
    });
  });
});
