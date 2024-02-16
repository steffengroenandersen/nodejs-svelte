const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/homepage.html");
});

app.get("/publicsquare", (req, res) => {
  res.sendFile(__dirname + "/public/publicSquare.html");
});

const PORT = 8080;
app.listen(8080, () => console.log("Server is running on port", PORT));
