import express from "express"
import config from "config"
import db from "../config/db"

const app = express()

app.use(express.json())

// app port
const port = config.get<number>("port")

app.listen(port, async () =>{
  await db();

  console.log(`Aplicação na porta ${port}`)
})