require("dotenv").config();
import express from "express"
import config from "config"
import router from "./routes"
import Logger from "../config/logger";
import db from "../config/db"

// Middlewares
import morganMiddleware from "./middleware/morganmiddleware";

const app = express();

// Json
app.use(express.json());

app.use(morganMiddleware);

app.use("/api/", router);

// app port
const port = config.get<number>("port");

app.listen(port, async () => {
  await db();

  Logger.info(`Aplicação na porta ${port}`);
})
