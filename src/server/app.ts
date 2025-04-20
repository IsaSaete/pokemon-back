import express from "express";
import morgan from "morgan";
import cors from "cors";
import checkHealthStatus from "./middlewares/checkHealthStatus/checkHealthStatus";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFount/handleEndpointNotFound";
import pokemonRouter from "../pokemon/router/pokemonRouter";

const app = express();

app.use(morgan("dev"));

const allowedOrigins = [/pokemonisa\.netlify\.app/, /^http:\/\/localhost:\d+/];

app.use(
  cors({
    origin: allowedOrigins,
  }),
);

app.use(express.json());

app.get("/", checkHealthStatus);

app.use("/pokemon", pokemonRouter);

app.use(handleEndpointNotFound);

export default app;
