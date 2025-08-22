const { addUser, removeUser, getAllUsers } = require('./users');
const { addMessage, getRecentMessages } = require('./chatStore');

module.exports = (io, socket) => {
    // User joins
    socket.on('register', async (username) => {
        addUser(socket.id, username);
        io.emit('onlineUsers', getAllUsers());

        // Send recent chat history
        const recentMessages = await getRecentMessages();
        socket.emit('chatHistory', recentMessages);

        // Broadcast login
        io.emit('message', { user: 'System', text: `${username} joined the chat.` });
    });

    // User sends a message
    socket.on('sendMessage', async (msg) => {
        const username = getAllUsers().find(u => u === msg.user);
        if (!username) return; // Only registered users can send

        const message = { user: msg.user, text: msg.text, time: new Date() };
        await addMessage(message);
        io.emit('message', message);
    });

    // Admin message
    socket.on('adminMessage', async (text) => {
        const message = { user: 'Admin', text, time: new Date() };
        await addMessage(message);
        io.emit('message', message);
    });

    // Disconnect
    socket.on('disconnect', () => {
        const username = getAllUsers().find(u => u === socket.id);
        removeUser(socket.id);
        io.emit('onlineUsers', getAllUsers());
        io.emit('message', { user: 'System', text: `${username} left the chat.` });
    });
};
