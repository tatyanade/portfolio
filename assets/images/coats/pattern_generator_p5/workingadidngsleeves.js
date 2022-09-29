
let values = {};

let features = {};

function setup(){
	angleMode(DEGREES)
	createCanvas(2400,1500)
	noLoop();

	draw();
}


function determineFeatures(){
	features.lengthType = random(['regular', 'crop']); //, 'front_crop',]);

	if (features.lengthType == 'regular'){
		values.coatLength = randint(700, 1000)
	} else if(features.lengthType == 'crop'){
		values.coatLength = randint(400,600)
	}


	features.hasSleeves = true//random([true, false]);
	features.neckline = random(['curve','line'])
	features.hasNeckDart = random([true, false]);



	features.hasCollar = random([true, false, false, false])
	if (features.hasCollar) { features.neckline = 'line'}

	features.sleeveType = random(['none', 'short', 'long'])
	features.hasSideWaist = (features.lengthType!='crop')


	features.hasFrontNeckCurve = true;//random([true, false]);
	features.frontNeckType ='line'//random(['line', 'line', 'line', 'vneck', 'bigScoop'])//, 'square'])//, 'lines']) //no lines


	if (features.frontNeckType == 'square' || features.frontNeckType == 'lines'){features.hasFrontNeckCurve = false}


	features.hasButtons = randint(0,100) < 40 ;
	features.hasBackWaistDarts = (randint(0,100) < 40) && !(features.lengthType == 'crop');



}
// ██████╗ ██████╗  █████╗ ██╗    ██╗
// ██╔══██╗██╔══██╗██╔══██╗██║    ██║
// ██║  ██║██████╔╝███████║██║ █╗ ██║
// ██║  ██║██╔══██╗██╔══██║██║███╗██║
// ██████╔╝██║  ██║██║  ██║╚███╔███╔╝
// ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚══╝╚══╝ 
                                  
function draw(){
	background(0)

	determineFeatures();
	makePattern();
	drawPattern();

	//debugPrint()
}


function debugPrint(){
		print(features);
		print(values);
		print(back);
		print(front);
	
}


function drawPattern(){

	drawBack();
	drawFront();


	drawSleeves();




}

function drawFlipped(){
	//draw flipp
	push()
	translate(width,0)
	scale(-1,1)

	drawBack();
	drawFront();

	pop();
}

function makePattern(){
	makeBack();
	makeFront();
	makeSideWaists();

	makeSleeves();

}
//this doestn awork some realdosn


// ██████╗  █████╗  ██████╗██╗  ██╗
// ██╔══██╗██╔══██╗██╔════╝██║ ██╔╝
// ██████╔╝███████║██║     █████╔╝ 
// ██╔══██╗██╔══██║██║     ██╔═██╗ 
// ██████╔╝██║  ██║╚██████╗██║  ██╗
// ╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
                                

let back;
function makeBack(){
	makeBackBase();
	makeBackNeck();
	makeBackArmhole();
	makeBackNeckDart();
	makeBackWaistDarts();

}



function makeBackNeck(){

	if( features.neckline == 'curve'){

		x = randint(back.sleeveIn.x+12, back.neckline.x-12)

		let yMax = map(x, back.sleeveIn.x, back.neckline.x, back.sleeveIn.y, back.neckline.y)
		y = randint (yMax +12, back.neckline.y - 12)


		back.necklineCurve = {
			x:x,
			y:y
		}
	}
}

function drawBackNeck(){
	if( features.neckline == 'curve'){
		drawCurvedShape( 	[ back.sleeveIn.x, back.sleeveIn.y,
						  	back.neckline.x, back.neckline.y,
						  back.necklineCurve.x, back.necklineCurve.y ])
	} else if (features.neckline == 'line'){
		//do nothing
	}
}


