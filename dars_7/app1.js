// hodisalar bilan ishlash

const EventEmitter = require('events');

class logger extends EventEmitter{ 
    //yangi class tuzdik extends yordamida EventEmitter avlodi bu 
     log(message) {
        console.log(message);
        this.emit('messageLogged',{id:1, url: 'http://....'});
    }
    
}

module.exports = logger;