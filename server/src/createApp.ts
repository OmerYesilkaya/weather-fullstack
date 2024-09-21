import express from "express";
import bodyParser from "body-parser";

// import testRouter from "@/router/test"

export function createApp() {
    const app = express();

    app.use(bodyParser.json());
    // app.use("/api/test", testRouter);

    return app;
}
