const API = "https://prov.onrender.com/api/messages"

function loadMessages() {

fetch(API)
.then(res => res.json())
.then(data => {

const list = document.getElementById("messages")
list.innerHTML = ""

data.forEach(msg => {
const li = document.createElement("li")
li.textContent = msg.text
list.appendChild(li)
})

})

}

function sendMessage() {

const text = document.getElementById("text").value

fetch(API, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ text: text })
})
.then(() => loadMessages())

}

loadMessages()