import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/MovieController";


const router = Router()

router.get("/ping", (req:Request, res:Response) => res.send('pong')
).post("/movie", createMovie);

export default router