import express from "express";
// import getMatches from "./util/matches.js";

// getMatches();

const app = express();

app.use(express.static("public"));

// console.log(__dirname); // No work
//console.log(path.resolve("public/homepage/homepage.html")); // Finds the absolute path

import playRouter from "./routers/playRouter.js";
import matchesRouter from "./routers/matchesRouter.js";
import pagesRouter from "./routers/pagesRouter.js";

app.use(playRouter);
app.use(matchesRouter);
app.use(pagesRouter);



// ================= API =================

// app.get("/api/matches", async (req, res) => {
//   const matches = await getMatches();
//   res.send({ data: matches });
// });

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on", PORT));
