import mongoose, { mongo } from "mongoose";
import config from "config";
import Logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri")

  try {
    await mongoose.connect(dbUri)
    Logger.info("Conectou ao DB")
  } catch (e) {
    Logger.error("Não fez conexão")
    Logger.error(`Error ${e}`)
    process.exit(1)
  }
}

export default connect