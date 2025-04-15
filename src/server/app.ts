import express from "express";
import morgan from "morgan";
import checkHealthStatus from "./middleware/checkHealthStatus";

const app = express();

app.use(morgan("dev"));

app.get("/", checkHealthStatus);

export default app;
