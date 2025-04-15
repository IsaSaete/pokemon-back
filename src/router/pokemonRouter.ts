import { Router } from "express";
import PokemonController from "../controller/PokemonController";
import { pokemons } from "../pokemon/data/pokemons";

const pokemonRouter = Router();

const pokemonsController = new PokemonController(pokemons);

pokemonRouter.get("/", pokemonsController.getPokemons);

export default pokemonRouter;
