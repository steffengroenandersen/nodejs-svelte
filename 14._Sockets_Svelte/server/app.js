import "dotenv/config";
import express from "express";
const app = express();

app.use(express.json());

import session from "express-session";

import cors from "cors";
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
});

app.use(sessionMiddleware);

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["*"],
  },
});

io.on("connection", (socket) => {
  console.log("Socket connected with ID: " + socket.id);

  socket.on("client-sends-color", (data) => {
    console.log("Client sends data: " + data.data);

    io.emit("server-sends-color", data);
  });
});

import nicknamesRouter from "./routers/nicknamesRouter.js";
app.use(nicknamesRouter);

const PORT = process.env.PORT ?? 8080;
server.listen(PORT, () => console.log("Server is running on PORT", PORT));
