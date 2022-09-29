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
			endShape(CLOSE);

//half canvas bc needs to double all shapes for a full pattern
	createCanvas(2400, 1500);
	background(0);
	createPattern();


	//save('pattern.png')

	noLoop();

}

function draw(){
	background(244,220,0)
	//background(0)
	drawPattern();

	textSize(20);
	stroke(255,0,0)
	strokeWeight(3)
	fill(244,244,0)
	text(mouseX + " " + mouseY, mouseX, mouseY)

	stroke(0)
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
let hasBackWaistDarts;

let hasWaistSideCurve;


function determineFeatures(){
	isShort = randint(0,100) < 40;
	hasSleeves = false; // random(0,100) < 70
	hasCoattails = false;
	hasLapels = false;
	hasButtonHoles = false;
	hasCollar = false;

	hasBackNeckDart = randint(0,100) < 70;
	hasFrontDarts = true;

	hasBackWaistDarts = (randint(0,100) < 50 && isShort == false )

	hasWaistSideCurve = (randint(0,100) < 80);


	hasBackWaistDarts = true

	hasLapels = true;
}

let frontCoordinates;
function generateFront(){



	fSleeveInX	 = 120;
	fSleeveInY 	= bSleeveInY;



	fSleeveOutX = fSleeveInX + shoulderdx;
	fSleeveOutY = bSleeveOutY;

	fArmpitX 	= fSleeveOutX - (bArmpitX-bSleeveOutX);
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
	backOffsetX = max([fSleeveOutX, fArmpitX, fSleeveInX, fBottomOutX, fBottomInX]) + 50 + frontOffsetX;

	generateFrontArmHoles();
	generateFrontWaist()
}

let backCoordinates
let coatLength;

let armholeHeight;
let armholeLength;

let shoulderdx; 
let shoulderdy;

function generateBackBase(){
	//thisCanStayConstant
	 bSleeveInX = 200;
	 bSleeveInY = 20;
	 
	 shoulderdx = randint(80,140);
	 shoulderdy = randint(30,60)

	 bSleeveOutX = bSleeveInX - shoulderdx 
	 bSleeveOutY = bSleeveInY + shoulderdy 
	 
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
}

function generateBack(){

	if (isShort == true){
		coatLength = randint(490, 550)
	} else coatLength = randint(800, 1200 )


	generateBackBase();

	 generateBackArmHoles()
	 generateBackNeckline()
	 generateBackNeckDart()
	 generateBackWaist();
	 generateBackWaistDarts();


}

let backWaistDart;
function generateBackWaistDarts(){
	if( hasBackWaistDarts == true){



		//
		//      1
		//     / \
		//    /   \
		//   4     2
		//    \   /
		//     \ /
		//      3


		dartHeight = randint(100,300);

		width = randint(40,100)
		height = randint(100,200);

		y2 = bNecklineY+ ((bBottomInY - bNecklineY)/2) + randint(-30,50)

		let x1;
		if (hasWaistSideCurve){
			x1 = bArmpitX + waistdx + ( bNecklineX - (bArmpitX + waistdx) )/2// + randint(-30,30)
			y2 = bArmpitY + waistdy

		} else {
				x1 = randint(bSleeveOutX + bArmholedx + 50, bNecklineX - 50)
			}
		y1 =  y2 -  dartHeight/2

		x2 = x1 + width/2

		x3 = x1
		y3 = y2 + dartHeight/2
 
		x4 = x1 - width/2
		y4 = y2

		backWaistDart = [x1, y1, x2, y2, x3, y3, x4, y4]
	}
}

function drawBackWaistDarts(){
	if(hasBackWaistDarts){
		drawShape(backWaistDart)
	}

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





// ██╗    ██╗ █████╗ ██╗███████╗████████╗
// ██║    ██║██╔══██╗██║██╔════╝╚══██╔══╝
// ██║ █╗ ██║███████║██║███████╗   ██║   
// ██║███╗██║██╔══██║██║╚════██║   ██║   
// ╚███╔███╔╝██║  ██║██║███████║   ██║   
//  ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝╚══════╝   ╚═╝   
                                      

let bWaist;

let waistdx;
let waistdy;

function generateBackWaist(){
	if(hasWaistSideCurve){
		sideLength = bBottomOutY - bArmpitY
	
		waistdy = 200//randint(60, sideLength/2)
		bWaistY = bArmpitY + waistdy
	
	
		waistdx = 100; //map(bWaistY, bArmpitY, bBottomOutY, bArmpitX, bBottomOutX) + randint(0, 60)
		bWaistX = bArmpitX + waistdx
	
		bWaist = [bArmpitX, bArmpitY, bBottomOutX, bBottomOutY, bWaistX, bWaistY]
	}

}

let fWaist;

function generateFrontWaist(){
	if(hasWaistSideCurve){

		fWaistX = fArmpitX - waistdx;
		fWaistY = fArmpitY + waistdy;

		fWaist = [fArmpitX, fArmpitY, fBottomOutX, fBottomOutY, fWaistX, fWaistY]
	}
}



// ███╗   ██╗███████╗ ██████╗██╗  ██╗██╗     ██╗███╗   ██╗███████╗
// ████╗  ██║██╔════╝██╔════╝██║ ██╔╝██║     ██║████╗  ██║██╔════╝
// ██╔██╗ ██║█████╗  ██║     █████╔╝ ██║     ██║██╔██╗ ██║█████╗  
// ██║╚██╗██║██╔══╝  ██║     ██╔═██╗ ██║     ██║██║╚██╗██║██╔══╝  
// ██║ ╚████║███████╗╚██████╗██║  ██╗███████╗██║██║ ╚████║███████╗
// ╚═╝  ╚═══╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝╚═╝  ╚═══╝╚══════╝
                                                               

let backNeckline;
let hasRoundSquareBackNeckline = false;
let hasSquareBackNeckline = false

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


let frontNecklineIsCurved;
let frontNeckline;

function generateFrontNeckline(){


	frontNecklineIsCurved = randint(0,100) < 70;
	//straight line
	//do nothing


	//square
	frontNeckline = [fSleeveInX, fSleeveInY, fNecklineX, fNecklineY, fSleeveInX, fNecklineY]

}

function drawFrontNeckline(){
	console.log('dfn')
	if(frontNecklineIsCurved ==true){
		drawCurvedShape(frontNeckline, 'frontNecklineCurved')
	}
	else{
		drawShape(frontNeckline,'frontNeckline unvcerv ')
	}
	console.log('dfnw')
}


//  █████╗ ██████╗ ███╗   ███╗██╗  ██╗ ██████╗ ██╗     ███████╗███████╗
// ██╔══██╗██╔══██╗████╗ ████║██║  ██║██╔═══██╗██║     ██╔════╝██╔════╝
// ███████║██████╔╝██╔████╔██║███████║██║   ██║██║     █████╗  ███████╗
// ██╔══██║██╔══██╗██║╚██╔╝██║██╔══██║██║   ██║██║     ██╔══╝  ╚════██║
// ██║  ██║██║  ██║██║ ╚═╝ ██║██║  ██║╚██████╔╝███████╗███████╗███████║
// ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝╚══════╝
                                                                    

let bArmholedx;
let bArmholedy;

let bArmhole;

function generateBackArmHoles(){
	armholeHeight = bArmpitY - bSleeveInY;
	 
	bArmholedx = randint(40, 80);
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


// ███████╗██╗     ███████╗███████╗██╗   ██╗███████╗███████╗
// ██╔════╝██║     ██╔════╝██╔════╝██║   ██║██╔════╝██╔════╝
// ███████╗██║     █████╗  █████╗  ██║   ██║█████╗  ███████╗
// ╚════██║██║     ██╔══╝  ██╔══╝  ╚██╗ ██╔╝██╔══╝  ╚════██║
// ███████║███████╗███████╗███████╗ ╚████╔╝ ███████╗███████║
// ╚══════╝╚══════╝╚══════╝╚══════╝  ╚═══╝  ╚══════╝╚══════╝
                                                         
let sleeveLength;
let sleeveAngle = 50;

let frontSleeveHole;
let backSleeveHole;

let frontSleeve;
let backSleeve
function generateSleeve(){
		sleeveOffsetX = max(bNecklineX, bBottomInX) + backOffsetX + 100


	//sleeve possibly has cutout at shoulder and or armpad
	return;

	sleeveLength = randint(100, 500);



	console.log('genselve')

	fill(122,122,0);

	push();
	translate(500, 0);

	drawCurvedShape(bArmhole);
	pop();

	fsx1 = 10;
	fsy1 = 10;
	fsx2 = fsx1 + (bSleeveOutX - bArmpitX) ;
	fsy2 = fsy1 + (bArmpitY - bSleeveOutY);
	fsx3;
	fsy3;
	fsx4;
	fsy4;

	frontSleeve = [fsx1, fsy1, fsx2, fsy2, fsx3, fsy3, fsx4, fsy4]

	//frontSleeveHole;
	//backSleeveHole;
}

let sleeveOffsetX;

function drawSleeve(){
	//sleeve is same shape four times = cut out of same as armhole

	push()
	translate(sleeveOffsetX,0)
	drawShape(frontSleeve)
	pop()
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
	drawShape(frontCoordinates, 'frontCoordinates');

	fill(0);
	drawCurvedShape(fArmhole, 'farmhole')
	drawCurvedShape(fWaist, 'fwaist')


	pop();
}
function drawBackWaistCurve(){
	if(hasBackWaistDarts && bWaist != undefined){
			drawCurvedShape(bWaist, 'bWaist')

	}
}
function drawBack(){

	push();
	translate(backOffsetX, 0)

	fill(255);
	drawShape(backCoordinates, 'backCoordinates')

	fill(0);

	drawBackWaistCurve();
	drawCurvedShape(bArmhole, 'barmhole')

	if(hasSquareBackNeckline){
		drawShape(backNeckline, 'backNeckline')
	} else (
	drawCurvedShape(backNeckline, 'backNeckline')

		)

	if(hasBackNeckDart){
		drawShape(backNeckDart, 'backNeckDart')
	}

	drawBackWaistDarts();

	pop();
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
                                                
function drawShape(list, name=0){
		if (name!=0 && drawDebug==true){console.log(name)}


	beginShape();
	for(let i = 0; i < list.length; i+=2){
		vertex(list[i], list[i+1]);
	}
	endShape();


	for(let i = 0; i < list.length; i+=2){
		stroke(0,0,255);
		fill(0,255,255);
		circle(list[i], list[i+1], 10);

		fill(0)
		stroke(0)



		
	}

		if (name!=0 && drawDebug==true){console.log(name + ' done')}

}


function drawCurvedShape(list, name = 0){

	if (name!=0 && drawDebug==true){console.log(name)}

	beginShape();
	for(let i = 0; i < list.length; i+=2){
		curveVertex(list[i], list[i+1]);


	}
	curveVertex(list[0], list[1]);
	curveVertex(list[0], list[1]);

	endShape(CLOSE);


	for(let i = 0; i < list.length; i+=2){
		stroke(0,0,255);
		fill(0,255,255);
		circle(list[i], list[i+1], 10);

		fill(0)
		stroke(0)



		
	}

	if (name!=0 && drawDebug==true){console.log(name + ' done')}


}

let drawDebug = true;