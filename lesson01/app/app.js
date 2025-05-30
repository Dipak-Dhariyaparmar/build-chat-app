const socket = new WebSocket("ws://localhost:3000");

function sendMessage(e) {
  e.preventDefault();
  const input = document.querySelector("input");
  if (input.value) {
    socket.send(input.value);
    input.value = "";
  }
  input.focus();
}

document.querySelector("form").addEventListener("submit", sendMessage);

socket.addEventListener("message", ({ data }) => {
  const li = document.createElement("li");
  li.textContent = data;
  document.querySelector("ul").appendChild(li);
});

// this componnent is used to send messages to the server
// and display messages received from the server
// it uses the WebSocket API to connect to the server
// and listen for messages
