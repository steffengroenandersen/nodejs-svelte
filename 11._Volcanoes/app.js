import express from "express";
const app = express();

app.use(express.json());

import volcanoesRouter from "./routers/volcanoesRouter.js"
app.use(volcanoesRouter);

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("App is running on PORT", PORT));