const trukk = require('./myModules/alapmuveletek');
const hiper = require('./myModules/szuperhiberModul.js')
const irsz = require('./myModules/iranyitoszam.js')
const szoveg = require('./myModules/szovegManipulator.js')

console.log( trukk.valami( 5, 1 ) );

console.log( trukk.honlapom );

console.log( trukk.teddEzt(5, 3) );

console.log( hiper.valami( 6 , 8) );

console.log( hiper.pl);

irsz.irszTeszt(4400);
irsz.irszTeszt(1117);
irsz.irszTeszt(1532);

console.log( szoveg.szamlal("tekertette", "e"));
console.log( szoveg.szamlal("tekertette", "t"));
console.log( szoveg.valtogat("tekereg", "tejesember"));
console.log( szoveg.monogram("Mátyás Martina"));
console.log( szoveg.monogram("Dandóczi Máté Attila"));