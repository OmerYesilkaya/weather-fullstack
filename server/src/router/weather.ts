import { Router } from "express";

const weatherRouter = Router();

weatherRouter.get("/");

export { weatherRouter };
