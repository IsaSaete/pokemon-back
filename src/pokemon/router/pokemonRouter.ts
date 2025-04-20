import { Router } from "express";
import PokemonController from "../controller/PokemonController";
import { pokemons } from "../data/pokemons";

const pokemonRouter = Router();

const pokemonsController = new PokemonController(pokemons);

pokemonRouter.get("/", pokemonsController.getPokemons);

pokemonRouter.post("/", pokemonsController.addPokemon);

export default pokemonRouter;
