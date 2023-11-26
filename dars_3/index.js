
// nodeJS ni "path" moduleni import qilish
const path= require('path');
// path moduleni "parse()" functionni "fayl manzillari bilan ishlash uchun ishlatiladi"
//const pathObj = path.parse(__filename);

// function qaytaradi

//console.log(pathObj);
// {
//     root: 'D:\\',
//     dir: 'D:\\Node_Papka\\node_d_1\\mashq_3',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>> path.basename >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// index.js failni ko'satadi

// const pathObj = path.basename(__filename);

// mashq_3. papkani ko'satadi
// const pathObj = path.basename(__dirname);
// console.log(pathObj);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..

// index.js gacha bo'lgan yo'lni ko'satadi

//const pathObj = path.join(__filename)

// mashq_3. gacha bo'lgan yo'lni ko'satadi
// const pathObj = path.join(__dirname)

// console.log(pathObj);

let pathObj = path.normalize(__dirname)