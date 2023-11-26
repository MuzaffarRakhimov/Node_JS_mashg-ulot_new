
// hodisalar bilan ishlash

const Logger = require('./app1');
const logger = new Logger();

logger.on('messageLogged', (arg)=>{
    console.log('Listener chaqilidi', arg);
})

logger.log("message");