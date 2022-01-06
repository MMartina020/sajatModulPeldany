function trukk(a, b){
    return a * 2 + b;
}
const honlapom = "https://nyirszik.eu";

module.exports.valami = trukk;
//valami néven a trükk elemem exportálása történik meg
module.exports.honlapom = honlapom;

module.exports.teddEzt = function(a, b){
    return b - a + 1;
}