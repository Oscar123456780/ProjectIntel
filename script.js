const send = document.getElementById("submit");
const clear = document.getElementById("clear");
const chat = document.getElementById("chat");

async function sendRequest() {
  const query = document.getElementById("input").value;
  const paragraph = document.createElement("p");

  let response = await fetch("https://api.pawan.krd/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer pk-aUKWtOcIbCATnJMfPHQyaLWsQZPhdohFxdxrWpyKJYTzWnrD",
      "Content-Type": "application/json",
    },
    // body: '{\n    "model": "gpt-3.5-turbo",\n    "max_tokens": 100,\n    "messages": [\n        {\n            "role": "system",\n            "content": "You are an helpful assistant."\n        },\n        {\n            "role": "user",\n            "content": "Who are you?"\n        }\n    ]\n}',
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      max_tokens: 100,
      messages: [
        {
          role: "system",
          content: "You are an helpful assistant.",
        },
        {
          role: "user",
          content: query,
        },
      ],
    }),
  });
  const textNode = document.createTextNode(response);

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
