// function audioFile(){
// 	var x = document.getElementById("myAudio").duration;
// 	document.getElementById("demo").innerHTML = x;
// }


var audioFile = document.getElementById("myAudio");
function play() {
	audioFile.play();
}

function pause(){
	audioFile.pause();
}
