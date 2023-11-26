
// EventEmitter bu class 
const EventEmitter = require('events');
const emitter = new EventEmitter();

// "on" function events listenner (hodisani) qo'shadi 
emitter.on('message', (arg)=>{
    console.log('Listener chaqilidi', arg);
})
// "emit" functionsiyasi hodisa ro'y berganda xabardor qiladi
emitter.emit('message',{id:1, url: 'http://....'});