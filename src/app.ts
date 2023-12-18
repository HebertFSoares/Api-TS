import express from "express"
import config from "config"
import router from "./routes"
const app = express()

// Json
app.use(express.json())

app.use("/api/", router)

// app port
const port = config.get<number>("port")

app.listen(port, async () =>{
  console.log(`Aplicação na porta ${port}`)
})