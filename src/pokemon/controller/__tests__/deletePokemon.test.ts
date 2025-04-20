import { Request, Response } from "express";
import { paras, testPokemons } from "../../fixtures";
import PokemonController from "../PokemonController";
import Pokemon from "../../Pokemon";

describe("Given the deletePokemon function", () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as Pick<Response, "status" | "json">;

  let pokemons: Pokemon[];
  let pokemonController: PokemonController;

  beforeEach(() => {
    jest.clearAllMocks();

    pokemons = [...testPokemons];
    pokemonController = new PokemonController(pokemons);
  });

  describe("When it receives a request with 'Paras' id that is already in the Pokedex", () => {
    const req = { params: { pokemonId: paras.id } } as Pick<Request, "params">;

    test("Then it should call the received response's method status with 200", () => {
      const expectedStatus = 200;

      pokemonController.deletePokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the received respone`s method json with a Pokemon named 'Paras'", () => {
      const expectedPokemon = paras;

      pokemonController.deletePokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ name: expectedPokemon.name }),
      );
    });
  });

  describe("When it receives a request with a Togepi id and it's not in the pokedex", () => {
    const req = { params: { pokemonId: "1234" } } as Pick<Request, "params">;

    test("Then it should call the received response's method status with 404", () => {
      const expectedStatus = 404;

      pokemonController.deletePokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the received respone`s method json with a 'Pokemon not found'", () => {
      const errorMessage = { error: "Pokemon not found" };

      pokemonController.deletePokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(errorMessage);
    });
  });
});
