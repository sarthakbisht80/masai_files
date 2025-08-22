const EventEmitter = require('events');
const eventHandlers = require('./events/eventHandlers');

// Create event emitter instance
const eventEmitter = new EventEmitter();

// Register event listeners
eventEmitter.on('userLoggedIn', (username) => {
  eventHandlers.logLogin(username);
  eventHandlers.sendNotification(username);
  eventEmitter.emit('dataSync', username);
});

eventEmitter.on('messageReceived', (from, message) => {
  eventHandlers.logMessageReceived(from, message);
});

eventEmitter.on('dataSync', (username) => {
  eventHandlers.syncData(username);
  setTimeout(() => {
    eventEmitter.emit('dataSynced', username);
  }, 2000); // simulate async operation
});

eventEmitter.on('dataSynced', (username) => {
  eventHandlers.dataSynced(username);
});

// Simulate events
function simulateEvents() {
  setTimeout(() => {
    eventEmitter.emit('userLoggedIn', 'John');
  }, 1000);

  setTimeout(() => {
    eventEmitter.emit('messageReceived', 'Alice', 'Hello John!');
  }, 3000);

  setTimeout(() => {
    eventEmitter.emit('userLoggedIn', 'Mary');
  }, 5000);
}

// Start simulation
simulateEvents();
