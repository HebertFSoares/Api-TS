import mongoose, { mongo } from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("dbUri")

  try {
    await mongoose.connect(dbUri)
    console.log("Conectou ao DB")
  } catch (e) {
    console.log("Não fez conexão")
    console.log(`Error ${e}`)
  }
}

export default connect