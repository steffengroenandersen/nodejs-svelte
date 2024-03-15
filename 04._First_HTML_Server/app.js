const express = require("express");
const app = express();

app.use(express.static("public/homepage"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/homepage.html");
});

app.get("/publicsquare", (req, res) => {
  res.sendFile(__dirname + "/public/publicSquare.html");
});

app.get("/treasuretrove", (req, res) => {
  res.send({ data: "You found it" });
});

// REQUEST PARAMETER
app.get("/secretpassphrase", (req, res) => {
  const secret = req.query.passphrase;
  console.log(secret);

  if (secret !== "bob") {
    res.status(400).send({ data: "Wrong passphrase!" });
  } else {
    return res.redirect("/treasuretrove");
  }
});

app.get("/proxy", (req, res) => {
  /* proxy for google */
  fetch("https://www.google.com")
    .then((response) => response.text())
    .then((result) => res.send(result));
});

const PORT = 8080;
app.listen(8080, () => console.log("Server is running on port", PORT));
