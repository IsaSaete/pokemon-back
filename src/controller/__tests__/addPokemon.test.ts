import { Request, Response } from "express";
import { tentacruel, testPokemons } from "../../pokemon/fixtures";
import PokemonController from "../PokemonController";
import Pokemon from "../../pokemon/Pokemon";
import { PokemonData } from "../../pokemon/types";

describe("Given a addPokemon funciton", () => {
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
  describe("When it receives a request with 'Tentacruel' data", () => {
    const req = { body: tentacruel } as Pick<Request, "body">;

    test("Then it should call the received reponse's method status with 201", () => {
      const expectedStatus = 201;

      pokemonController.addPokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the received respone`s method json with a Pokemon named 'Tentacruel'", () => {
      const expectedPokemon = tentacruel;

      pokemonController.addPokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ name: expectedPokemon.name }),
      );
    });
  });

  describe("When it receives a request with 'Buttterfree data and this Pokemons already exists", () => {
    const buterfreeData: PokemonData = {
      name: "Butterfree",
      pokedexPosition: 12,
      imageUrl: "https://butterfree.webp",
    };

    const req = { body: buterfreeData } as Pick<Request, "body">;

    test("Then it should call the received response's method status with 409", () => {
      pokemonController.addPokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(409);
    });

    test("Then it should call the received resnpose's method json with a error message: 'This pokemon already exists'", () => {
      const errorMessage = { error: "This pokemon already exists" };

      pokemonController.addPokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(errorMessage);
    });
  });
});