function makeBackBase(){
	//values = {}

	sleeveIn = {
		x: 200,
		y: 20
	}


	values.shoulderdx = randint(80,140);
	values.shoulderdy = randint(30,60);

	//if (features.hasSleeves == true) armholeLength+=10;

	sleeveOut = {
		x: sleeveIn.x - values.shoulderdx,
		y: sleeveIn.y +  values.shoulderdy 
	}


	values.armholedx = randint(50,70);
	values.armholedy = randint(260, 300)
	values.armholeLength = dist(0, 0, 	values.armholedx, 	values.armholedy)

	armpit = {
		x: sleeveOut.x - values.armholedx,
		y: sleeveOut.y + values.armholedy 
	}


	neckline = {
		x: sleeveIn.x + randint(200,250),
		y: sleeveIn.y + randint(100,150)
	}


	bottomIn = {
		x: neckline.x,
		y: sleeveIn.y + values.coatLength
	}

	bottomOut = {
		x: armpit.x + randint( -50, 50),
		y: bottomIn.y + randint (-30,30)
	}


	back = { sleeveIn: sleeveIn,
			 sleeveOut: sleeveOut,
			 armpit: armpit,
			 bottomOut: bottomOut,
			 bottomIn: bottomIn,
			 neckline: neckline}

	values.sidedx =  back.bottomOut.x - back.armpit.x
	values.sidedy =  back.bottomOut.x - back.armpit.x


}



function drawBackBase(){
	drawShape([ back.sleeveIn.x, back.sleeveIn.y,
				back.sleeveOut.x, back.sleeveOut.y,
				back.armpit.x, back.armpit.y,
				back.bottomOut.x, back.bottomOut.y,
				back.bottomIn.x, back.bottomIn.y,
				back.neckline.x, back.neckline.y])
}

function drawBack(){
	push();
	values.xOffsetBack = max(front.armpit.x, front.bottomOut.x) + 20 + values.xOffsetFront
	translate(values.xOffsetBack,0) 

	fill(255);
	drawBackBase();

	fill(0);
	drawBackNeck();
	drawBackArmhole();
	drawBackNeckDart();
	drawBackSideWaist();
		drawBackWaistDarts();


	pop();

}

function makeBackNeckDart(){
	//  dx
	// 3--1
	//  \ | dx
	//   \|
	//    2
	if(features.hasNeckDart == true){

		dy = randint(40,300);
		dx = randint(10,100);

		x1= back.neckline.x
		y1= back.neckline.y
		y2= back.neckline.y+dy;
		x2= map(y2, back.neckline.y, back.bottomIn.y, back.neckline.x, back.bottomIn.x)
		x3= x1 - dx
		y3=	map(x3, back.sleeveIn.x, back.neckline.x, back.sleeveIn.y,back.neckline.y)

		back.neckDart = {
			x1: x1,
			y1: y1,
			x2: x2,
			y2: y2,
			x3: x3,
			y3: y3
		}

	}

}

function drawBackNeckDart(){
	if(features.hasNeckDart == true){
		drawShape([	back.neckDart.x1, back.neckDart.y1,
					back.neckDart.x2, back.neckDart.y2,
					back.neckDart.x3, back.neckDart.y3])

	}
}

function makeBackArmhole(){
	dy = randint(60, values.armholedy)
	dx = map(dy, 0, values.armholedy, 0, values.armholedx) + randint(0, values.armholedx)

	values.drawBackArmhole = {
		dx: dx,
		dy: dy
	}
	back.armhole = {
		x: back.sleeveOut.x + dx,
		y: back.sleeveOut.y + dy
	}
}

function drawBackArmhole(){
	drawCurvedShape([back.armpit.x, back.armpit.y,
					back.sleeveOut.x, back.sleeveOut.y,
					back.armhole.x, back.armhole.y])
}

// ███████╗██████╗  ██████╗ ███╗   ██╗████████╗
// ██╔════╝██╔══██╗██╔═══██╗████╗  ██║╚══██╔══╝
// █████╗  ██████╔╝██║   ██║██╔██╗ ██║   ██║   
// ██╔══╝  ██╔══██╗██║   ██║██║╚██╗██║   ██║   
// ██║     ██║  ██║╚██████╔╝██║ ╚████║   ██║   
// ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   
          

function makeFront(){
	makeFrontBase();
	makeFrontArmhole();
	makeFrontNeckline();
	makeButtons();
}


function drawFront(){
	push();
	translate(values.xOffsetFront,0)

	fill(255);
	drawFrontBase();

	fill(0);
	// drawBackNeck();
	drawFrontArmhole();
	// drawBackNeckDart();
	drawFrontSideWaist();
	drawFrontNeckline();

	drawButtons();

	pop();
}

