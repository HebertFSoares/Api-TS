import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/MovieController";
import { validate } from "./middleware/handleValidation";

const router = Router()

router.get("/ping", (req:Request, res:Response) => res.send('pong')
).post("/movie", validate, createMovie);

export default router