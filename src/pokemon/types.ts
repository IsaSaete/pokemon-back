export interface PokemonStructure {
  id: string;
  name: string;
  pokedexPosition: number;
  imageUrl: string;
  isCaptured: boolean;
}

export type PokemonData = Omit<PokemonStructure, "id" | "isCaptured">;
