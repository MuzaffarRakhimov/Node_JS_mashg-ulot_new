// http moduli

const http = require('http');
const server = http.createServer();
server.on('connection',(socket)=>{
  console.log('yangi boglanish...');
})
server.listen(8000);
console.log(`${server.address().port} portni eshitishni boshladim ...`);

//------------------------boshqa yo'li----------------------------------------

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("asosiy sahifa");
//     res.end();
//   }
//   if (req.url === "/api/books") {
//     res.write(JSON.stringify(["dasturlash sanati", "javascript", "html"]));     
//     res.end();
//   }
// });
// server.listen(8000);
// console.log(`${server.address().port} portni eshitishni boshladim ...`);


