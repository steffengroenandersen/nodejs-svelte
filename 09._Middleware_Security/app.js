import "dotenv/config"
// import dotenv from "dotenv";
// dotenv.config();
import express from "express";


const app = express();

app.use(express.static("public"));

app.use(express.json());

/*
  IP logging Below is a realworld use case of middleware
*/
// function ipLogger(req, res, next){
//   console.log(req.ip);
//   next();
// }
// app.use(ipLogger);

import { rateLimit } from "express-rate-limit";

import session from "express-session";
app.use(
  session({
    // TODO: Secret must be changed!
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 50, // Limit each IP to 50 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
});

// Apply the rate limiting middleware to all requests.
app.use(limiter);

const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 3,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

app.use("/auth", authRateLimiter);

import helmet from "helmet";
app.use(helmet());


import middlewareRouter from "./routers/middlewareRouter/middlewareRouter.js";
app.use(middlewareRouter);

import authRouter from "./routers/authRouter/authRouter.js";
app.use(authRouter);

import sessionRouter from "./routers/sessionRouter/sessionRouter.js";
app.use(sessionRouter);

import xssRouter from "./routers/xssRouter/xssRouter.js";
app.use(xssRouter);


// console.log(process.env.SESSION_KEY);

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server is running on", PORT));

/*
  Bcrypt tilføjer sikkerhed, men det er ikke 100% sikkerhed.
  Man skal aldrig leake passwords til frontend! (heller ikke encrypted).
  Den skalerer fornemt.

*/
