import { Router } from "express";

const router = Router();

/* 
  Assignment: Create a greeter middleware
  that says hello before passing them on to the next route
*/

function greeter(req, res, next){
  console.log("greeter()");
  console.log("Hello");
  next();
}


/* 
  Middleware er ting der kører inden vores route-handling.
  Nedenfor er eksempel på en middleware metode.
*/

function doorman(req, res, next) {
  console.log("doorman()");
  if (req.query.secret?.toLowerCase() === "open sesame") {
    console.log("You are allowed to enter");
    next();
  } else {
    res.status(401).send({ message: "You are not allowed to get into the room" });
  }
}

/* SE EKSEMPEL PÅ MIDDLEWARE I BRUG LIGE HER */
router.get("/room", greeter, doorman, (req, res, next) => {
  console.log("You are in room 1");
  res.send({ data: "You are in room 1" });
  //next(); -> Go to next router
});

// Inline middleware
router.get(
  "/room",
  (req, res, next) => {
    console.log("On to the next room...");
    next();
  },
  (req, res, next) => {
    console.log("You are in room 1");
    res.send({ data: "You are in room 1" });
    //next(); -> Go to next router
  }
);

router.get("/room", (req, res) => {
  console.log("You are in room 2");
  res.send({ data: "You are in room 2" });
});

/*

  Below is 404 Page Not Found examples

*/

// router.get("*", greeter ,(req, res) => {
//   console.log("You are in wildcard");
//   res.send({ data: "Wildcard" });
//   // Send 404
// });

// router.all("*", greeter ,(req, res) => {
//   res.status(404).send({ message: "Not found" });
// });


export default router;