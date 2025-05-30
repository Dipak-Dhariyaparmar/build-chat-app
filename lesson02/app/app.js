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

// this component is used to send messages to the server
// and display messages received from the server
// it uses the Socket.IO library to connect to the server
// and listen for messages
// it handles the sending of messages when the form is submitted
// it also listens for messages from the server and appends them to the list
