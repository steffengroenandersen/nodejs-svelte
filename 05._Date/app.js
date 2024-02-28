const express = require("express");

const app = express();

console.log("new Date() = " + new Date());

console.log("Date.now() = " + Date.now());

const unixTime = Date.now();
const currentDate = new Date(unixTime);

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Zero based. Add 1 to get correct month
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

console.log(`Current time: ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);

app.get("/date", (req, res) => {
  res.send({ data: Date() });
});

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

app.get("/month/version1", (req, res) => {
  const monthIndex = new Date().getMonth();

  res.send({ data: months[monthIndex] });
});

app.get("/month/version2", (req, res) => {
  const monthName = new Date().toLocaleDateString("en-us", { month: "long" });

  res.send({ data: monthName });
});

app.get("/month/version3", (req, res) => {
  const monthName = Date().split(" ")[1];

  res.send({ data: monthName });
});

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get("/day", (req, res) => {
  const dayName = days[new Date().getDay()];
  res.send({ data: dayName });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on PORT", PORT));
