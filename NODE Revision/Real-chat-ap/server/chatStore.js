const redis = require('redis');
const client = redis.createClient();
client.connect(); // Redis v4+ async connect

let messages = []; // in-memory storage

async function addMessage(msg) {
    messages.push(msg);
    await client.rPush('chatHistory', JSON.stringify(msg));
}

async function getRecentMessages(limit = 50) {
    const redisMessages = await client.lRange('chatHistory', -limit, -1);
    return redisMessages.map(m => JSON.parse(m));
}

module.exports = { addMessage, getRecentMessages };
