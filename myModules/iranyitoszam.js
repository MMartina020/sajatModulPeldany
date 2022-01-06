module.exports.irszTeszt = function(irsz){
    if( irsz >= 2000){
        console.log("Az adott irányítószám nem Budapesthez tartozik");
        return;
    }
    const kerulet = irsz.substr(1,3);
    if( kerulet < 24){
        console.log('A budapesti irányítószám a ${kerulet}-ben található');
    }else{
        console.log('Bár budapesti, de nem kerülethez tartozó irányítószám');
    }
    return;
}