let front = {}
function makeFrontBase(){

	sleeveIn = {
		x: 120,
		y: back.sleeveIn.y
	}

	sleeveOut = {
		x: sleeveIn.x + values.shoulderdx,
		y: sleeveIn.y +  values.shoulderdy 
	}

	armpit = {
		x: sleeveOut.x + (back.sleeveOut.x - back.armpit.x),//values.armholedx,
		y: sleeveOut.y + values.armholedy 
	}


	necklinedx = randint(150, 250);

	values.xOffsetFront = abs(necklinedx)

	neckline = {
		x: sleeveIn.x - necklinedx, // randint(200,400),
		y: sleeveIn.y + randint(30,200)
	}


	bottomIn = {
		x: neckline.x,
		y: back.bottomIn.y
	}

	bottomOut = {
		x: armpit.x + (back.armpit.x - back.bottomOut.x),// + randint( -50, 50),
		y: bottomOut.y// + randint (-30,30)
	}


	front = { sleeveIn: sleeveIn,
		 sleeveOut: sleeveOut,
		 armpit: armpit,
		 bottomOut: bottomOut,
		 bottomIn: bottomIn,
		 neckline: neckline}

}

function drawFrontBase(){
	drawShape([ front.sleeveIn.x, 	front.sleeveIn.y,
				front.sleeveOut.x, 	front.sleeveOut.y,
				front.armpit.x,	 	front.armpit.y,
				front.bottomOut.x, 	front.bottomOut.y,
				front.bottomIn.x, 	front.bottomIn.y,
				front.neckline.x, 	front.neckline.y])
}



function makeFrontArmhole(){
	//weighter
	features.armholesTheSame = random([true, false, false])

	dx = values.drawBackArmhole.dx
	dy = values.drawBackArmhole.dy

	if(features.armholesTheSame == false){
		dx += randint(-45,15),
		dy += randint(-15,15)
	}

	front.armhole = {
		x: front.sleeveOut.x - dx,
		y: front.sleeveOut.y + dy
	}
}

function drawFrontArmhole(){
	drawCurvedShape([front.armpit.x, front.armpit.y,
					front.sleeveOut.x, front.sleeveOut.y,
					front.armhole.x, front.armhole.y])
}





function makeFrontNeckline(){

	if( features.hasFrontNeckCurve == true){

		x = randint(front.sleeveIn.x+30, front.neckline.x-12)

		let yMax = map(x, front.sleeveIn.x, front.neckline.x, front.sleeveIn.y, front.neckline.y)
		y = randint (yMax -50, front.neckline.y - 12)


		front.necklineCurve = {
			x:x,
			y:y
		}
	} 


	if (features.frontNeckType == 'vneck'){

		dx1 = randint(40, 100)

		x1 = front.neckline.x + dx1 //randint(15,40);


		y1 = front.sleeveIn.y

		dy2 = randint (100,500);

		y2 = front.neckline.y + dy2

		x2 = front.neckline.x


		front.vneck = { x1:x1,
			y1:y1,
			x2:x2,
			y2:y2
		}
	} if (features.frontNeckType == 'bigScoop'){
		x1 = randint(30,50),
		y1 = randint(300,500)

		front.neckScoop= {
			x:x1, 
			y:y1
		}

	} if (features.frontNeckType == 'square'){
		front.neckSquareLength = randint( 120, front.sleeveIn.x - front.neckline.x);
	} if (features.frontNeckType == 'lines') {
		dx = randint(100,200)
		x1 = front.neckline.x + dx
		dy = randint(50,150)
		y1 = front.neckline.y + dy
		x2 = x1+ randint(40,100)
		front.neckLines = {x:x1, y:y1, x2:x2 }


	}
}

