import { Request, Response } from "express";
import { PokemonControllerStructure } from "./types";
import { PokemonStructure } from "../pokemon/types";

class PokemonController implements PokemonControllerStructure {
  constructor(private pokemons: PokemonStructure[]) {}

  public getPokemons = (_req: Request, res: Response): void => {
    res.status(200).json({ pokemons: this.pokemons });
  };
}

export default PokemonController;
