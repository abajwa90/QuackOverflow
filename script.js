function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        addMessage("You", userInput);
        document.getElementById("user-input").value = "";
        setTimeout(function() {
            addMessage("Virtual Duck", getRandomDuckResponse());
        }, 1000); // Simulating the duck's response after 1 second
    }
}

function addMessage(name, message) {
    var chatBox = document.getElementById("chat-box");
    var newMessage = document.createElement("p");
    newMessage.innerHTML = "<span class='user-name'>" + name + ":</span> " + message; // Wrap name in span with class
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
}

function getRandomDuckResponse() {
    var responses = [
        "Quack!",
        "Quack! Quack!",
        "Quack, quack, quack!",
        "QUAAAAAACK!!!",
        "Quack quack?",
        "Quack....",
        "Quack quack."
    ];
    var randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

setTimeout(() => {
    const speechBubble = document.getElementById('speechBubble');
    speechBubble.style.opacity = '1';
    speechBubble.style.transform = 'translateY(0)';
}, 1000); // Delay in milliseconds
