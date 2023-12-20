import { Router, Request, Response } from "express";
import { FindMovieById, createMovie, getAllMovies } from "./controllers/MovieController";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/MovieValidation";

const router = Router()

router.get("/ping", (req:Request, res:Response) => res.send('pong')
).post("/movie", movieCreateValidation, validate, createMovie)
  .get("/movie/:id", FindMovieById)
  .get("/movie", getAllMovies);

export default router