import { Router } from "express";

const authRouter = Router();

authRouter.post("/", () => {
    console.log("test");
});

export { authRouter };
