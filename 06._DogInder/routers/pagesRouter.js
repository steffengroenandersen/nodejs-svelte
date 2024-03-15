import { Router } from "express";
import { homepagePage, matchesPage, contactPage } from "../util/readPages.js";

const router = Router();

router.get("/", (req, res) => {
  // res.sendFile(path.resolve("public/pages/homepage/homepage.html"));
  res.send(homepagePage);
});

router.get("/matches", (req, res) => {
  // res.sendFile(path.resolve("public/pages/matches/matches.html"));
  res.send(matchesPage);
});

router.get("/contact", (req, res) => {
  // res.sendFile(path.resolve("public/pages/contact/contact.html"));
  res.send(contactPage);
});

router.get("/page", (req, res) => {
  res.send("<div><h1>Hello World</h1></div>");
});

export default router;