const messages = [
    "It has always been you 💓",
    "You make me laugh more than anyone could 😊",
    "You are my sunshine ☀️",
    "I adore your eyes when you look at me like a Golden Retriever 🐶"
];

function showMessage(index) {
    let messageElement = document.getElementById("message");
    messageElement.textContent = messages[index];
    messageElement.classList.remove("hidden");
}