function drawFrontNeckline(){
	//fill(233,2,2)
	//['curve', 'line', 'vneck', 'bigScoop'])
	if (features.frontNeckType == 'lines'){
		drawShape([front.neckLines.x, front.neckline.y,
				front.neckLines.x, front.neckLines.y,
				front.neckLines.x2, front.sleeveIn.y,
				front.neckline.x, front.sleeveIn.y])
	}

	if( features.hasFrontNeckCurve == true){
		drawCurvedShape( 	[ front.sleeveIn.x, front.sleeveIn.y,
						  	front.neckline.x, front.neckline.y,
						  front.necklineCurve.x, front.necklineCurve.y ])
	} 
	if (features.frontNeckType == 'vneck'){
		drawShape([ front.vneck.x1, front.vneck.y1,
					front.vneck.x2, front.vneck.y2,
					front.neckline.x, front.neckline.y])

	}

	if (features.frontNeckType == 'square'){
		drawShape([front.neckline.x, front.neckline.y,
					front.neckline.x + front.neckSquareLength, front.sleeveIn.y,
					front.neckline.x + front.neckSquareLength, front.neckline.y])
	}

	if (features.frontNeckType == 'bigScoop'){
		drawCurvedShape([front.neckline.x, front.neckline.y,
			front.neckline.x-40, front.neckScoop.y,
			front.neckScoop.x, front.neckScoop.y,
			front.neckScoop.x, front.sleeveIn.y
			])
	}

	
}

// ██╗    ██╗ █████╗ ██╗███████╗████████╗
// ██║    ██║██╔══██╗██║██╔════╝╚══██╔══╝
// ██║ █╗ ██║███████║██║███████╗   ██║   
// ██║███╗██║██╔══██║██║╚════██║   ██║   
// ╚███╔███╔╝██║  ██║██║███████║   ██║   
//  ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝╚══════╝   ╚═╝   
                                      

function makeSideWaists(){
	if (features.hasSideWaist = true){
		dy =  randint(100, 300)
		dx = randint(20,dy/2)//map(dy, 0, values.sidedy, 0, values.sidedx) + randint(10,75)

		values.waist ={	dx : dx,
						dy : dy
	}

	back.waist = {x: back.armpit.x + dx,
				  y: back.armpit.y + dy}

	front.waist = {x: front.armpit.x - dx,
				   y: front.armpit.y + dy}
}
}

function drawFrontSideWaist(){
	if (features.hasSideWaist = true){


		drawCurvedShape([front.armpit.x, front.armpit.y,
						front.bottomOut.x, front.bottomOut.y,
						front.waist.x, front.waist.y])

	}		
}
function drawBackSideWaist(){
	if (features.hasSideWaist = true){

		drawCurvedShape([back.armpit.x, back.armpit.y,
						back.bottomOut.x, back.bottomOut.y,
						back.waist.x, back.waist.y])


	}	
}

// ███████╗██╗     ███████╗███████╗██╗   ██╗███████╗███████╗
// ██╔════╝██║     ██╔════╝██╔════╝██║   ██║██╔════╝██╔════╝
// ███████╗██║     █████╗  █████╗  ██║   ██║█████╗  ███████╗
// ╚════██║██║     ██╔══╝  ██╔══╝  ╚██╗ ██╔╝██╔══╝  ╚════██║
// ███████║███████╗███████╗███████╗ ╚████╔╝ ███████╗███████║
// ╚══════╝╚══════╝╚══════╝╚══════╝  ╚═══╝  ╚══════╝╚══════╝

function getSleeveArmholes(){
	x1 = back.armpit.x
	y1 = back.armpit.y

	x2 = back.sleeveOut.x
	y2 = back.sleeveOut.y 

	x3 = back.armhole.x
	y3 = back.armhole.y

	//sleeves.armhole = {x1:x1, x2:x2, x3:x3, y1:y1, y2:y2, y3:y3}

	ax1 = x2 + (x2 - x1)
	ay1 = y1

	ax2 = x2
	ay2 = y2

	ax3 = x2 +  (x1 - x2)
	ay3 = y3

	sleeves.backArmhole ={x1:ax1, x2:ax2, x3:ax3, y1:ay1, y2:ay2, y3:ay3}
	sleeves.back = {}
	sleeves.back.armpit = {x: ax1, y:ay1}
	sleeves.back.shoulder = {x:ax2 , y:ay2 }

	fx1 = front.armpit.x
	fy1 = front.armpit.y

	fx2 = front.sleeveOut.x
	fy2 = front.sleeveOut.y 

	fx3 = front.armhole.x
	fy3 = front.armhole.y

	//sleeves.armhole = {x1:x1, x2:x2, x3:x3, y1:y1, y2:y2, y3:y3}

	ax1 = x2 - (fx2 - fx1)
	ay1 = y1

	ax2 = x2
	ay2 = y2

	ax3 = x2 -  (fx1 - fx2)
	ay3 = y3

	sleeves.frontArmhole ={x1:ax1, x2:ax2, x3:ax3, y1:ay1, y2:ay2, y3:ay3}
	sleeves.front = {}
	sleeves.front.armpit = {x: ax1, y:ay1}
	sleeves.front.shoulder = {x:ax2 , y:ay2 }


} 

