import { Router } from "express";
const router = Router();

router.get("/user", (req, res) => {
  res.send({ data: "User Message Received." });
});

export default router;
