import express from "express";
const app = express();

app.use(express.static("public"));

import http from "http";
import { Server } from "socket.io";

const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A socket connected with ID: " + socket.id);

  socket.on("client-sends-color", (data) => {
    console.log("Recieved from client " + socket.id + " " + data.data);

    // Sends only to the socket itself
    // socket.emit("server-sends-color", data);

    // Sends only to others than itself
    // socket.broadcast.emit("server-sends-color", data);

    // Sends to itself and others in the io namespace.
    io.emit("server-sends-color", data);



  });

  socket.on("disconnect", () => {
    console.log("A socket disconnected with ID: " + socket.id);
  });
});

const PORT = process.env.PORT ?? 8080;
server.listen(PORT, () => console.log("Server is running on", PORT));
