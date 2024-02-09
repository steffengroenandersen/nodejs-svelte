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

let balance = 100;

app.get("/wallet/:withdrawalAmount", (req, res) => {
  const withdrawalAmount = Number(req.params.withdrawalAmount);

  if (!withdrawalAmount) res.send({ data: "You have submitted an incorrect number" });

  if (balance - withdrawalAmount < 0) {
    res.send({ data: "Sorry, not enought funds" });
  } else {
    balance -= withdrawalAmount;
    res.send({ data: balance });
  }
});

/*
  Task: Create a route called fillUpWallet that allows a client
  to fill up the wallet with a specified amount.
*/

app.post("/wallet/:fillUpAmount", (req, res) => {
  console.log("wallet/refill/:fillUpAmount");
  const fillUpAmount = Number(req.params.fillUpAmount);

  if (!fillUpAmount) res.send({ data: "You have submitted an incorrect number" });

  if (fillUpAmount < 0) res.send({ data: "You have submitted an incorrect number" });

  balance += fillUpAmount;
  res.send({ data: balance });
});

app.get("/page", (req, res) => {
  res.send("<h1>Hello World</h1>"); // Express knows when to send JSON, and HTML page
});

// http: 80
// https: 443
// http dev: 8080
// https dev: 9090
app.listen(8080);
