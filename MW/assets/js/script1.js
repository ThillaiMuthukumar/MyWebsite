function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    const chatContent = document.getElementById("chat-content");
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.innerHTML = `<p>${userInput}</p>`;
    chatContent.appendChild(userMessage);

    // Respond with a predefined message (you can extend this logic)
    const botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");
    botMessage.innerHTML = `<p>Thank you for your message: "${userInput}". I'm a simple chatbot, and I can respond with predefined messages.</p>`;
    chatContent.appendChild(botMessage);

    // Clear the user input field
    document.getElementById("user-input").value = "";

    // Scroll to the bottom of the chat
    chatContent.scrollTop = chatContent.scrollHeight;
}

