import { Request, Response } from "express";
import { PokemonControllerStructure } from "./types";
import { PokemonData, PokemonStructure } from "../types";
import Pokemon from "../Pokemon";

class PokemonController implements PokemonControllerStructure {
  constructor(private pokemons: PokemonStructure[]) {}

  public getPokemons = (_req: Request, res: Response): void => {
    res.status(200).json({ pokemons: this.pokemons });
  };

  public addPokemon = (req: Request, res: Response): void => {
    const pokemon = req.body as PokemonData;

    const newPokemon: PokemonStructure = new Pokemon(
      pokemon.name,
      pokemon.pokedexPosition,
      pokemon.imageUrl,
    );

    const isPokemonRegistered = this.pokemons.some(
      (pokemon) => pokemon.name === newPokemon.name,
    );

    if (isPokemonRegistered) {
      res.status(409).json({ error: "This pokemon already exists" });

      return;
    }

    this.pokemons.push(newPokemon);

    res.status(201).json(newPokemon);
  };

  public deletePokemon = (req: Request, res: Response): void => {
    const pokemonId = req.params.pokemonId;

    const pokemonFound = this.pokemons.find(
      (pokemon) => pokemon.id === pokemonId,
    );

    if (!pokemonFound) {
      res.status(404).json({ error: "Pokemon not found" });

      return;
    }

    const pokemonIndex = this.pokemons.findIndex(
      (pokemon) => pokemon.id === pokemonId,
    );

    this.pokemons.splice(pokemonIndex, 1);

    res.status(200).json(pokemonFound);
  };
}

export default PokemonController;
