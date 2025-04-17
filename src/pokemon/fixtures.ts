import Pokemon from "./Pokemon";
import { PokemonData, PokemonStructure } from "./types";

export const butterfree = new Pokemon(
  "Butterfree",
  12,
  "https://butterfree.webp",
);

export const zubat = new Pokemon("Zubat", 41, "https://zubat.webp");

export const paras = new Pokemon("Paras", 46, "https://paras.webp");

export const testPokemons: PokemonStructure[] = [butterfree, zubat, paras];

export const tentacruel: PokemonData = {
  name: "Tentracruel",
  pokedexPosition: 73,
  imageUrl: "https://tentacruel.webp",
};
