<<<<<<< HEAD
function goToMenu(){
	window.location.href = 'http://127.0.0.1:8383/#slide=1';
}

function GoSecondPage(){
    window.location.href= 'http://127.0.0.1:8383/#slide=2';
}

function reponseQ1(id) {
	if (id == 1) {
		document.getElementsByClassName("txt3xchoix1")[0].style.backgroundColor = '#DD2D4A';
		document.getElementsByClassName("txt3xchoix1")[0].style.color = 'white';
		document.getElementsByClassName("txt3xchoix1")[0].style.borderColor = '#DD2D4A';
		document.getElementsByClassName("txt3xchoix3")[0].style.backgroundColor = '#aec900';
		document.getElementsByClassName("txt3xchoix3")[0].style.color = 'white';
		document.getElementsByClassName("txt3xchoix3")[0].style.borderColor = '#aec900';
	} else if (id == 2) {
		document.getElementsByClassName("txt3xchoix2")[0].style.backgroundColor = '#DD2D4A';
		document.getElementsByClassName("txt3xchoix2")[0].style.color = 'white';
		document.getElementsByClassName("txt3xchoix2")[0].style.borderColor = '#DD2D4A';
		document.getElementsByClassName("txt3xchoix3")[0].style.backgroundColor = '#aec900';
		document.getElementsByClassName("txt3xchoix3")[0].style.color = 'white';
		document.getElementsByClassName("txt3xchoix3")[0].style.borderColor = '#aec900';
	} else if (id == 3) {
		document.getElementsByClassName("txt3xchoix3")[0].style.backgroundColor = '#aec900';
		document.getElementsByClassName("txt3xchoix3")[0].style.color = 'white';
		document.getElementsByClassName("txt3xchoix3")[0].style.borderColor = '#aec900';
	} else if (id == 4) {
		document.getElementsByClassName("txt3xchoix4")[0].style.backgroundColor = '#DD2D4A';
		document.getElementsByClassName("txt3xchoix4")[0].style.color = 'white';
		document.getElementsByClassName("txt3xchoix4")[0].style.borderColor = '#DD2D4A';
		document.getElementsByClassName("txt3xchoix3")[0].style.backgroundColor = '#aec900';
		document.getElementsByClassName("txt3xchoix3")[0].style.color = 'white';
		document.getElementsByClassName("txt3xchoix3")[0].style.borderColor = '#aec900';
	}

	document.getElementsByClassName("suivant3")[0].style.display = 'block';
}

function suivantQuiz() {
	document.getElementsByClassName("txt3xquestion")[0].style.display = 'none';
	document.getElementsByClassName("txt3xchoix1")[0].style.display = 'none';
	document.getElementsByClassName("txt3xchoix2")[0].style.display = 'none';
	document.getElementsByClassName("txt3xchoix3")[0].style.display = 'none';
	document.getElementsByClassName("txt3xchoix4")[0].style.display = 'none';
	document.getElementsByClassName("suivant3")[0].style.display = 'none';
	document.getElementsByClassName("precedent3")[0].style.display = 'block';
	document.getElementsByClassName("txt3x3")[0].style.display = 'block';
	document.getElementsByClassName("bulle3")[0].style.display = 'none';
	document.getElementsByClassName("graph3")[0].style.opacity = '1';
	document.getElementsByClassName("graph3")[0].style.zIndex = '2';
	document.getElementsByClassName("graph3")[0].style.left = '25%';
}

function precedentQuiz() {
	document.getElementsByClassName("txt3xquestion")[0].style.display = 'block';
	document.getElementsByClassName("txt3xchoix1")[0].style.display = 'block';
	document.getElementsByClassName("txt3xchoix2")[0].style.display = 'block';
	document.getElementsByClassName("txt3xchoix3")[0].style.display = 'block';
	document.getElementsByClassName("txt3xchoix4")[0].style.display = 'block';
	document.getElementsByClassName("suivant3")[0].style.display = 'block';
	document.getElementsByClassName("precedent3")[0].style.display = 'none';
	document.getElementsByClassName("txt3x3")[0].style.display = 'none';
	document.getElementsByClassName("graph3")[0].style.opacity = '0';
	document.getElementsByClassName("graph3")[0].style.zIndex = '-1';
	document.getElementsByClassName("graph3")[0].style.left = '200%';
}

var displayBulleQuiz = 0;

function definitionQuiz() {
	if (displayBulleQuiz === 0) {
		document.getElementsByClassName("bulle3")[0].style.display = 'table';
		displayBulleQuiz = 1;
	} else if (displayBulleQuiz === 1) {
		document.getElementsByClassName("bulle3")[0].style.display = 'none';
		displayBulleQuiz = 0;
	}
}
=======
>>>>>>> 977245828de99ad2e3ce68912ae0f5943bdf5b6c
