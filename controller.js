const initSocket = (socket) => {
    let message = "Hello!";
    socket.emit("bot message", {message});
}

const sendMessage = (socket) => {
    let message = "This is a reply";
    socket.emit("bot message", { message});
}

module.exports = {
    sendMessage,
    initSocket
}