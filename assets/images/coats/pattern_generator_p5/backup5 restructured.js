

let bSleeveInX 
let bSleeveInY
let bSleeveOutX
let bSleeveOutY
let bArmpitX
let bArmpitY
let bBottomOutX
let bBottomOutY
let bBottomInX
let bBottomInY
let bNecklineX
let bNecklineY

let	fSleeveInX
let	fSleeveInY
let	fSleeveOutX
let	fSleeveOutY
let	fArmpitX 
let	fArmpitY 
let	fBottomOutX
let	fBottomOutY
let	fBottomInX
let	fBottomInY
let	fNecklineX
let	fNecklineY

let backOffsetX;
let frontOffsetX;


function setup(){
		angleMode(DEGREES)

	createCanvas(2400, 1500);
	background(0);
	createPattern()
}

function draw(){
	background(0)
	drawPattern();

	textSize(20);
	text(mouseX + " " + mouseY, mouseX, mouseY)
}

function createPattern(){
	generatePattern();
	drawPattern();
}

//  ██████╗ ███████╗███╗   ██╗███████╗██████╗  █████╗ ████████╗███████╗
// ██╔════╝ ██╔════╝████╗  ██║██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
// ██║  ███╗█████╗  ██╔██╗ ██║█████╗  ██████╔╝███████║   ██║   █████╗  
// ██║   ██║██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗██╔══██║   ██║   ██╔══╝  
// ╚██████╔╝███████╗██║ ╚████║███████╗██║  ██║██║  ██║   ██║   ███████╗
//  ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝
                                                                    
function generatePattern(){
	determineFeatures();
		generateBack();

	generateFront();

	generateSleeve();
	generateCoattail();
	generateLapels();
	generateCollar();
	generateButtonHoles();

}

let hasSleeves;
let hasCoattails;
let hasLapels;
let hasButtonHoles;
let hasCollar;
let isShort;
function determineFeatures(){
	isShort = random(0,100) < 40;
	hasSleeves = false; // random(0,100) < 70
	hasCoattails = false;
	hasLapels = false;
	hasButtonHoles = false;
	hasCollar = false;
}

let frontCoordinates;
function generateFront(){



	fSleeveInX	 = 120;
	fSleeveInY 	= 50;



	fSleeveOutX = 280;
	fSleeveOutY = bSleeveOutY;

	fArmpitX 	= 340;
	fArmpitY 	= bArmpitY;

	fBottomOutX = 420;
	fBottomOutY = bBottomOutY;

	fBottomInX	 = 0
	fBottomInY	 = 900

	fNecklineX 	= 0;
	fNecklineY 	= 150;	


	frontCoordinates = [fSleeveInX, fSleeveInY,
						fSleeveOutX, fSleeveOutY,
						fArmpitX, fArmpitY,
						fBottomOutX, fBottomOutY,
						fBottomInX, fBottomInY,
						fNecklineX, fNecklineY]

	frontOffsetX = 40
	backOffsetX = max(fSleeveOutX, fArmpitX, fSleeveInX, fBottomOutX, fBottomInX) + 50 + frontOffsetX;
}

let backCoordinates
let coatLength;

let armholeHeight;
let armholeLength;
function generateBack(){

	if (isShort == true){
		coatLength = random(490, 550)
	} else coatLength = random(800, 1200 )


	 bSleeveInX = 200;
	 bSleeveInY = 20;
	 
	 bSleeveOutX = 100;
	 bSleeveOutY = 70;
	 
	 armholeLength = random(260, 300)

	 if (hasSleeves == true) armholeLength+=10;

	 bArmpitX = 60;
	 bArmpitY = bSleeveOutY + armholeLength; //340;

	 armholeLength = dist(bArmpitX, bArmpitY, bSleeveOutX, bSleeveOutY)
	 
	 bBottomOutX = 20;
	 bBottomOutY = bSleeveOutY + coatLength - random(0, 100);
	 
	 bBottomInX = 440// + int(random(-100,0));
	 bBottomInY = bSleeveOutY + coatLength// + int(random(10,80));
	 
	 bNecklineX = 430;
	 bNecklineY = 150;

	 backCoordinates = [bSleeveInX, bSleeveInY,
	 					bSleeveOutX, bSleeveOutY,
	 					bArmpitX, bArmpitY,
	 					bBottomOutX, bBottomOutY,
	 					bBottomInX, bBottomInY,
	 					bNecklineX, bNecklineY]

	 generateBackArmHoles()
	 generateBackNeckline()

}

let backNeckline;
let hasRoundSquareBackNeckline = false;
let hasSquareBackNeckline = false

