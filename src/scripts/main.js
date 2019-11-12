let ws = new WebSlides({
    loop: false,
    showIndex: false,
});


function goToSlide(name){
    if(name === "drone"){
        ws.goToSlide(2, true);
    }
    if(name === "camera"){
        ws.goToSlide(3, false);
    }
    if(name === "recFac"){
        ws.goToSlide(3, false);
    }

    if(name === "home"){
        ws.goToSlide(1, true);
    }
}