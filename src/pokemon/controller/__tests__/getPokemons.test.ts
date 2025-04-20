import { Request, Response } from "express";
import { testPokemons } from "../../fixtures";
import PokemonController from "../PokemonController";

describe("Given a getPokemons function", () => {
  describe("When it receives a response", () => {
    const pokemonController = new PokemonController(testPokemons);

    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should call the received response's method status with 200", () => {
      const expectedStatus = 200;

      pokemonController.getPokemons(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the received response's method json with 'Buterfree', 'Zubat' and 'Paras' pokemons", () => {
      const expectedPokemons = { pokemons: testPokemons };

      pokemonController.getPokemons(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedPokemons);
    });
  });
});
