import express from "express";
import morgan from "morgan";
import checkHealthStatus from "./middlewares/checkHealthStatus/checkHealthStatus";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFount/handleEndPointNotFound";

const app = express();

app.use(morgan("dev"));

app.get("/", checkHealthStatus);

app.use(handleEndpointNotFound);

export default app;
