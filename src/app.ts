import express from "express"
import config from "config"
import db from "../config/db"
import Logger from "../config/logger"
import router from "./routes"

const app = express()

// Json
app.use(express.json())

app.use("/api/", router)

// app port
const port = config.get<number>("port")

app.listen(port, async () => {
  await db();

  Logger.info(`Aplicação na porta ${port}`)
})
