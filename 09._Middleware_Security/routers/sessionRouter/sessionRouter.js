import { Router } from "express";
const router = Router();

router.get("/definesecretmessage", (req, res) => {
  const secretMessage = req.query.secretMessage;

  console.log(secretMessage);
  if (secretMessage) {
    req.session.secretMessage = secretMessage;
    res.send({ message: `You defined the sceret message as ${secretMessage}` });
  } else {
    res.send(`You have not defined the query parameter as 'secretMessage'`);
  }
});

router.get("/peakSecretMessage", (req, res) => {
  res.send({ secretMessage: req.session.secretMessage });
});

export default router;
