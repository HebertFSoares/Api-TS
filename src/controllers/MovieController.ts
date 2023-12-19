import { Request, Response } from "express";
import { MovieModel } from "../models/Movies";
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response){
  try {
    const data = req.body
    const movie = await MovieModel.create(data)
    return res.status(201).json(movie)
  } catch (e: any) {
    Logger.error(`Error no sistema: ${e.message}`)
  }
  return res.status(200).send("Deu certo")
}