// files module
// const { error } = require('node:console');
const fs = require('node:fs');

//const files = fs.readdirSync('./');//syncxiron functions ishlatmaslik kerak;
//console.log(files);

//  fs.readdir('./', function(err, file){
//     // readdir function shu papkani ichidagi faellani ko'rsatadi.
//     if (err)
//     console.log(err);
//     else
//     console.log(file);
// });

// fs.readFile('../index.js','utf-8', function(err, file){
//     //readFile function shu index.js papkani ichidagi faellani ko'rsatadi
//     if (err)
//     throw err;
//     else
//     console.log(file);
// })
//____________________________________________________________________________
// yangi fail yaratish

// fs.writeFile('./app.txt','Salom nodejs',{flag:'a'},(error) => {
//     if (error){
//         console.log(error);
//     }
//     else{
//         console.log('File wratted');
//     }
// });
//_____________________________________________________________________
// fail nomini o'zgartirish


// fs.rename('./app.txt','greet.txt',(error)=>{
//     if (error) throw error;
//     console.log('Rename complete!');
// })
//___________________________________________________
// kiritilgan failni o'chirish

// fs.unlink('./greet.txt',(error)=>{
//     if (error) 
//     console.log(error);

//     console.log('delete greet .txt!');
// })





