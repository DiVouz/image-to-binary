let img;
let img_url = GetURLParameter('url');
let jump = GetURLParameter('jump');
let res = '';

function preload() {
	img = loadImage(img_url);
}

function setup() {
	createCanvas(img.width, img.height);
  	background(0);

  	jump = parseInt(jump, 10);

  	img.loadPixels();
  	
  	fill(255);
	textSize(jump);

	for (let x = 0; x < img.width; x += jump) {
    	for (let y = 0; y < img.height; y += jump) {

    		let loc = (x + y * img.width) * 4;
    		let imgP = img.pixels[loc];

    		if(imgP > 128){
    			text('1', x, y);
    			res += '1';
    		}else{
    			text('0', x, y);
    			res += '0';
    		}
    	}
    	res += '\n';
  	}

  	printText();
}

function printText() {
	console.log(res);
}

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}