const onlineUsers = new Map(); // key: socket.id, value: username

function addUser(socketId, username) {
    onlineUsers.set(socketId, username);
}

function removeUser(socketId) {
    onlineUsers.delete(socketId);
}

function getAllUsers() {
    return Array.from(onlineUsers.values());
}

module.exports = { addUser, removeUser, getAllUsers };
