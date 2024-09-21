import express from "express";
import bodyParser from "body-parser";

import { weatherRouter } from "./router/weather";
import { authRouter } from "./router/auth";

export function createApp() {
    const app = express();

    app.use(bodyParser.json());
    app.use("/api/weather", weatherRouter);
    app.use("/api/auth", authRouter);

    return app;
}
