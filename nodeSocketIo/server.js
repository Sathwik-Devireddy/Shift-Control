const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
app.use(express.static("public"));
const users = new Set();
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("new-user", (userName) => {
    console.log("New user:", userName);

    users.add(userName);
    socket.userName = userName;
    io.emit("userJoined", userName);
    io.emit("usersList", Array.from(users));
  });
  socket.on("chatMessage", (message) => {
    //broadcast the received msg
    io.emit("chatMessage", message);
  });
  //handle user disconnection
  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);

    if (socket.userName) {
      users.delete(socket.userName);
      io.emit("userLeft", socket.userName);
      io.emit("usersList", Array.from(users));
    }
  });
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
