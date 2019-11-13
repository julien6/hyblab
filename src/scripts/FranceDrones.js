function showInfo(name){
    let cannes = document.getElementById("cannestxt");
    cannes.style.display =  "none";
    let essone = document.getElementById("essonetxt");
    essone.style.display =  "none";
    let istres = document.getElementById("istrestxt");
    istres.style.display =  "none";
    let charentes = document.getElementById("charentestxt");
    charentes.style.display =  "none";
    let evreux = document.getElementById("evreuxtxt");
    evreux.style.display =  "none";
    let calais = document.getElementById("pasdecalaistxt");
    calais.style.display =  "none";
    if(name === "cannes"){
        cannes.style.display = "block";
    }
    if(name === "istres"){
        istres.style.display = "block";
    }
    if(name === "evreux"){
        evreux.style.display = "block";
    }
    if(name === "charente"){
        charentes.style.display = "block";
    }
    if(name === "essone"){
        essone.style.display = "block";
    }
    if(name === "pascalais"){
        calais.style.display = "block";
    }
}
