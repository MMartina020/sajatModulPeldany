module.exports.szamlal = function(szoveg, karakter){
    var darab= 0;
    for( i = 0, i<szoveg.length; i++;){
        if(szoveg[i] === karakter[0])
        darab++;
    }
    return darab;
}
module.exports.valtogat = function(egyik, masik){
    const fuzott = egyik+masik;
    var result = "";
    for(var i = 0; i < fuzott.length; i++){
        if( i % 2 === 0 ){
        result += fuzott.toLowerCase()[i];
    }else{
        result += fuzott.toUpperCase()[i];
    }
}
    return result;
}

module.exports.monogram = function(nev){
    const toredek = nev.split(" ");
    let result = "";
    for( var i=0; i<toredek.length; i++){
        result += toredek[1][0];
    }
    return result;
}