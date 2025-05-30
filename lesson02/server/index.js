import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin:
      process.env.NODE_ENV === "production"
        ? false
        : ["http://localhost:5500", "http://127.0.0.1:5500"],
  },
});

io.on("connection", (socket) => {
  console.log(`User ${socket.id} connected`);

  socket.on("message", (data) => {
    console.log(data);
    io.emit("message", `${socket.id.substring(0, 5)}: ${data}`);
  });
});

httpServer.listen(3500, () => console.log("listening on port 3500"));

// this component is used to create a Socket.IO server
// that listens for incoming connections on port 3500
// it uses the socket.io library to create the server
// it handles incoming messages from clients and broadcasts them to all connected clients
// it also logs the messages to the console
