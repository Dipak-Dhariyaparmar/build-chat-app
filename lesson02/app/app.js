const socket = io("ws://localhost:3500");

function sendMessage(e) {
  e.preventDefault();
  const input = document.querySelector("input");
  if (input.value) {
    socket.emit("message", input.value);
    input.value = "";
  }
  input.focus();
}

document.querySelector("form").addEventListener("submit", sendMessage);

// Listen for messages
socket.on("message", (data) => {
  const li = document.createElement("li");
  li.textContent = data;
  document.querySelector("ul").appendChild(li);
});

// this is a app.js file for a simple WebSocket client
// It connects to a WebSocket server, sends messages from an input field,
// and displays incoming messages in a list.
// The server should be running on ws://localhost:3000
