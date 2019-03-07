function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    //this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
   // this.stop = function(){
    //    this.sound.pause();
    //}    
}

function pan01() {
	var potPan = new sound('sounds/pan01.wav');
	potPan.play();
}

function pan02() {
	var potPan = new sound('sounds/pan02.wav');
	potPan.play();
}

function pan03() {
	var potPan = new sound('sounds/pan03.wav');
	potPan.play();
}

function pan04() {
	var potPan = new sound('sounds/pan04.wav');
	potPan.play();
}

function pan05() {
	var potPan = new sound('sounds/pan05.wav');
	potPan.play();
}

function pan06() {
	var potPan = new sound('sounds/pan06.wav');
	potPan.play();
}

function pan07() {
	var potPan = new sound('sounds/pan07.wav');
	potPan.play();
}

function pan08() {
	var potPan = new sound('sounds/pan08.wav');
	potPan.play();
}



