

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


function randint(x, y){
	return int(random(x, y))
}
function setup(){
		angleMode(DEGREES)

	createCanvas(2400, 1500);
	background(0);
	createPattern()

	noLoop();
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
	isShort = randint(0,100) < 40;
	hasSleeves = false; // random(0,100) < 70
	hasCoattails = false;
	hasLapels = false;
	hasButtonHoles = false;
	hasCollar = false;

	hasBackNeckDart = true;
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
	fBottomInY	 = fBottomOutY + randint(-20,20)

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

	generateFrontArmHoles();
	generateFrontWaist()
}

let backCoordinates
let coatLength;

let armholeHeight;
let armholeLength;


function generateBack(){

	if (isShort == true){
		coatLength = randint(490, 550)
	} else coatLength = randint(800, 1200 )


	 bSleeveInX = 200;
	 bSleeveInY = 20;
	 
	 bSleeveOutX = 100;
	 bSleeveOutY = 70;
	 
	 armholeLength = randint(260, 300)

	 if (hasSleeves == true) armholeLength+=10;

	 bArmpitX = 60;
	 bArmpitY = bSleeveOutY + armholeLength; //340;

	 armholeLength = dist(bArmpitX, bArmpitY, bSleeveOutX, bSleeveOutY)
	 
	 bBottomOutX = 20;
	 bBottomOutY = bSleeveOutY + coatLength - randint(0, 100);
	 
	 bBottomInX = 440// + int(randint(-100,0));
	 bBottomInY = bSleeveOutY + coatLength// + int(randint(10,80));
	 
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
	 generateBackNeckDart()
	 generateBackWaist();


}

let hasBackNeckDart;
let backNeckDart;
function generateBackNeckDart(){
	x1 = bNecklineX;
	y1 = bSleeveInY;

	x2 = bNecklineX + 20;
	y2 = bNecklineY + randint(120,min(400, coatLength))

	x3 = bNecklineX - randint(20,100);
	y3 = y1 

	backNeckDart = [x1, y1, x2, y2, x3, y3]
}


let backNeckline;
let hasRoundSquareBackNeckline = false;
let hasSquareBackNeckline = false


let bWaist

let waistdx;
let waistdy;

function generateBackWaist(){

	sideLength = bBottomOutY - bArmpitY

	waistdy = randint(60, sideLength/2)
	bWaistY = bArmpitY + waistdy

	
	waistdx = map(bWaistY, bArmpitY, bBottomOutY, bArmpitX, bBottomOutX) + randint(0, 60)


	// bWaistY = int(random(bArmpitY+120,bBottomOutY-50))
	// let xLimit = map(bWaistY, bArmpitY, bBottomOutY, bArmpitX, bBottomOutX)
	// bWaistX = xLimit + int(random(0, 100))

	bWaistX = bArmpitX + waistdx

	// waistdx = bWaistX - bArmpitX
	// waistdy = bWaistY - bArmpitY


	bWaist = [bArmpitX, bArmpitY, bBottomOutX, bBottomOutY, bWaistX, bWaistY]

}

let fWaist;
function generateFrontWaist(){
	fWaistX = fArmpitX - waistdx;
	fWaistY = fArmpitY + bArmpitY

	fWaist = [fArmpitX, fArmpitY, fBottomOutX, fBottomOutY, fWaistX, fWaistY]

}


function generateBackNeckline(){

	if (randint(0,100) < 30){
	//square neckline
		if( randint(0, 100) < 60){
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
	
	bNecklineCurveX = randint(bSleeveInX+12, bNecklineX-12)
	let yMax = map(bNecklineCurveX, bSleeveInX, bNecklineX, bSleeveInY, bNecklineY )
	bNecklineCurveY = randint(yMax,  bNecklineY)


	backNeckline = [ bSleeveInX, bSleeveInY, bNecklineX, bNecklineY, bNecklineCurveX, bNecklineCurveY]
}

let bArmholedx;
let bArmholedy;

let bArmhole;

function generateBackArmHoles(){
	armholeHeight = bArmpitY - bSleeveInY;
	 
	bArmholedx = randint(20, 80);
	bArmholedy = randint(70, armholeHeight-50);

	bArmhole = [bArmpitX, 					bArmpitY, 
				bSleeveOutX, 				bSleeveOutY, 
				bSleeveOutX + bArmholedx, 	bSleeveOutY + bArmholedy]
}

let fArmholedx;
let fArmholedy;

let fArmhole;

function generateFrontArmHoles(){

	fArmholedx = bArmholedx - randint(25);
	fArmholedy = bArmholedy + randint(-20, 0)

	fArmhole = [fArmpitX, fArmpitY,
				fSleeveOutX, fSleeveOutY,
				fSleeveOutX - fArmholedx, fSleeveOutY + fArmholedy]

}

let sleeveLength;
let sleeveAngle = 50;
function generateSleeve(){

	//sleeve possibly has cutout at shoulder and or armpad
	return;

	sleeveLength = randint(100, 500);



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
	
	drawBack();
	drawFront();
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

	fill(0);
	drawCurvedShape(fArmhole)
	drawCurvedShape(fWaist)


	pop();
}

function drawBack(){

	push();
	translate(backOffsetX, 0)

	fill(255);
	drawShape(backCoordinates)

	fill(0);
	drawCurvedShape(bWaist)
	drawCurvedShape(bArmhole)

	if(hasSquareBackNeckline){
		drawShape(backNeckline)
	} else (
	drawCurvedShape(backNeckline)

		)

	if(hasBackNeckDart){
		drawShape(backNeckDart)
	}

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