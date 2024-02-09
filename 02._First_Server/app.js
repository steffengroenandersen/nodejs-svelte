const express = require("express");
const app = express();

// const app = require("express") ();

// route
// // endpoint
// // // callback function
// // // request, response

app.get("/", (req, res) => {
  res.send({ data: "welcome" });
});

// Route
app.get("/secondRoute", (req, res) => {
  res.send({ data: [1, 2, 3, 4] }); // Javascript object now, gets converted to JSON later
});

// Path variables
app.get("/thirdRoute/:someKey/:someSecondKey", (req, res) => {
  const firstValue = req.params.someKey;
  const secondValue = req.params.someSecondKey;
  console.log(firstValue);
  console.log(secondValue);
  res.send({ data: "You have reached the third route" });
});

app.get("/page", (req, res) => {
  res.send("<h1>Hello World</h1>"); // Express knows when to send JSON, and HTML page
});

// http: 80
// https: 443
// http dev: 8080
// https dev: 9090
app.listen(8080);
