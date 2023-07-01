const send = document.getElementById("submit");
const clear = document.getElementById("clear");
const chat = document.getElementById("chat");

function sendRequest() {
  const query = document.getElementById("input").value;
  const paragraph = document.createElement("p");
  const textNode = document.createTextNode(query);
  paragraph.appendChild(textNode);
  chat.appendChild(paragraph);
  console.log(query);
  //clear input field
  document.getElementById("input").value = "";
}

//clear chat window
function clearRequest() {
  window.location.reload();
}

// Attach event listeners
send.addEventListener("click", sendRequest);
clear.addEventListener("click", clearRequest);
