const trukk = require('./myModules/alapmuveletek');
const hiper = require('./myModules/szuperhiberModul.js')
const irsz = require('./myModules/iranyitoszam.js')

console.log( trukk.valami( 5, 1 ) );

console.log( trukk.honlapom );

console.log( trukk.teddEzt(5, 3) );

console.log( hiper.valami( 6 , 8) );

console.log( hiper.pl);

console.log( irsz.irszTeszt(4400));
console.log( irsz.irszTeszt(1117));
console.log( irsz.irszTeszt(1532));