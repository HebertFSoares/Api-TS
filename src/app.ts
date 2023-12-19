import express from "express"
import config from "config"
import db from "../config/db"
import Logger from "../config/logger"

const app = express()

app.use(express.json())

// app port
const port = config.get<number>("port")

app.listen(port, async () =>{
  await db();

  Logger.info(`Aplicação na porta ${port}`)
})