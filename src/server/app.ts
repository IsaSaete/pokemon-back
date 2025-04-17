import express from "express";
import morgan from "morgan";
import cors from "cors";
import checkHealthStatus from "./middlewares/checkHealthStatus/checkHealthStatus";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFount/handleEndpointNotFound";
import pokemonRouter from "../router/pokemonRouter";

const app = express();

app.use(morgan("dev"));

app.use(morgan("dev"));

const allowedOrigins = [
  "https://*pokemonisa.netlify.app",
  "https://pokemonisa.netlify.app",
];

app.use(
  cors({
    origin: allowedOrigins,
  }),
);

app.get("/", checkHealthStatus);

app.use("/pokemon", pokemonRouter);

app.use(handleEndpointNotFound);

export default app;
