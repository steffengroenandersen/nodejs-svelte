const express = require("express");
const app = express();

const drinks = [
  {
    id: 1,
    name: "Mystic Mojito",
    description:
      "A refreshing blend of muddled mint leaves, freshly squeezed lime juice, white rum, and a splash of sparkling soda, served over ice. This zesty concoction is perfect for cooling down on a hot summer day.",
  },
  {
    id: 2,
    name: "Tranquil Teatime Tonic",
    description:
      "A soothing infusion of chamomile tea, honey, lemon juice, and a hint of lavender syrup, served hot or over ice. This calming elixir is ideal for unwinding after a long day and promoting relaxation.",
  },
  {
    id: 3,
    name: "Galactic Galaxy Gulp",
    description:
      "A mesmerizing blend of blue curaçao, coconut rum, pineapple juice, and a touch of grenadine, garnished with a slice of starfruit. This cosmic creation transports your taste buds to another dimension with its tropical flavors and stunning hue.",
  },
];

app.get("/api/drinks", (req, res) => {
  res.send(drinks);
});

app.get("/api/drinks/:id", (req, res) => {
  const drinkId = Number(req.params.id);

  if (!drinkId || drinkId < 0 || drinkId - 1 > drinks.length)
    res.send({ data: "You have submitted an invalid drink ID." });

  const drink = drinks[drinkId - 1];

  res.send(drink);
});

app.listen(8080);
