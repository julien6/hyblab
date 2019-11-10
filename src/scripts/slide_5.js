var slider = document.getElementById('myRange');
var output = document.getElementById('valueYear');
var age = document.getElementById('txt5x4');
var img = document.getElementById('img5x1');

slider.oninput = function() {
    age.innerText = 100 - slider.value;
    if (this.value >= 0 && this.value <= 21) {
        img.setAttribute('src', 'assets/images/illu_vieillissement.png');
    } else if (this.value > 21 && this.value <= 40) {
        img.setAttribute('src', 'assets/images/illu_vieillissement2.png');
    } else if (this.value > 40 && this.value <= 59) {
        img.setAttribute('src', 'assets/images/illu_vieillissement2.png');
    } else if (this.value > 59 && this.value <= 79) {
        img.setAttribute('src', 'assets/images/illu_vieillissement3.png');
    } else if (this.value > 79 && this.value <= 97) {
        img.setAttribute('src', 'assets/images/illu_vieillissement4.png');
    } else if (this.value > 97 && this.value <= 100) {
        img.setAttribute('src', 'assets/images/illu_vieillissement4.png');
    }
};