let sleeves = {}
function makeSleeves(){
	//print('making_sleeve')
	values.sleeveType = 'short'

	getSleeveArmholes()
	values.xOffsetSleeves = values.xOffsetBack + max(back.neckline.x, back.bottomOut.x) - back.armpit.x + (sleeves.backArmhole.x1-sleeves.backArmhole.x3)

	dx = randint(100, 200);
	dy = randint(200)

	values.yOffsetSleeve = back.armpit.y //- back.sleeveOut.y + 20;
	//getSleeveHandholes();
	getSleeveBody()

}


function getSleeveBody(){
	sleeves.angle = randint(30,40);
	sleeves.lengthType = random(['short', 'long'])
	sleeves.armpit = sleeves.back.armpit;
	sleeves.shoulder = sleeves.back.shoulder;
	if (sleeves.lengthType == 'short'){ 
		sleeves.length = randint(100,200)
		sleeves.handHoleType = 'normal'
		sleeves.ballooned = random([false, false, true])}
	else if (sleeves.lengthType == 'long'){
		sleeves.length = randint(300,500)
		sleeves.handHoleType = random(['normal', 'tapered', 'flared'])
		if(sleeves.handHoleType == ' tapered'){ sleeves.ballooned = random([true, false])}
	}
	
	dx  = int(length*cos(sleeves.angle))
	dy = int(length*sin(sleeves.angle))
	sleeves.cuffTop = {x:sleeves.shoulder.x + dx,
	          y:sleeves.shoulder.y + dy,
	          dx:dx,
	          dy:dy};

	// if(sleeves.lengthType == 'short'){
		//works for short nad for long normal
	let cuffBottom = xsect(sleeves.cuffTop.x, sleeves.cuffTop.y, sleeves.angle-90, sleeves.armpit.x, sleeves.armpit.y, sleeves.angle)
	sleeves.cuffBottom = {x:cuffBottom[0], y:cuffBottom[1]}




	// }
	if(sleeves.lengthType == 'long'){
		if(sleeves.handHoleType == 'tapered'){
		let tempAngle2 = sleeves.angle - random(2,6)
		cuffBottom = xsect(sleeves.cuffTop.x, sleeves.cuffTop.y, tempAngle2-90, sleeves.armpit.x, sleeves.armpit.y, tempAngle2)

		} else if(sleeves.handHoleType == 'flared')
			//angle2 =  sleeves.angle + random(10,12)
			cuffBottom = xsect(sleeves.cuffTop.x, sleeves.cuffTop.y,  sleeves.angle-10-90, sleeves.armpit.x, sleeves.armpit.y, sleeves.angle + random(10,12))
		}
	
	sleeves.cuffBottom = {x:cuffBottom[0], y:cuffBottom[1]}

	if(sleeves.cuffBottom.x < sleeves.back.armpit.x){
		sleeves.cuffBottom = sleeves.armpit
	}

	if(sleeves.ballooned == true){
		if(sleeves.lengthType == 'short')
			sleeves.balloonDiameter = sleeves.length
		} else {
			sleeves.ballonDiameter = random(200,240)
	}		
}


function drawSleeveBody(){

	print('drawSleeveBody')
	armpoints = [sleeves.shoulder.x, sleeves.shoulder.y,
				sleeves.cuffTop.x, sleeves.cuffTop.y,
				sleeves.cuffBottom.x, sleeves.cuffBottom.y,
				sleeves.armpit.x, sleeves.armpit.y]
				print(armpoints)
	drawShape(armpoints)

	circle(sleeves.shoulder.x, sleeves.shoulder.y,20)
circle(sleeves.cuffTop.x, sleeves.cuffTop.y,20)

circle(sleeves.armpit.x, sleeves.armpit.y,20)
circle(sleeves.cuffBottom.x, sleeves.cuffBottom.y,20)


	if(sleeves.ballooned == true){
		diameter = sleeves.ballonDiameter;
		radius = diameter/2
	    circledx = radius*cos(sleeves.angle)
	    circledy = radius*sin(sleeves.angle)
	    cx = sleeves.shoulder.x + circledx
	    cy = sleeves.shoulder.y + circledy
	    circle(cx, cy, diameter)
	}

}

