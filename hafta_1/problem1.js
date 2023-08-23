const readlineSync = require('readline-sync');
let yil = 2023;
let kullaniciYasi = readlineSync.question(" yaşınızı girin ");

let sonuc = yil - parseInt(kullaniciYasi);

console.log("yaşınız " + sonuc);