function generateBackNeckline(){

	if (random(0,100) < 30){
	//square neckline
		if( random(0, 100) < 60){
			hasRoundSquareBackNeckline = true

			bNecklineCurveX = bSleeveInX +20 //+ 30;
			bNecklineCurveY = bNecklineY -10//- 30;

			backNeckline = [ bSleeveInX, bSleeveInY-40, bNecklineX+50, bNecklineY, bNecklineCurveX, bNecklineCurveY]
		}
		else{
			bNecklineCurveX = bSleeveInX
			bNecklineCurveY = bNecklineY

			hasSquareBackNeckline = true;
			backNeckline = [ bSleeveInX, bSleeveInY, bNecklineX, bNecklineY, bNecklineCurveX, bNecklineCurveY]
		}

		
	} else
	
	bNecklineCurveX = random(bSleeveInX+12, bNecklineX-12)
	let yMax = map(bNecklineCurveX, bSleeveInX, bNecklineX, bSleeveInY, bNecklineY )
	bNecklineCurveY = random(yMax,  bNecklineY)


	backNeckline = [ bSleeveInX, bSleeveInY, bNecklineX, bNecklineY, bNecklineCurveX, bNecklineCurveY]
}

let armholedx;
let armholedy;

let bArmhole;

function generateBackArmHoles(){
	let armholeHeight = bArmpitY - bSleeveInY;

	bArmpitX = backCoordinates[4];
	bArmpitY = backCoordinates[5];

	bSleeveOutX = backCoordinates[2];
	bSleeveOutY = backCoordinates[3];
	 
	armholedx = random(20, 80);
	armholedy = random(70, armholeHeight);

	bArmhole = [bArmpitX, bArmpitY, 
				bSleeveOutX, bSleeveOutY, 
				bSleeveOutX + armholedx, bSleeveOutY + armholedy]


}

let fArmhole
function generateFrontArmHoles(){

}

let sleeveLength;
let sleeveAngle = 50;
function generateSleeve(){

	//sleeve possibly has cutout at shoulder and or armpad
	return;

	sleeveLength = random(100, 500);



	console.log('genselve')

	fill(122,122,0);

	push();
	translate(500, 0);

	drawCurvedShape(bArmhole);
	pop();
}
function generateCoattail(){

}
function generateLapels(){

}
function generateCollar(){

}
function generateButtonHoles(){

}


// ██████╗ ██████╗  █████╗ ██╗    ██╗
// ██╔══██╗██╔══██╗██╔══██╗██║    ██║
// ██║  ██║██████╔╝███████║██║ █╗ ██║
// ██║  ██║██╔══██╗██╔══██║██║███╗██║
// ██████╔╝██║  ██║██║  ██║╚███╔███╔╝
// ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚══╝╚══╝ 

function drawPattern(){
	drawFront();
	drawBack();
	drawSleeve();
	drawCoattail();
	drawLapels();
	drawButtonHoles();
	drawCollar();
}

function drawFront(){

	push();
	translate(frontOffsetX, 0);


	fill(255);
	drawShape(frontCoordinates);


	pop();
}

function drawBack(){

	push();
	translate(backOffsetX, 0)

	fill(255);
	drawShape(backCoordinates)

	fill(0);
	drawCurvedShape(bArmhole)

	if(hasSquareBackNeckline){
		drawShape(backNeckline)
	} else (
	drawCurvedShape(backNeckline)

		)


	pop();
}


function drawSleeve(){
	//sleeve is same shape four times = cut out of same as armhole

}
function drawCoattail(){

}
function drawLapels(){

}
function drawButtonHoles(){

}

function drawCollar(){

}


// ██╗  ██╗███████╗██╗     ██████╗ ███████╗██████╗ 
// ██║  ██║██╔════╝██║     ██╔══██╗██╔════╝██╔══██╗
// ███████║█████╗  ██║     ██████╔╝█████╗  ██████╔╝
// ██╔══██║██╔══╝  ██║     ██╔═══╝ ██╔══╝  ██╔══██╗
// ██║  ██║███████╗███████╗██║     ███████╗██║  ██║
// ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝
                                                
function drawShape(list){


	console.log(list)
	beginShape();
	for(let i = 0; i < list.length; i+=2){
		vertex(list[i], list[i+1]);
	}
	endShape();

}

function drawCurvedShape(list){
		console.log(list)

	beginShape();
	for(let i = 0; i < list.length; i+=2){
		curveVertex(list[i], list[i+1]);
	}
	curveVertex(list[0], list[1]);
	curveVertex(list[0], list[1]);

	endShape(CLOSE);

}