function drawBackSleeve(){
	pts = sleeves.backArmhole
	drawCurvedShape([pts.x1, pts.y1, pts.x2, pts.y2, pts.x3, pts.y3])

	//shoulder = sleeves.back.shoulder
	//handTop = sleeves.back.handTop

	//please = sleeves.back.handTopPlease
	//stroke(344,2,2)
	//line(shoulder.x, shoulder.y, handTop.x, handTop.y)
	//holeHeight = abs(sleeves.back.armpit.x - sleeves.back.shoulder.x)
	//line(handTop.x, handTop.y, handTop.x , handTop.y +  holeHeight)
	//	line(shoulder.x, shoulder.y,please.x, please.y)

	drawSleeveBody();
}




function drawFrontSleeve(){
	pts = sleeves.frontArmhole
	drawCurvedShape([pts.x1, pts.y1, pts.x2, pts.y2, pts.x3, pts.y3])	

	drawSleeveBody();
}
function drawSleeves(){
	push()
	translate( values.xOffsetSleeves ,0)

		drawBackSleeve();

		push()
		frontsleeveXoffset = front.armhole.x - front.neckline.x
		translate(0, values.yOffsetSleeve)
		drawFrontSleeve();



		pop();

		pop()


}


function getSleeveHandholes(){
	print('getSleeveHandholes')
	if(values.sleeveType == 'short'){
		sleeves.topLength = 100//randint(100,150);
		sleeves.angle = 30//350// randint(20, 340);


		lineLength = sleeves.topLength
		angle = sleeves.angle

		print(angle + '  ' + lineLength)

		x1 = sleeves.back.shoulder.x
		y1 = sleeves.back.shoulder.y

	  	let dx = int(100 * cos(30)) //lineLength * cos(angle)
	  	let dy = int(100 * sin(30))//lineLength * sin(angle)
	  	print(dx+ ' ' + dy)
	  	let x2 = x1 + dx
	  	let y2 = y1 + dy

	  	// print(x1 + '  s ' + y1)
	  	// print(x2 + ' a ' + y2)
	  	// print(dist(x1,y1, x2, y2))

		sleeves.back.handHoleTop = {x:x, y:y, dx:dx, dy:dy }


	shoulder = sleeves.back.shoulder
	handTop = sleeves.back.handHoleTop
	sleeves.back.handTop = {x:shoulder.x +  handTop.dx, y:shoulder.y+ handTop.dy}
	}
	print(sleeves)
}


// ██████╗  █████╗  ██████╗██╗  ██╗██████╗  █████╗ ██████╗ ████████╗███████╗
// ██╔══██╗██╔══██╗██╔════╝██║ ██╔╝██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
// ██████╔╝███████║██║     █████╔╝ ██║  ██║███████║██████╔╝   ██║   ███████╗
// ██╔══██╗██╔══██║██║     ██╔═██╗ ██║  ██║██╔══██║██╔══██╗   ██║   ╚════██║
// ██████╔╝██║  ██║╚██████╗██║  ██╗██████╔╝██║  ██║██║  ██║   ██║   ███████║
// ╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝
//      1
//     / \
//    /   \
//   4     2
//    \   /
//     \ /
//      3



function makeBackWaistDarts(){
	if(features.hasBackWaistDarts == true){
		width = randint(40,65)
		height = randint(100,250);	

		let y2 = back.neckline.y + (back.bottomIn.y + back.neckline.y)/2 + 	randint(-30,50);
		let x1 = randint(back.sleeveOut.x + values.armholedx + 50, back.neckline.x - 50)

		if(features.hasWaistSideCurve == true){
			x1 = back.armpit.x + values.waistdx + ( back.neckline.x - (back.armpit.x + values.waistdy))/2
			y2 = back.waist.y //back.armpit.y + values.waistdx
		}

		y1 = y2 - height/2
		x2 = x1+width/2

		x3 = x1
		y3 = y2 + height/2

		x4 = x1 - width/2
		y4 = y2


		back.waistDart = {
			x1:x1, y1:y1,
			x2:x2, y2:y2,
			x3:x3, y3:y3, 
			x4:x4, y4:y4
		}

	}

}

