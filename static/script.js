document.getElementById("send-button").onclick = function() {
    const userInput = document.getElementById("user-input").value;
    if (userInput) {
        addMessage("Tú: " + userInput);
        document.getElementById("user-input").value = '';

        fetch('/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({ message: userInput })
        })
        .then(response => response.json())
        .then(data => {
            addMessage("Bot: " + data.response);
        });
    }
};

function addMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom
}
