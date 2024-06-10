import express from "express";
const app = express();

//
app.use(express.json());

app.get("/", (req, res) => {
  const query = req.query;

  if (query) {
    console.log(query);
  }

  res.send({ data: "Home" });
});

import userRouter from "./userRouter.js";
app.use(userRouter);

app.get("/:username", (req, res) => {
  const params = req.params;
  console.log(params);

  if (params) {
    console.log("Username: " + params.username);
  }

  res.send({ data: "Message received." });
});

app.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.send({ data: "Message received." });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on", PORT));
