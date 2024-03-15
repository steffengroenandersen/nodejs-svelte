import express from "express";
import getMatches from "./util/matches.js";

// getMatches();

const app = express();

app.use(express.static("public"));

// console.log(__dirname); // No work
//console.log(path.resolve("public/homepage/homepage.html")); // Finds the absolute path

import { homepagePage, matchesPage, contactPage } from "./util/readPages.js";

// ================= HTML =================

app.get("/", (req, res) => {
  // res.sendFile(path.resolve("public/pages/homepage/homepage.html"));
  res.send(homepagePage);
});

app.get("/matches", (req, res) => {
  // res.sendFile(path.resolve("public/pages/matches/matches.html"));
  res.send(matchesPage);
});

app.get("/contact", (req, res) => {
  // res.sendFile(path.resolve("public/pages/contact/contact.html"));
  res.send(contactPage);
});

app.get("/page", (req, res) => {
  res.send("<div><h1>Hello World</h1></div>");
});

// ================= API =================

app.get("/api/matches", async (req, res) => {
  const matches = await getMatches();
  res.send({ data: matches });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on", PORT));
