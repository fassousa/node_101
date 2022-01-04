// Create custom event emitter

const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () =>  {
    console.log('tasty meal')
})

// Call event twice
eventEmitter.emit('lunch');
eventEmitter.emit('lunch');