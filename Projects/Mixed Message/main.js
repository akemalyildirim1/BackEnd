const newMessageButton = document.getElementById("new-message-button");
const messageBox = document.getElementById("message-box");
const againMessageButton = document.getElementById("again-message-button");


const newMessage = () => {
    const messages = ["a","b","c","d","e","f"];
    let randIdx = Math.floor(Math.random()*messages.length);
    let message = messages[randIdx];
    messageBox.innerHTML = message;
}

const firstMessage = () => {
    newMessage();
    messageBox.style.display = "block";
    newMessageButton.style.display = "none";
    againMessageButton.style.display="block";
}

const againMessage = () => {
    newMessage();
}


newMessageButton.onclick = firstMessage;
againMessageButton.onclick = againMessage;