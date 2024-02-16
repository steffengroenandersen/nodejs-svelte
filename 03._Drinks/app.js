const express = require("express");

const app = express();

app.use(express.json());

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
  res.send({ data: drinks });
});

app.get("/api/drinks/:id", (req, res) => {
  const providedDrinkId = Number(req.params.id);
  const foundDrink = drinks.find((drink) => drink.id === providedDrinkId);

  if (!foundDrink) {
    res.status(404).send({ data: "Drink not found" });
  } else {
    res.send({ data: foundDrink });
  }
});

app.post("/api/drinks/:id", (req, res) => {
  console.log(req.body);

  const request = req.body;

  const newDrink = {
    id: drinks.length + 1,
    name: request.name,
    description: request.description,
  };

  if (!newDrink.name || typeof newDrink.name !== "string" || newDrink.name.trim() === "")
    return res.status(400).send({ data: "Invalid input." });

  if (!newDrink.description || typeof newDrink.description !== "string" || newDrink.description.trim() === "")
    return res.status(400).send({ data: "Invalid input." });

  drinks.push(newDrink);

  return res.send({ data: newDrink });
});

app.listen(8080, (error) => {
  if (error) {
    console.log("Error starting the server");
    return;
  }

  console.log("Server is running on port", 8080);
});
