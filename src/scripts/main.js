let ws = new WebSlides({
    loop: false,
    showIndex: false,
});


function goToSlide(name){
    if(name === "drone"){
        ws.goToSlide(3, true);
    }
    if(name === "camera"){
        ws.goToSlide(8, false);
    }
    if(name === "recFac"){
        ws.goToSlide(3, false); // TODO : last slide
    }

    if(name === "home"){
        ws.goToSlide(2, true);
    }
}