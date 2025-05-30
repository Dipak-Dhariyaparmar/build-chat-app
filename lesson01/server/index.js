const ws = require("ws");
const server = new ws.Server({ port: "3000" });

server.on("connection", (socket) => {
  socket.on("message", (message) => {
    const b = Buffer.from(message);
    console.log(b.toString());
    socket.send(`${message}`);
  });
});

// this component is used to create a WebSocket server
// that listens for incoming connections on port 3000
// it uses the ws library to create the server
