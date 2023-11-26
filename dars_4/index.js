// OS functions///////////////////////////////////////////////////////////

const os = require('os');
// const oss=os.totalmem()
// const oss2=os.freemem(); // band xotira miqdorini aniqlaydi.
const oss2=os.uptime(); // bo'sh xotira miqdorini aniqlaydi.
const oss=os.userInfo();// komputerni userini aniqlaydi.
// const oss3=os 
console.log(oss.username);
console.log(oss2);
// console.log (oss3)