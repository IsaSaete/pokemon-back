import { Request, Response } from "express";

export interface PokemonControllerStructure {
  getPokemons: (req: Request, res: Response) => void;
  addPokemon: (req: Request, res: Response) => void;
}
