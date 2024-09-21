import "module-alias/register";
import dotenv from "dotenv";

import { createApp } from "./createApp";

dotenv.config();
const app = createApp();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
