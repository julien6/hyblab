function showInfoCam(name){
    document.getElementById("clickHereCam").style.display = "none";
    let nice = document.getElementById("nicetxt");
    nice.style.display =  "none";
    let baudinard = document.getElementById("baudinardtxt");
    baudinard.style.display =  "none";
    let castres = document.getElementById("castrestxt");
    castres.style.display =  "none";
    let stras = document.getElementById("strasbourgtxt");
    stras.style.display =  "none";
    if(name === "nice"){
        nice.style.display = "block";
    }
    if(name === "baudi"){
        baudinard.style.display = "block";
    }
    if(name === "castres"){
        castres.style.display = "block";
    }
    if(name === "stras"){
        stras.style.display = "block";
    }
}
