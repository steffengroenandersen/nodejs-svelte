import { Router } from "express";
const router = Router();

const eclipseMovies = [
  { id: 1, title: "Fight Club", director: "Stefan Uhr", year: 1963 },
  { id: 2, title: "Interstellar", director: "Steffen", year: 1991 },
  { id: 3, title: "Pride and prejudice", director: "Mathias", year: 1999 },
];

router.get("/api/movies", (req, res) => {
  res.send({ data: eclipseMovies });
});

export default router;
