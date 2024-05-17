import { Router } from "express";
const router = Router();

const nicknames = [];

router.get("/api/nicknames", (req, res) => {
  res.send({ data: req.session.nickname });
});

router.post("/api/nicknames", (req, res) => {
  const nickname = req.body.nickname;
  req.session.nickname = nickname;

  res.send({ data: nickname });
});

export default router;
