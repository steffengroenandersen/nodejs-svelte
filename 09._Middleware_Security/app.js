import express from "express";

const app = express();

/*
  IP logging Below is a realworld use case of middleware
*/
// function ipLogger(req, res, next){
//   console.log(req.ip);
//   next();
// }
// app.use(ipLogger);

import { rateLimit } from "express-rate-limit";

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

import middlewareRouter from "./routers/middlewareRouter/middlewareRouter.js";
app.use(middlewareRouter);

import authRouter from "./routers/authRouter/authRouter.js";
app.use(authRouter);

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server is running on", PORT));