function drawBackWaistDarts(){
	if(features.hasBackWaistDarts == true){
		shape = back.waistDart

		drawShape([shape.x1, shape.y1,shape.x2,shape.y2, shape.x3,shape.y3, shape.x4, shape.y4])

	}

}



// ██████╗ ██╗   ██╗████████╗████████╗ ██████╗ ███╗   ██╗███████╗
// ██╔══██╗██║   ██║╚══██╔══╝╚══██╔══╝██╔═══██╗████╗  ██║██╔════╝
// ██████╔╝██║   ██║   ██║      ██║   ██║   ██║██╔██╗ ██║███████╗
// ██╔══██╗██║   ██║   ██║      ██║   ██║   ██║██║╚██╗██║╚════██║
// ██████╔╝╚██████╔╝   ██║      ██║   ╚██████╔╝██║ ╚████║███████║
// ╚═════╝  ╚═════╝    ╚═╝      ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚══════╝
                   
let buttons = {}

function makeButtons(){
	if(features.hasButtons == true){

		buttons.width = randint(20,40);
		buttons.height = random([buttons.width,  randint(14,23)])

		buttons.dx = randint( 40, 50);
		buttons.dy = randint(40,120)
		buttons.spacing = buttons.height + randint(30, 90);


		buttons.start = { x: front.bottomIn.x + buttons.dx,
						  y: front.neckline.y + buttons.dy
		}

		

		maxButtons = (front.bottomOut.y - buttons.start.y )/buttons.spacing
		buttons.totalButtons = randint(0,maxButtons);
	}
}   

function drawButtons(){
	if(features.hasButtons == true){
		x = buttons.start.x
		y = buttons.start.y
		buttonWidth = buttons.width
		buttonHeight = buttons.height
		spacing = buttons.spacing

		for (i = 0; i< buttons.totalButtons; i++){
			//fill(244, 0, 0)
			ellipse(x, y, buttonWidth, buttonHeight);
			y+=spacing

		}
	}
}                                                      







function drawShape(list, name=0){
	if (name!=0){console.log(name)}


	beginShape();
	for(let i = 0; i < list.length; i+=2){
		vertex(list[i], list[i+1]);
	}
	endShape();

}


function randint(x, y){
	return int(random(x, y))
}



function drawCurvedShape(list, name = 0){

	// if (name!=0 && drawDebug==true){console.log(name)}

	beginShape();
	for(let i = 0; i < list.length; i+=2){
		curveVertex(list[i], list[i+1]);


	}
	//curveVertex(list[0], list[1]);
	//curveVertex(list[0], list[1]);

	endShape(CLOSE);

}
function keyPressed(){
	
	//print('keyPressed')
	//print(month() + '_' + day() + '_' + hour() + "_" + minute() +  "_" + second())
	//save("coat" + month() + '_' + day() + '_' + hour() + "_" + minute() +  "_" + second() + ".png")

	draw();
	//print(features)
	//print(back)
}




//https://math.stackexchange.com/questions/1990698/intersection-of-two-lines-each-defined-by-a-point-and-an-angle
function xsect(x0, y0, a0, x1, y1, a1) {
    if ((((a0-a1) % 180) + 180) % 180 === 0) throw parallelError
    if (((a0 % 180) + 180) % 180 === 90) {
        // vertical line at x = x0
        return [x0, tan(a1) * (x0-x1) + y1]//Math.tan(a1*toRad) * (x0-x1) + y1]
    }
    else if (((a1 % 180) + 180) % 180 === 90) {
        // vertical line at x = x0
        return [x1, tan(a0) * (x1-x0) + y0]
    }
    let m0 = tan(a0) // Line 0: y = m0 (x - x0) + y0
    let m1 = tan(a1) // Line 1: y = m1 (x - x1) + y1
    let x = ((m0 * x0 - m1 * x1) - (y0 - y1)) / (m0 - m1)
    return [x, m0 * (x - x0) + y0]
}