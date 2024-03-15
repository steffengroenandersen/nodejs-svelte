// import express from "express";
// const Router = express.Router;

import { Router } from "express";

const router = Router();

router.get("/playpoint", (req, res) => {
  res.send({data: "Playground"});
});

export default router;